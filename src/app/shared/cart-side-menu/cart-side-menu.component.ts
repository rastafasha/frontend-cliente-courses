import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { CartService } from 'src/app/modules/tienda-guest/service/cart.service';

@Component({
  selector: 'app-cart-side-menu',
  templateUrl: './cart-side-menu.component.html',
  styleUrls: ['./cart-side-menu.component.css']
})
export class CartSideMenuComponent implements OnInit {

  listCarts: any = [];
  user:any = null;
  totalSum:any = 0;


  constructor(
    public cartService: CartService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  

}
