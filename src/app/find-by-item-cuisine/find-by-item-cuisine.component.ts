import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import {ItemService} from '../item.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-find-by-item-cuisine',
  templateUrl: './find-by-item-cuisine.component.html',
  styleUrls: ['../app.component.css']
})
export class FindByItemCuisineComponent  {
  public items:Item[];
  public item: Item;
  public itemCuisine: Text;

  constructor(private service: ItemService, private cartService: CartService) { 
    this.item = new Item();
  }

  addToCart(item) {
    this.cartService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }

  findByItemCuisine() {
    this.service.findByItemCuisine(this.itemCuisine).subscribe(data => {
      this.items = data;
    });
  }

}