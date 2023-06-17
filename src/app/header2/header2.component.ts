import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {

  constructor(private storeService: StoreService,private router:Router) { }
  Cat:any=[]
  Categorie:any=[]
  SousCateg:any=[]

  categoriesSubscription: Subscription | undefined;
  getAllCategories(){
    this.storeService.getAllCategories().subscribe(categories =>{
      this.Cat=categories


        console.log(this.Cat);
        this.Cat.forEach((c: { id: any; idCateg: any; })=>{
          if(c.idCateg==null){
            this.Categorie.push(c);

          }
        })
        console.log(this.Categorie)
      });
  }

  ngOnInit(): void {
    this.getAllCategories()
      this.configurateur()
  }
  async sendId(id: number){



    await this.router.navigate(['client/home',id])
    window.location.reload()

  }
  verif=true
  configurateur(){
    if(localStorage.getItem('email')!=null){
      this.verif=false
    }
  }
  search=true
  make(){
    if(this.search==true){
      this.search=false
    }
    else{
      this.search=true
    }
  }
  openMyMenu(menuTrigger: MatMenuTrigger,id:number) {
    menuTrigger.openMenu();
    this.storeService.getSousCategorie(id).subscribe((data)=>{
      this.SousCateg = data;
      console.log(this.SousCateg)

    })



}

closeMyMenu(menuTrigger: MatMenuTrigger) {
  menuTrigger.closeMenu();
}

}
