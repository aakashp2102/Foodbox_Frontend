import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-get-all-items',
  templateUrl: './get-all-items.component.html',
  styleUrls: ['../app.component.css']
})
export class GetAllItemsComponent implements OnInit {
  public item: Item;
  public items: Item[];
  constructor(private service: ItemService, private route: ActivatedRoute, private cartService: CartService) { }
  
  addToCart(item) {
    this.cartService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    this.service.getAllItems().subscribe(res => {
      this.items = res;
    });
  }
}
