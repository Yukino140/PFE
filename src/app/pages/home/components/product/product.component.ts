import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id? :number;
  product?:Product;
  constructor(private activatedRoute:ActivatedRoute,private store:StoreService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

  }

}
