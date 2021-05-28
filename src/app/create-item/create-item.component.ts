import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['../app.component.css']
   
})
export class CreateItemComponent {
  public item: Item;
  constructor(private service:ItemService, private router:Router) { 
    this.item = new Item();
  }
createItem(){
  this.service.createItem(this.item).subscribe(data=>{
    this.item = new Item();
    this.router.navigate(['/getAllItems']);
  });
}
}
