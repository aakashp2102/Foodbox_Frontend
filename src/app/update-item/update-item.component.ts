import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['../app.component.css']
})
export class UpdateItemComponent implements OnInit {
  public item: Item;
  public items: Item[];

  constructor(private service: ItemService, private route: Router) {
    this.item = new Item();
  }
  ngOnInit() {
    this.service.getAllItems().subscribe(data => {
      this.items = data;
    });
  }
  updateItem() {
    return this.service.updateItem(this.item).subscribe(data => {
      this.item = new Item();
      this.route.navigate(['/getAllItems']);
    });
  }



}
