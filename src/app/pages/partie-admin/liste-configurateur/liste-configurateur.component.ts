import { Component } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-liste-configurateur',
  templateUrl: './liste-configurateur.component.html',
  styleUrls: ['./liste-configurateur.component.scss']
})
export class ListeConfigurateurComponent {

  constructor(private store: StoreService){

  }
  Configurateur:any=[]
  c:any=[]
  getConfigurateur(){

    this.store.getAllConfigurateur().subscribe(res=>{
      this.Configurateur=res;
      this.Configurateur.forEach((c: { idprod: any; prod: Produit; })=>{
        let fk=c.idprod
        this.store.getProduitById(fk).subscribe(res=>{
          c.prod=res
        })
      })
    })
  }

  ngOnInit(){
    this.getConfigurateur()
  }
}
