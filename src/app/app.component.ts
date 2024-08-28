import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CartService } from './services/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-app';

  public totalItem: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.cart$.subscribe(items => {
    //   this.totalItem = items.length;
    // });
    this.cartService.getCartProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }
}
