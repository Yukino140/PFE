import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Reclamation } from 'src/app/models/reclamation';
import { Message, StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent {
  constructor(private link:StoreService) {}
  messages: Message[] = [

  ];
f:FormGroup=new FormGroup({
  newMessage:new FormControl('')
});
get newMessage(){
  return this.f.get('newMessage')?.value;
}
setMessage(s:String){
  this.f.get('newMessage')?.setValue(s);
}
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const msg = new Message();
      msg.message = this.newMessage;
      msg.issuer = "USER"
      this.messages.push(msg);
      this.link.chat(msg).subscribe((res) => {
        let k:any=res
        console.log(res);
        this.messages.push(res);
        console.log(res)
        if(k.intention=="Reclamation"){
          let r:Reclamation=new Reclamation(msg.message)
          this.link.nouveauReclamation(r).subscribe(()=>{
            alert('success')
          })
        }
      })
      this.setMessage('')
    }
  }

}
