import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Produit } from 'src/app/models/produit';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id :number=1;
  product?:Product;
  constructor(private activatedRoute:ActivatedRoute,private store:StoreService,private sanitizer:DomSanitizer) { }
  p!:Produit
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.store.getProduitById(this.id).subscribe((response)=>{
      this.p=response
    })

  }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

     }

  }


