import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { find } from 'highcharts';
import { Produit } from 'src/app/models/produit';

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
  openInfo(id:number){
    this.dialog.open(this.infoCommande);
    this.info(id)
  }
  LigneCommande:any=[]
  info(id:number){
    this.link.getLigneCommandeByid(id).subscribe((data)=>{



      this.LigneCommande = data;
      this.LigneCommande.forEach((commande: { idprod: any; prod: Produit; })=>{
        let foreignKey = commande.idprod
        this.link.getProduitById(foreignKey).subscribe((data)=>{
          commande.prod = data;
        })
      })


      console.log(this.LigneCommande)

    })
  }

  constructor(private link:StoreService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllCommande()
  }






}
