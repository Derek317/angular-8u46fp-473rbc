import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class CartService {
  items = []


//crud = c:create , r:read , u: update, d: delete

  addToCart(product){
    this.items.push(product);
  }
  
  getItems(){
    return this.items;
  }


  clearCart(){
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    this.items = [];
    return this.http.get('/assets/shipping.json')
  }

  constructor(
   private http:HttpClient
  )
  { }

}