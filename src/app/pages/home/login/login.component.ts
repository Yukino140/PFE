import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  login:FormGroup=new FormGroup({
    'email':new FormControl(''),
    'pass':new FormControl('')
  });
  signup:FormGroup=new FormGroup({
    'emailC':new FormControl(''),
    'passC':new FormControl('')
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
  get passC(){
    return this.signup.get('passC')?.value
  }
  Login(){
    if((this.email=="admin")&&(this.pass=="admin")){
      this.router.navigate(['/Admin']);
    }else{
      this.router.navigate(['/client/main']);
    }
    localStorage.setItem('email',this.email);
    localStorage.setItem('pass',this.pass);
  }
  ngOnInit(): void {
  }

}
