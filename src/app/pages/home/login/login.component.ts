import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Credentials } from 'src/app/models/credentials';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private dialog:MatDialog,private store:StoreService) { }
  login:FormGroup=new FormGroup({
    'email':new FormControl(''),
    'pass':new FormControl('')
  });
  signup:FormGroup=new FormGroup({
    'emailC':new FormControl(''),
    'username':new FormControl(''),
    'nom':new FormControl(''),
    'tel':new FormControl(''),
    'addr':new FormControl(''),
    'matFisc':new FormControl(''),

  })
  get email(){
    return this.login.get('email')?.value
  }
  get pass(){
    return this.login.get('pass')?.value
  }
  get emailC(){
    return this.signup.get('emailC')?.value
  }
  get username(){
    return this.signup.get('username')?.value
  }
  get nom(){
    return this.signup.get('nom')?.value
  }
  get tel(){
    return this.signup.get('tel')?.value
  }
  get addr(){
    return this.signup.get('addr')?.value
  }
  get matFisc(){
    return this.signup.get('matFisc')?.value
  }


  async Login(){
    let c:Credentials=new Credentials(this.email,this.pass)
    this.store.login(c).subscribe(res=>{
      let k:any=res
      localStorage.setItem('email',k.email)
      localStorage.setItem('nom',k.nom)
      localStorage.setItem('username',k.username)
      localStorage.setItem('telephone',k.telephone)
      localStorage.setItem('adresse',k.adresse)
      localStorage.setItem('role',k.role)
      localStorage.setItem('matFisc',k.matFiscale)
      localStorage.setItem('id',k.id)
     this.verify()
    })





  }
  async verify(){
    if(localStorage.getItem('role')=='Admin'){
      await this.router.navigate(['/Admin/dashboard']);
       window.location.reload()
     }else if(localStorage.getItem('role')=='Client'){
      await this.router.navigate(['/client/main']);
       window.location.reload()
     }else{
       this.dialog.open(this.erreurlogin)
     }
  }
  ngOnInit(): void {
  }
  @ViewChild('signupform') signupform!: TemplateRef<any>;
  @ViewChild('successSignUp') sucessSignUp!: TemplateRef<any>;
  @ViewChild('erreurlogin') erreurlogin!: TemplateRef<any>;


continue(){
this.dialog.open(this.signupform)
}
signUp(){
  let c:Client=new Client(this.username,this.emailC,this.nom,this.tel,this.addr,"Client",this.matFisc)
  this.store.signUp(c).subscribe(()=>{
    this.dialog.closeAll()
    this.dialog.open(this.sucessSignUp)
  })
  console.log(c)
}
close(){
  this.dialog.closeAll()
}

}
