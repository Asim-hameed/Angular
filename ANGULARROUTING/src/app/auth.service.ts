export class AuthService{
    loggedIn: boolean =false;

    logIn(){
        this.loggedIn=true;
    }
    logOut(){
        this.loggedIn=false;
    }
    IsAuthenticated(){
        return this.loggedIn;
    }
}