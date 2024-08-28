import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productEidtForm: any;
  productId: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      this.productId = param.get('id')
    })

    this.getProductById(this.productId);
    this.productEidtFormGroup();
  }

  productEidtFormGroup() {
    this.productEidtForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    })
  }

  getProductById(id: any) {
    this.productService.getProductById(id)
      .subscribe((res: any) => {
        this.productEidtForm.patchValue(res)
      })
  }

  update() {
    this.productService.updateProduct(this.productEidtForm.value)
      .subscribe((res: any) => {
        this.snackbar.success('Product updated successfully...');
        this.router.navigate(['product-list']);
      })
  }
}
