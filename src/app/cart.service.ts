import { Injectable } from '@angular/core';
import { Purchase } from './purchase';
import { HttpClient} from '@angular/common/http';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitems = [];
  private url: string;
  private purchases: Purchase[];
  constructor(private http: HttpClient) {
    this.url = "http://localhost:9003/purchase"
  }

  public createPurchase(purchase: Purchase) {
    return this.http.post<Purchase>(this.url, purchase);
  }

  addToCart(item : Item) {
    this.cartitems.push(item);
  }

  getItems() {
    return this.cartitems;
  }

  clearCart() {
    this.cartitems = [];
    return this.cartitems;
  }
}
