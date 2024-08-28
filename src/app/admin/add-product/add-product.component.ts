import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: any;

  constructor(private productService: ProductService,
    private router: Router,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.productFormGroup();
  }

  productFormGroup() {
    this.productForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      price: new FormControl(),
      description: new FormControl(''),
      quantity: new FormControl(1),
      total: new FormControl(),
      image: new FormControl('')
    })
  }

  addProduct() {
    const formData = this.productForm.value;
    formData.total = this.productForm.get('price').value;
    this.productService.addProduct(formData)
      .subscribe((res: any) => {
        this.snackbar.success('Product added successfully...');
        this.router.navigate(['product-list'])
      })
  }
}
