import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Inscription } from 'src/app/models/inscription';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-inscri-event',
  templateUrl: './inscri-event.component.html',
  styleUrls: ['./inscri-event.component.scss']
})
export class InscriEventComponent {
  constructor(private store: StoreService,private dialog:MatDialog){}
  Events:any=[]
  getEvents(){
    this.store.getAllFormation().subscribe(res=>{
      this.Events=res
      console.log(this.Events)
    })
  }

  inscri:FormGroup=new FormGroup({
    nom:new FormControl(''),
    prenom:new FormControl(''),
    societe:new FormControl(''),
    email:new FormControl(''),
    tel:new FormControl(''),
    formation:new FormControl('')
  })

  get nom(){
    return this.inscri.get('nom')?.value
  }
  get prenom(){
    return this.inscri.get('prenom')?.value
  }
  get societe(){
    return this.inscri.get('societe')?.value
  }
  get email(){
    return this.inscri.get('email')?.value
  }
  get tel(){
    return this.inscri.get('tel')?.value
  }
  get formation(){
    return this.inscri.get('formation')?.value
  }
  @ViewChild('sucess') sucess!:TemplateRef<any>
  i!:Inscription
  newInscri(){

    this.store.getOneEvent(this.formation).subscribe(res=>{
      let e:any=res
      console.log(e)
    this.i=new Inscription(this.nom,this.prenom,this.societe,this.email,this.tel,e[0].date,this.formation)
    this.store.newInscriEvent(this.i).subscribe(res=>{
      this.dialog.open(this.sucess)
    })

    })
  }
  close(){
    this.dialog.closeAll()
  }
  ngOnInit():void{
    this.getEvents()
  }

}
