import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { CartService } from 'src/app/modules/tienda-guest/service/cart.service';

declare function cartSidenav():any;
declare function alertSuccess([]):any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  listCarts: any = [];
  user:any = null;
  totalSum:any = 0;

  constructor(
    public authService: AuthService,
    public cartService: CartService

  ) { }

  ngOnInit(): void {
    this.user = this.authService.user;

    this.cart();

    setTimeout(()=>{
      cartSidenav();
    }, 50 )
  }

  logout(){
    this.authService.logout();
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

  removeItem(cart:any){
    this.cartService.deleteCart(cart.id).subscribe((resp:any)=>{
      console.log(resp);
      alertSuccess('Articulo removido');
      this.cartService.removeItemCart(cart);
    })
  }
}
