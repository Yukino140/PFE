import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: '[app-product-box]',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product: Produit | undefined;
  @Output() addToCart = new EventEmitter();

  constructor(private sanitizer:DomSanitizer) {}
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

     }

  onAddToCart(): void {
    this.addToCart.emit(this.product);

  }
}
