import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: any[] = [];
  dataSource: any = []
  displayedColumns = ['id', 'title', 'description', 'price', 'action'];

  constructor(private productService: ProductService,
    private router: Router,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProduct()
      .subscribe((res: any) => {
        this.productList = res;
        this.dataSource = new MatTableDataSource<any>(this.productList)
      })
  }

  addProduct() {
    this.router.navigate(['add-product']);
  }

  productedit(id: any) {
    this.router.navigate(['product-edit', id]);
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id)
      .subscribe((res: any) => {
        this.snackbar.success('Product deleted successfully...');
        this.getProducts();
      })
  }
}
