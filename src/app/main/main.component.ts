import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('fadeInSection', { static: true })
  fadeInSection!: ElementRef;

  isVisible: boolean[] = [];

  constructor(private router:Router) { }

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

}
