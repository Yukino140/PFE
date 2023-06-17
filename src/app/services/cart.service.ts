import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    let items:any=[]
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify(items))
      items = JSON.parse(localStorage.getItem('cart')!);

      const itemInCart = items.find((_item: { id: number; }) => _item.id === item.id);
      if (itemInCart) {
        itemInCart.quantity += 1;

        localStorage.setItem('cart', JSON.stringify(items));


      } else {
        items.push(item);
        localStorage.setItem('cart', JSON.stringify(items));

      }


      this.cart.next({items});
      this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });

    }else{

     items = JSON.parse(localStorage.getItem('cart')!);

    const itemInCart = items.find((_item: { id: number; }) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;

      localStorage.setItem('cart', JSON.stringify(items));


    } else {
      items.push(item);
      localStorage.setItem('cart', JSON.stringify(items));

    }


    this.cart.next({items});
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });}
  }

  removeFromCart(item: CartItem, updateCart = true): CartItem[] {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    if (updateCart) {
      this.cart.next({ items: filteredItems });
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(filteredItems));
      this._snackBar.open('1 item removed from cart.', 'Ok', {
        duration: 3000,
      });
    }

    return filteredItems;
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval!: CartItem;

    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this._snackBar.open('1 item removed from cart.', 'Ok', {
      duration: 3000,
    });
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    localStorage.setItem('cart', JSON.stringify([]));
    this._snackBar.open('Cart is cleared.', 'Ok', {
      duration: 3000,
    });
  }

  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
}
