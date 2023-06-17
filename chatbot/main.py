import nltk
nltk.download('punkt')
from nltk.stem.lancaster import LancasterStemmer
stemmer=LancasterStemmer()

import numpy as np
import tflearn
import pickle
import tensorflow 
from tensorflow.python.framework import ops


from flask_cors import CORS


import random
import json
from flask import Flask,request

with open("intents.json") as file:
    data =json.load(file)

try:
   with open("data.pickle","rb") as f:
       words,labels,training,output=pickle.load(f)  
except:
    words = []
    labels = []
    docs_x=[]
    docs_y=[]

    for intent in data["intents"]:
        for pattern in intent["patterns"]:
            wrds = nltk.word_tokenize(pattern)
            words.extend(wrds)
            docs_x.append(wrds)
            docs_y.append(intent["tag"])
            if intent["tag"] not in labels:
                labels.append(intent['tag'])
                
    words =[stemmer.stem(w.lower()) for w in words if w != "?"]
    words = sorted(list(set(words)))

    labels =sorted(labels)

    training = []
    output=[]
    out_empty = [0 for _ in range(len(labels))]

    for x,doc in enumerate(docs_x):
        bag = []
        
        wrds = [stemmer.stem(w) for w in doc]
        
        for w in words:
            if w in wrds:
                bag.append(1)
            else:
                bag.append(0)
        
        output_row = out_empty[:]
        output_row[labels.index(docs_y[x])]=1
        
        training.append(bag)
        output.append(output_row)
        
    training = np.array(training)
    output = np.array(output)
    with open("data.pickle","wb") as f:
       pickle.dump((words,labels,training,output),f)

tensorflow.compat.v1.reset_default_graph()

net = tflearn.input_data(shape=[None, len(training[0])])
net = tflearn.fully_connected(net,8)
net = tflearn.fully_connected(net,8)
net = tflearn.fully_connected(net,len(output[0]),activation="softmax")
net = tflearn.regression(net)

model = tflearn.DNN(net)

try:
    model.load("model.tflearn")
except:
    model.fit(training,output, n_epoch=1000 ,batch_size=8,show_metric=True)
    model.save("model.tflearn")

def bag_of_words(s,words):
    bag = [0 for _ in range(len(words))]
    
    s_words = nltk.word_tokenize(s)
    s_words = [stemmer.stem(word.lower()) for word in s_words]
    
    for se in s_words:
        for i,w in enumerate(words):
            if w ==se:
                bag[i]=1
    return np.array(bag)

def chat(msg):
    print("Start talking with the bot (type quit to stop)")
    while True:
        
        if msg.lower() =="quit":
            break;
        results = model.predict([bag_of_words(msg,words)])[0]
        result_index = np.argmax(results)
        tag = labels[result_index]
        
        if results[result_index] >0.7:
        
            for tg in data["intents"]:
                if tg['tag']==tag:
                    responses = tg['responses']
            # print(random.choice(responses))
            return json.dumps({
                "message" : random.choice(responses),
                "issuer" : "BOT"
                })
        else:
            # print("I didn't get that try again")
            return "I didn't get that try again"


app =Flask(__name__)
CORS(app)

@app.get("/")
def show():
    return "hello"


@app.post("/chat")
def predict():
    msg = json.loads(request.data)
    print()
    print(msg["message"])
    print()
    # return json.dumps({"message": "FUCK OFF"})
    return chat(msg["message"])
    
if __name__ == '__main__':
    app.run()