import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { NewsLetter } from '../models/news-letter';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('fadeInSection', { static: true })
  fadeInSection!: ElementRef;

  isVisible: boolean[] = [];

  constructor(private router:Router,private store:StoreService,private dialog:MatDialog ) { }

  ngOnInit(): void {
    this.check()
    const options = {
      rootMargin: '0px',
      threshold: 0.5 // Adjust the threshold based on your preference
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          this.isVisible[index] = true;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach((fadeInSection) => {
      observer.observe(fadeInSection);
    });

  }
  verif:Boolean=true
  check(){
    if(localStorage.getItem('email')!=null){
      this.verif=false
    }else{
      this.verif=true
    }
  }

  send(){
    this.router.navigate(['/client/configurateur'])
  }

  newsletter:FormGroup=new FormGroup({
    email:new FormControl('')
  })
  get email(){
    return this.newsletter.get('email')?.value
  }
  @ViewChild('newsLetter') n!:TemplateRef<any>

  addnewsLetter(){
    let news:NewsLetter=new NewsLetter(this.email)
    this.store.addNewsLetter(news).subscribe(()=>{
      this.dialog.open(this.n)
    })
  }
  close(){
    this.dialog.closeAll()

  }
}
