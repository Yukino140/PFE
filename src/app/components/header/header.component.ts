import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  constructor(private cartService: CartService,private router:Router) {}

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  connexion(){
    this.router.navigate(['/client/login'])
  }
  onClearCart(): void {
    this.cartService.clearCart();
  }
  hide=false
  verif(){
    if((localStorage.getItem('email')!=null)&&(localStorage.getItem('pass')!=null))
      this.hide=true
  }
  goToClientServices(){
    this.router.navigate(['/client/services'])
  }
}
