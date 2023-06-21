import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LigneCommande } from 'src/app/models/ligne-commande';
import { Produit } from 'src/app/models/produit';
import { Retour } from 'src/app/models/retour';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-demande-retour',
  templateUrl: './demande-retour.component.html',
  styleUrls: ['./demande-retour.component.scss']
})
export class DemandeRetourComponent {

  constructor(private store: StoreService,private dialoge:MatDialog){}

  Retour:any=[]

  getRetours(){
    this.store.getAllRetourses().subscribe(res=>{
      this.Retour = res;
    this.Retour.forEach((r: {
      client: Object;
      cm: any;
      prd: Produit; idcommande: any; commande: LigneCommande;
})=>{
      let foreignKey = r.idcommande
      this.store.getOneLigneCommandeByid(foreignKey).subscribe((data)=>{
        r.commande = data;
        let lg:any=data
        lg.forEach((ligne: { idprod: any; prd: Produit; })=>{
        let fk=lg[0].idprod
        let fk1=lg[0].idCommande
        this.store.getProduitById(fk).subscribe((data)=>{
          r.prd = data;
        })
        this.store.getOneCommande(fk1).subscribe((data)=>{
          let k:any=data
          r.cm=k
          this.store.getOneClient(k[0].idClient).subscribe((data)=>{
            r.client=data
          })
        })
        })
      })
    })
    console.log(this.Retour)
    })
  }
  @ViewChild('infoClient') infoClient!:TemplateRef<any>
  @ViewChild('accepte') accepte!:TemplateRef<any>
  @ViewChild('refuse') refuse!:TemplateRef<any>

  ngOnInit():void{
    this.getRetours()
  }
m:any=[]
info(id:number){
  this.dialoge.open(this.infoClient)
  this.store.getOneRetour(id).subscribe(res=>{
    this.m = res;
  this.m.forEach((r: {
    client: Object;
    cm: any;
    prd: Produit; idcommande: any; commande: LigneCommande;
})=>{
    let foreignKey = r.idcommande
    this.store.getLigneCommandeByid(foreignKey).subscribe((data)=>{
      r.commande = data;
      let lg:any=data
      lg.forEach((ligne: { idprod: any; prd: Produit; })=>{
      let fk=lg[0].idprod
      let fk1=lg[0].idCommande
      this.store.getProduitById(fk).subscribe((data)=>{
        r.prd = data;
      })
      this.store.getOneCommande(fk1).subscribe((data)=>{
        let k:any=data
        r.cm=k
        this.store.getOneClient(k[0].idClient).subscribe((data)=>{
          r.client=data
        })
      })
      })
    })
  })
  console.log(this.m)
  })
}

accepter(id:number){
    this.store.getOneRetour(id).subscribe(res=>{
      let k:any=res
      let m:Retour=new Retour(k[0].idcommande,k[0].description,k[0].qte,k[0].id,true)
      console.log(m)
      this.store.updateRetour(k[0].id,m).subscribe(res=>{
          this.dialoge.closeAll()
          this.dialoge.open(this.accepte)
      })
    })

}
refuser(id:number){

  this.store.getOneRetour(id).subscribe(res=>{
    let k:any=res
    let m:Retour=new Retour(k[0].idcommande,k[0].description,k[0].qte,k[0].id,false)
    console.log(m)
    this.store.updateRetour(k[0].id,m).subscribe(res=>{
      this.dialoge.closeAll()
      this.dialoge.open(this.refuse)
    })
  })

}
   close(){
   this.dialoge.closeAll()
  window.location.reload()}
}
