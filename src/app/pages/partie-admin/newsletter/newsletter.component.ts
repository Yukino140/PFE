import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  constructor(private store:StoreService,private dialgue:MatDialog) {}

  NewsLetter:any=[]
  getNewsLetter(){
    this.store.getAllNewsLetter().subscribe(res=>{
      this.NewsLetter=res
    })
  }

  ngOnInit():void {
    this.getNewsLetter()
  }

  @ViewChild('config') config!:TemplateRef<any>

  sendmail(id:number){
    this.store.getOneNews(id).subscribe(res=>{
      let c:any=res
      const email = {
        recipient: c[0].email,
        subject: 'MIPS NewsLetter',
        ht: this.atta

      };
      console.log(this.atta)
      this.store.snedmail(email).subscribe(()=>{
        alert("un email a été envoyé")
        this.dialgue.closeAll()
      })
    })



  }
  k:any
open(id:number){
  this.store.getOneNews(id).subscribe(res=>{
     this.k=res
  })
  this.dialgue.open(this.config)
}
inp:FormGroup=new FormGroup({
  atta:new FormControl('')
})
get atta(){
  return this.inp.get('atta')?.value
}
}
