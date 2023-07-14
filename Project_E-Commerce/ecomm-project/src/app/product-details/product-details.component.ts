import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | product;
  productQuantity: number = 1;
  quantity: number = 1;
  removeCart = false;
  cartData: product | undefined;

  constructor(private activateRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((result) => {
      console.warn(result);
      this.productData = result;

      let cartData = localStorage.getItem('localCart');
      if (productId && cartData) {
        let item = JSON.parse(cartData);
        item = item.filter((items: product) =>
          productId == items.id.toString())
        if (item.length) {
          this.removeCart = true;
        }
        else {
          this.removeCart = false;
        }
      }
      let user = localStorage.getItem('user');
      if (user) {
        let userId = user && JSON.parse(user).id;
        this.product.getCartList(userId);
        this.product.cartData.subscribe((result) => {
          let item = result.filter((item: product) => productId?.toString() === item.productId?.toString());
          if (item.length) {
            this.cartData = item[0];
            this.removeCart = true;
          }
        })
      }
    })
  }
  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity++;
    }
    else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity--;
    }
  }
  AddToCart() {
    // console.log("Methpd caslls");

    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        // console.warn(this.productData);
        this.product.localAddToCart(this.productData);
        // console.log("insifde the if comndition and dada is in local storage")
      } else {
        // console.log("Data is data base")
        // console.warn('User is logged in');
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id;

        let cartData: cart = {
          ...this.productData,
          userId,
          productId: this.productData.id
        }
        delete cartData.id;
        // console.warn(cartData)
        this.product.addToCart(cartData).subscribe((result) => {
          if (result) {
            this.product.getCartList(userId);
            this.removeCart = true;
          }
        });
      }
      // console.warn(this.productData);
    }
  }
  RemoveToCart(productId: number) {
    if (!localStorage.getItem('user')) {

      this.product.removeItemFromCart(productId);
    } else {

      console.warn(this.cartData);
      this.cartData && this.product.removeToCart(this.cartData.id).subscribe((result) => {
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id;
        if (result) {
          this.product.getCartList(userId);
        }
      })
    }
    this.removeCart = false;

  }
}
