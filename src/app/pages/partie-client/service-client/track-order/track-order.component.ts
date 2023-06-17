import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent implements OnInit {

  constructor(private store:StoreService) { }

  ngOnInit(): void {
  }
  isShowDiv=true
  toggleDisplayDiv() {
    this.isShowDiv = false
    this.store.getOneCommande(this.order.get('num')?.value).subscribe(res=>{
      this.c=res
    })
  }
  order:FormGroup=new FormGroup({
    num:new FormControl('')
  })
c:any
  getCommande(){

  }
}
