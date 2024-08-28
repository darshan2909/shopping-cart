import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data: any) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.snackbar.success('Item added to cart..')
  }
}
