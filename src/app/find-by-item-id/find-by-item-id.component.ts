import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-find-by-item-id',
  templateUrl: './find-by-item-id.component.html',
  styleUrls: ['../app.component.css']
})
export class FindByItemIdComponent {
  public item: Item;
  public itemId: number;

  constructor(private service: ItemService) { 
    this.item = new Item();
  }

  findByItemId() {
    this.service.findByItemId(this.itemId).subscribe(data => {
      this.item = data;
    });
  }
}
