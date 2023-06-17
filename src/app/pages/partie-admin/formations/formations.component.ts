import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Formation } from 'src/app/models/formation';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent {

  constructor(private store:StoreService,private dialog:MatDialog){}


  Events:any=[]
  getEvents(){
    this.store.getAllFormation().subscribe(res =>{
      this.Events=res

    })
  }

  ngOnInit():void{
    this.getEvents()
  }
  @ViewChild("formationDialog") formationDialog!:TemplateRef<any>
  @ViewChild("ListeParticipant") ListeParticipant!:TemplateRef<any>

  openadddialog(){
    this.dialog.open(this.formationDialog)
  }
  closeDialog(){
    this.dialog.closeAll()
  }

  addFormation(){
    let f:Formation=new Formation(this.titre,this.desc,this.nbplace,this.date,this.prix)
    this.store.newEvent(f).subscribe(
      () => {
        this.dialog.closeAll()
        window.location.reload()
      }
    )
  }


  formation:FormGroup=new FormGroup({
    titre:new FormControl(''),
    nbplace:new FormControl(''),
    desc:new FormControl(''),
    date:new FormControl(''),
    prix:new FormControl('')
  });

  get titre(){
    return this.formation.get('titre')?.value
  }
  get nbplace(){
    return this.formation.get('nbplace')?.value
  }
  get desc(){
    return this.formation.get('desc')?.value
  }
  get prix(){
    return this.formation.get('prix')?.value
  }
  get date(){
    return this.formation.get('date')?.value
  }

    e:any=[]

    openListe(id:number){
      this.dialog.open(this.ListeParticipant)
      this.store.getOneEvent(id).subscribe(data =>{
        this.e=data
        this.e.forEach((i: { id: any; liste: Object; }) =>{
          let fk:any=i.id
          this.store.getAllinscriByEvent(fk).subscribe(data =>{
            i.liste=data
          })
          console.log(this.e)
        })
      })
    }
}
