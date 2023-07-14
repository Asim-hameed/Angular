import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LogIn, SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  inValidUser = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient,private router: Router) { }
  userSignUp(user:SignUp){
    console.warn(user);
    // this.user.userSignUp(data);
    this.http.post("http://localhost:3000/users",user,{observe:'response'})
    .subscribe((result)=>{
      console.warn(result);
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
    })
  }
  userLogin(data:LogIn){
    this.http.get<SignUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result)=>{
      if(result && result.body?.length){
        this.inValidUser.emit(false);
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        // console.warn(result);
        this.router.navigate(['/']);
      }else{
        this.inValidUser.emit(true);
      }
    })
  }
  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']); 
    }
  }
}
