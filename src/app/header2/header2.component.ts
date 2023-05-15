import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {

  constructor(private storeService: StoreService,private router:Router) { }
  Categorie:any=[]
  categoriesSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((data: {})=>{
        this.Categorie = data;
      });
  }
  async sendId(id: number){



    await this.router.navigate(['client/home',id])
    window.location.reload()

  }

}
