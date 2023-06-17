import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-liste-admins',
  templateUrl: './liste-admins.component.html',
  styleUrls: ['./liste-admins.component.scss']
})
export class ListeAdminsComponent {

    constructor(private store:StoreService){}

Client:any=[]

  getClient(){
    this.store.getClients().subscribe(res =>{
      this.Client=res;
    })
  }

  ngOnInit():void {
    this.getClient()
  }
}
