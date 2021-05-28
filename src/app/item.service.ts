import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url: string;
  private items: Item[];
  constructor(private http: HttpClient) {
    this.url = "http://localhost:9003/item"
  }

  public createItem(item: Item) {
    return this.http.post<Item>(this.url, item);
  }

  public getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + "s");
  }

  public deleteByItemId(itemId: number): Observable<Item> {
    return this.http.delete<Item>(this.url + "/" + itemId);
  }

  public findByItemId(itemId: number): Observable<Item> {
    return this.http.get<Item>(this.url + "/" + itemId);
  }

  public findByItemCuisine(itemCuisine: Text): Observable<Item[]> {
    return this.http.get<Item[]>(this.url+ "s" + "/" + itemCuisine);
  }

  public updateItem(item: Item) {
    return this.http.put<Item>(this.url, item);
  }

  public itemCart(item: Item) {
    return this.http.put<Item>(this.url, item);
  }
}
