import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  produtos: Array<Product> = this.productsService.getProdutos();

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }
  
  detailsProduct(produtoId: number) {
    this.router.navigateByUrl(`details-page/${produtoId}`)
  }
}
