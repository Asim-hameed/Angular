import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './services/checkout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularstripeapp';

  paymentHandler: any = null;
  success: boolean = false;
  failure: boolean = false;

  constructor(private checkout: CheckoutService) { }

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
