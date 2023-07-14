import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products = [
  {id:1, name:'phone', price: '109', color: 'Black', available: 'Available', image: '../../assets/eshop.png'},
  {id:2, name:'Table', price: '200', color: 'Red', available: 'Available', image: '../../assets/eshop.png'},
  {id:3, name:'Ring', price: '300', color: 'White', available: 'Available', image: '../../assets/eshop.png'},
  {id:4, name:'Laptop', price: '170000', color: 'Black', available: 'Not Available', image: '../../assets/eshop.png'},
  {id:5, name:'TV', price: '200000', color: 'Black', available: 'Available', image: '../../assets/eshop.png'},
]
}
