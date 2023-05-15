import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  Commande:any=[]
  @ViewChild('infoCommande') infoCommande!: TemplateRef<any>;


  getAllCommande(){
    this.link.getAllCommande().subscribe((response) =>{
      this.Commande = response
    })
  }
  openInfo(){
    this.dialog.open(this.infoCommande);

  }

  constructor(private link:StoreService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllCommande()
  }



}
