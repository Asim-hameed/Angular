import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { LogIn, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  isLogINError = new EventEmitter<boolean>(false);
  isSellerLoggedIn =new BehaviorSubject<boolean>(false);

  constructor(private http :HttpClient,
    private router: Router) { }

  userSignUp(data: SignUp){
    // console.log('Service called');
    let result = this.http.post('http://localhost:3000/seller',
    data,
    {observe:'response'})
    .subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home']);

      console.warn('result',result);
    });
    return false
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userlogin(data:LogIn){
    console.warn(data);
    //api called will be there
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'})
    .subscribe((result:any)=>{
      console.log(result);
      if(result && result.body ){
          console.warn('User Logged in');
          localStorage.setItem('seller',JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
      }else{
        console.warn('Login Failed');
        this.isLogINError.emit(true);
      }
    })
  }
}
