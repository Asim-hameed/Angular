import { Component, OnInit } from '@angular/core';
import { cart, LogIn, product, SignUp } from '../data-type';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  showLogin:boolean=true;
  authError:string='';

  constructor(private user: UserService,private product: ProductService){}
  ngOnInit(): void {
    this.user.userAuthReload();
  }
  signUp(data:SignUp){
    // console.warn(data);
    this.user.userSignUp(data);
    
  }
  login(data:LogIn){
    // console.warn(data);
    this.user.userLogin(data);
    this.user.inValidUser.subscribe((result)=>{
      console.warn('apple',result);
      if(result){
        this.authError="Please Enter Valid User details";
      }
      else{
        this.localCartToRemoteCart();
      }
    })
  }
  openLogIn(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }
  localCartToRemoteCart(){
    let data = localStorage.getItem('localCart');
    let user  = localStorage.getItem('user');
      let userId = user && JSON.parse(user);
    if(data){
      let cartdataList:product[] =JSON.parse(data);
      

      cartdataList.forEach((product:product,index) => {
        let cartData:cart={
          ...product,
          productId:product.id,
          userId
        };
        delete cartData.id;
        setTimeout(()=>{
          this.product.addToCart(cartData).subscribe((result)=>{
            if(result){
              
            }
          });
          if(cartdataList.length===index+1){
            localStorage.removeItem('localCart');
          }
        },500);
      });
    }
    setTimeout(()=>{
      this.product.getCartList(userId);
    },2000); 
  }
}
