import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-liste-reclamation',
  templateUrl: './liste-reclamation.component.html',
  styleUrls: ['./liste-reclamation.component.scss']
})
export class ListeReclamationComponent {

  constructor(private store: StoreService){}

  Reclamations:any=[]
  getReclamation(){
    this.store.getAllReclamations().subscribe(res=>{
      this.Reclamations=res
    })
  }

  ngOnInit():void{
    this.getReclamation()
  }

}
