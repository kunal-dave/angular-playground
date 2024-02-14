import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Items } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService  {
  private itemsUrl = 'api/items'; // The in-mem server will intercept HTTP calls to URLs like this one

  constructor(private http: HttpClient) { }

  getItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.itemsUrl);
  }
 
}
