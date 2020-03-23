import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//generating service so all other component can use the same service
export class ProductService {

  //creating a method that will return list of product object

  getProducts(){
    return [
      {
        "id": 5,
        "name": "football",
        "brand": "Adidas",
        "price": 150
      },
      {
        "id": 9,
        "name": "boot",
        "brand": "Nike",
        "price": 200
      },
      {
        "id": 11,
        "name": "jersey",
        "brand": "Adidad",
        "price": 90
      },
      {
        "id": 8,
        "name": "gloves",
        "brand": "Puma",
        "price": 70
      }
    ];
  }


  constructor() { }
}
