import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  grandTotal: number = 0;

  dataSource: any = []
  displayedColumns = ['SrNo', 'productName', 'price', 'quantity', 'total'];

  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.cartService.getCartProducts()
      .subscribe((res: any) => {
        this.cartItems = res;
        this.dataSource = new MatTableDataSource<any>(this.cartItems)
      })
    this.grandTotal = this.cartService.getTotalPrice();
  }

  confirmOrder() {
    alert('Order confirmed!');
    this.cartService.removeAllCart();
    this.router.navigate(['']);
  }

}
