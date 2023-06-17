import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-top-widget',
  templateUrl: './top-widget.component.html',
  styleUrls: ['./top-widget.component.scss']
})
export class TopWidgetComponent implements OnInit {

  Magasin:any=[]
  constructor(private store:StoreService) { }
nbMagasin:any
getMagasin(){
  this.store.getAllMagasin().subscribe(res=>{
    this.Magasin=res
    this.nbMagasin=this.Magasin.length
    console.log(this.nbMagasin)
  })
}
  ngOnInit(): void {
    this.getMagasin()
  }

}
