import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Categorie } from 'src/app/models/categorie';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit, OnDestroy {
  [x: string]: any;
  @Output() showCategory = new EventEmitter<string>();
  Categorie:any=[]
  categoriesSubscription: Subscription | undefined;

  constructor(private storeService: StoreService,private router:Router) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((data: {})=>{
        this.Categorie = data;
      });
  }

  onShowCategory(category: string,id:number): void {
    this.showCategory.next(category);
    this.router.navigate(['home',id])
  }
  async sendId(id: number){



    await this.router.navigate(['home',id])
    window.location.reload()

  }
  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
