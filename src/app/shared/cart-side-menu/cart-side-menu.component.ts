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
    this.user = this.authService.user;

    // this.cart();
  }

  cart(){
    this.cartService.currentData$.subscribe((resp:any)=>{
      console.log(resp);
      this.listCarts = resp;
      this.totalSum = this.listCarts.reduce((sum:number, item:any)=> sum + item.total,0 );
    })

    if(this.user){
      this.cartService.listCart().subscribe((resp:any)=>{
        console.log(resp);
        resp.carts.data.forEach((cart:any) => {
          this.cartService.addCart(cart);
        });
      })
    }
  }

}
