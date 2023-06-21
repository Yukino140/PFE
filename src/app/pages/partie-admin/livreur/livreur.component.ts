import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Livreur } from 'src/app/models/livreur';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.scss']
})
export class LivreurComponent {

  constructor(private store:StoreService,private dialg:MatDialog){

  }

  Livreur:any=[]

  getLivreur(){
    this.store.getAllLivreur().subscribe(res=>{
      this.Livreur=res
    })
  }
ngOnInit():void{
  this.getLivreur()
}
  addlivreur:FormGroup=new FormGroup({
    nom:new FormControl(''),
    email:new FormControl(''),
    emplacement:new FormControl(''),
  })

  get nom(){
    return this.addlivreur.get('nom')?.value
  }
  get email(){
    return this.addlivreur.get('email')?.value
  }
  get emplacement(){
    return this.addlivreur.get('emplacement')?.value
  }

  @ViewChild('livreur')liv!:TemplateRef<any>
  add(){
    this.dialg.open(this.liv)
  }

  ajoute(){
    let l:Livreur=new Livreur(this.nom,this.email,this.emplacement)
    this.store.addLivreur(l).subscribe(()=>{
      this.dialg.closeAll()
          window.location.reload()
    })
  }

}
