import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-client',
  templateUrl: './service-client.component.html',
  styleUrls: ['./service-client.component.scss']
})
export class ServiceClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toAccountDetails(){
    this.router.navigate(['/client//account'])
  }
  toFactures(){
    this.router.navigate(['/client//facture'])
  }
  toCommandes(){
    this.router.navigate(['/client//commandes'])
  }
  toTrack(){
    this.router.navigate(['/client//trackOrder'])
  }
}
