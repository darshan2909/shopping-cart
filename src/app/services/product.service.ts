import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get("http://localhost:3000/products")
    // .pipe(map((res: any) => {
    //   return res;
    // }))
  }

  addProduct(product: any) {
    return this.http.post("http://localhost:3000/products", product);
  }

  getProductById(id: any) {
    return this.http.get("http://localhost:3000/products/" + id);
  }

  updateProduct(product: any) {
    return this.http.put("http://localhost:3000/products/" + product.id, product);
  }

  deleteProduct(id: any) {
    return this.http.delete("http://localhost:3000/products/" + id);
  }
}
