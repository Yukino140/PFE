import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nom=localStorage.getItem('nom')
  adresse=localStorage.getItem('adresse')
  email=localStorage.getItem('email')
  telephone=localStorage.getItem('telephone')
  username=localStorage.getItem('username')
  matFiscal=localStorage.getItem('matFisc')

}
