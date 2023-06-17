import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/models/client';
import { StoreService } from 'src/app/services/store.service';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(private store: StoreService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getClient()
  }
  Client:any=[]

  getClient(){
    this.store.getClients().subscribe(res =>{
      this.Client=res;
    })
  }

  @ViewChild('infoClient') infoClient!: TemplateRef<any>;
  @ViewChild('passwordgenerate') passwordgenerate!: TemplateRef<any>;

  searchTerm:string=''
filterData(){
  if(this.searchTerm){
    this.Client =this.Client.filter((item:any)=>{
      return Object.values(item).some(v=>{
        String(v).toLowerCase().includes(this.searchTerm.toLowerCase())

      })


    })
    console.log(this.Client)
  }else{
    this.getClient()
  }
}
k:any
open(id:number){
  this.dialog.open(this.infoClient)
  this.store.getOneClient(id).subscribe(res=>{
    this.k = res})
}


generate(id:number){

  let one:any
  let two!:Client
  this.store.getOneClient(id).subscribe(async res=>{
    one = res
    let m=this.refrech()

    two=new Client(one.username, one.email,one.nom,one.telephone,one.adresse,one.role,one.matFiscale,m)
    this.store.modifyAccount(one.id,two).subscribe(()=>{
      alert("mot de passe crée")
    })
    const email = {
      recipient: one.email,
      subject: 'Information du Compte',
      content: 'Votre mot de passe est: '+ m
    };
    this.sendmail(email)
  })
}
send(id:number){


}

sendmail(m:any){
  console.log(m)
  this.store.snedmail(m).subscribe(()=>{
    alert("un email a été envoyé")
  })
}


refrech(){
  let randomstring!: string
  let characters="ABCDEFGHIJKLMNOPQRSTUVWYZ123456789abcdefghijklmnopqrstuvwyz-!_0"
  for(let i=0;i<=5;i++){
    randomstring += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return(randomstring)
 }

  newPass:FormGroup=new FormGroup({
    pass:new FormControl('')
  })

  makeadmin(id:number){
    let a:Client
    this.store.getOneClient(id).subscribe(async res=>{
      let b:any=res
      a=new Client(b.username, b.email,b.nom,b.telephone,b.adresse,"Admin",b.matFiscale,b.password)
      this.store.modifyAccount(b.id,a).subscribe(()=>{
        alert(b.username+" est un admin")
      })
    })
  }
}
