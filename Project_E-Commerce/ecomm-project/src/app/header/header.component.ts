import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType: String = 'default';
  sellerName:string='';
  searchResult:undefined |product[];
userName:string="";
  cartItems=0;

  constructor(private route: Router, private product:ProductService){

  }
  ngOnInit(): void {

    this.route.events.subscribe((data:any)=>{
      // console.warn(data.url);
      if(data.url){
        // console.warn(data.url);
        if(localStorage.getItem('seller') && data.url.includes('seller')){
          // console.warn('In Seller Area');
          this.menuType='seller';
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            // console.warn(sellerData);
            this.sellerName = sellerData.name;
          }
        }else if(localStorage.getItem('user'))
        {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType='user';
          this.product.getCartList(userData.id);
        }
        else{
          // console.warn('Outside Seller Area');
          this.menuType='default';
        }
      }
    });
    let cartData =localStorage.getItem('localCart');
    if(cartData){
      this.cartItems=JSON.parse('localCart').length;
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems=items.length;
    });
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
  userLogOut(){
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }
  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLTextAreaElement;
      // console.warn(element.value);
      this.product.searchProducts(element.value).subscribe((result)=>{
        // console.warn(result);
        this.searchResult=result;
        if(result.length>5){
          result.length=5

        }
      })
    }
  }
  hideSearch(){
    this.searchResult=undefined;
  }
  submitSearch(value:string){
    console.warn(value);
    this.route.navigate([`search/${value}`])
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }
}
