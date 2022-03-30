import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { PRODUCTS } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
    panelOpenState = true
    products = PRODUCTS;
    selectedProduct?: Product;

    constructor() { }

    ngOnInit(): void {
    }

    onSelect(product: Product): void {
        console.log(product);
    }
    
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/