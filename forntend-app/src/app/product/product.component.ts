import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
//any can  be Object,  string,  intiger
products: any
  constructor() { 
    //initialize list of products inside constructor
    //this  list will be used in html ngfor -->let prod of 'products'
    this.products = [
      // {
      //   "id": 5,
      //   "name": "football",
      //   "brand": "Adidas",
      //   "price": 150
      // },
      // {
      //   "id": 9,
      //   "name": "boot",
      //   "brand": "Nike",
      //   "price": 200
      // },
      // {
      //   "id": 11,
      //   "name": "jersey",
      //   "brand": "Adidad",
      //   "price": 90
      // },
      // {
      //   "id": 8,
      //   "name": "gloves",
      //   "brand": "Puma",
      //   "price": 70
      // }
    ]
  }

  ngOnInit(): void {
  }

}
