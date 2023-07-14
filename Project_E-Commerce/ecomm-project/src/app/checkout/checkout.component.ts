import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cart, order,orderToStripe } from '../data-type';
import { CheckoutService } from '../services/checkout.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  //Imported
  totalPrice:number|undefined;
  cartData:cart[]|undefined;
  orderMsg:string|undefined;

  //Local
  paymentHandler: any = null;
  success: boolean = false;
  failure: boolean = false;

  constructor(private checkout: CheckoutService, private product: ProductService,
    private router:Router) { }

    //Testing Curtomzie starts here

    // orderNow(data:{email:string,address:string,contact:string}){
    //   // console.warn(data);
    //   let user = localStorage.getItem('user');
    //   let userId = user && JSON.parse(user).id;
  
    //   if(this.totalPrice){
    //     let orderData:order={
    //       ...data,
    //       totalPrice:this.totalPrice,
    //       userId,
    //       id:undefined
    //     }
    //     this.cartData?.forEach((item)=>{
    //       setTimeout(()=>{
    //         item.id && this.product.deleteCartItems(item.id);
    //       },700)
    //     });
  
    //     this.product.orderNow(orderData).subscribe((result)=>{
    //       // alert('Order PLaced');
    //     })
    //   }
    // }


    //Testing customize end


  MakePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MqJJgIEaeLTrBBcVTYTZA3CSpQg2PXkdj7dRmsA27KUiM5mvFJqX474qFc0DPyrvyoFtvNccNfr2e0PxTL8cbMS00ZKu647Wc',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);

        paymentStripe(stripeToken);
      }
    });
    const paymentStripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === 'success') {
          this.success = true;
        } else {
          this.failure = true;
        }
      })
    }

    paymentHandler.open({
      name: 'Asim',
      description: 'Test App for payment method',
      amount: amount * 100
    })
  }
  ngOnInit(): void {

    // Testing Current payment
    this.product.currentCart().subscribe((result)=>{
      let price =0;
      this.cartData=result;
      result.forEach((item) => {
        if(item.quantity){
        price =price + (+item.price* +item.quantity);
        }
      });
        this.totalPrice=price+(price/10)+100-(price/10);
        
        console.warn(this.totalPrice);
    })

    //Testing customize payment
    // this.orderNow();

    // Test 10$ payment
    this.inVokeStripe();

  }

  inVokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MqJJgIEaeLTrBBcVTYTZA3CSpQg2PXkdj7dRmsA27KUiM5mvFJqX474qFc0DPyrvyoFtvNccNfr2e0PxTL8cbMS00ZKu647Wc',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
  
}
