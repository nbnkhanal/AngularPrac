import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

products: any
  constructor(private service: ProductService) { 
    // this.products = service.getProducts();
  }

  ngOnInit(): void {
    this.products= this.service.getProducts();
  }

}