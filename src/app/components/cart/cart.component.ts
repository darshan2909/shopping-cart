import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  grandTotal: number;

  dataSource: any = []
  displayedColumns = ['SrNo', 'productName', 'image', 'description', 'price', 'quantity', 'total', 'action'];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartProducts()
      .subscribe(res => {
        this.cartItems = res;
        this.dataSource = new MatTableDataSource<any>(this.cartItems)
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }


}
