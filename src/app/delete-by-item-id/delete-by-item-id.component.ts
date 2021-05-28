import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import {Router} from '@angular/router';
import { Item } from '../item';

@Component({
  selector: 'app-delete-by-item-id',
  templateUrl: './delete-by-item-id.component.html',
  styleUrls: ['../app.component.css']
})
export class DeleteByItemIdComponent implements OnInit {

  constructor(private service: ItemService, private router: Router) {

  }

  public item: Item;
  public items: Item[]=[];
  public itemId: number;

  deleteByItemId() {
    return this.service.deleteByItemId(this.itemId).subscribe(data => {
      this.item = data;
      this.items.pop;
      this.router.navigate(['/getAllItems']);
    })
  }

  ngOnInit() {
    this.service.getAllItems().subscribe(data => {
      this.items = data;
    });
  }

}
