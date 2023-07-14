import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { SellService } from '../services/sell.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  authError='';
  showLogin= false;
  constructor(private seller: SellService,
    private router: Router){

  }
  SignUp(data: SignUp){
    // console.warn();
    this.seller.userSignUp(data);
  }
  LogIn(data:SignUp){
    // console.log(data);
    this.seller.userlogin(data);
    this.seller.isLogINError.subscribe((isError)=>{
      if(isError){
        this.authError='Email or password is not correct';
      }
    })
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }
}
