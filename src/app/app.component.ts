import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ItemsService } from './service/items.service';
import { Observable } from 'rxjs';
import { Items } from './models/items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:Items[]=[];
  constructor(private itemService:ItemsService){
    itemService.getItems().subscribe((response:Items[])=>{
        this.data=response;
    })
  }
}
