import { Component, OnInit } from '@angular/core';
import { SellService } from './services/sell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecomm-project';
  constructor(private seller:SellService){}
  ngOnInit():void{
    this.seller.reloadSeller()
  }
}
