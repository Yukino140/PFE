import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Produit } from 'src/app/models/produit';
import { Stock } from 'src/app/models/stock';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-magazin',
  templateUrl: './magazin.component.html',
  styleUrls: ['./magazin.component.scss']
})

export class MagazinComponent {

constructor(private store:StoreService,private dialogue:MatDialog){}

  Magazins:any=[]
  Stock:any=[]
  getMagasins(){
    this.store.getAllMagasin().subscribe(res=>{
      this.Magazins=res
    })
  }
  getStock(id:number){
    this.store.getstockbyMagazin(id).subscribe(res=>{
      this.Stock=res
      this.Stock.forEach((s: { idmagasin: any; idprod: any; magasin: Object; prod: Produit; })=>{
        let fk=s.idmagasin
        let fk1=s.idprod
        this.store.getOneMagazin(fk).subscribe(res=>{
          s.magasin=res
        })
        this.store.getProduitById(fk1).subscribe(res=>{
          s.prod=res
          console.log(this.Stock)
        })
      })
    })
  }
ngOnInit():void{
  this.getMagasins()
}


@ViewChild('histoStock')histock!:TemplateRef<any>
histostock(id:number){
  this.dialogue.open(this.histock)
  this.getStock(id)
}

@ViewChild('addstock')stock!:TemplateRef<any>
k!:any
addStock(id:number){
  this.dialogue.open(this.stock)
  this.getProduit()
  this.store.getOneMagazin(id).subscribe(res=>{
    this.k=res
  })
}
stck:FormGroup=new FormGroup({
  prod:new FormControl(''),
  qte:new FormControl(''),

})
newStock(id:number) {

  this.store.getOneMagazin(id).subscribe(res=>{
    let m:any=res
    let stock:Stock=new Stock(this.prod,m[0].id,this.qte)
    this.store.addstock(stock).subscribe(()=>{
      this.dialogue.closeAll()
      window.location.reload()
    })
  })

}
get prod(){
  return this.stck.get('prod')?.value
}
get qte(){
  return this.stck.get('qte')?.value
}

Produit:any=[]
getProduit(){
  this.store.AdmingetAllProducts().subscribe(res=>{
    this.Produit=res
  })
}
}
