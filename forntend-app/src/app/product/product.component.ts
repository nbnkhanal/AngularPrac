import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

products: any
  constructor(service: ProductService) { 
//injecting service
    this.products = service.getProducts();
  }

  ngOnInit(): void {
  }

}
