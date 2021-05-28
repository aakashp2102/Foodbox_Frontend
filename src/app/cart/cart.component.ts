import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Purchase } from '../purchase';
import { Router } from '@angular/router';
import { PurchaseService} from '../purchase.service';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../app.component.css']
})
export class CartComponent implements OnInit {
 cartitems; 
 public item: Item;
 public purchase: Purchase;
  constructor(private itemservice:ItemService,private purchaseservice:PurchaseService, private router:Router, private cartService: CartService
  ) { 
    
  }

  ngOnInit() {
    this.cartitems = this.cartService.getItems();
  }
   
createPurchase(){
    window.alert('Your Food Items will be delivered to your address shortly, Thanks for purchasing!');
    this.router.navigate(['/getAllItems']);
}

}
