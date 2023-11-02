import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, fromEvent } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { CartService } from 'src/app/modules/tienda-guest/service/cart.service';
import { TiendaGuestService } from 'src/app/modules/tienda-guest/service/tienda-guest.service';

declare function cartSidenav():any;
declare function _clickDocTwo():any;
declare function alertSuccess([]):any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild("filter") filter?:ElementRef;

  listCarts: any = [];
  user:any = null;
  totalSum:any = 0;
  
  search:any = null;
  source:any;
  listCourses: any = [];

  constructor(
    public authService: AuthService,
    public cartService: CartService,
    public router:Router,
    public tiendaGuestService: TiendaGuestService,

  ) { }

  ngOnInit(): void {
    this.user = this.authService.user;

    this.cart();

    setTimeout(()=>{
      cartSidenav();
      _clickDocTwo();
    }, 50 )

    
  }

  ngAfterViewInit(): void {
    this.source = fromEvent(this.filter?.nativeElement,"keyup");
    this.source.pipe(debounceTime(500)).subscribe((resp:any)=>{
      console.log(this.search);
      //el filtro
      let data = {
        search: this.search
      }
      if(this.search.lenght > 0){
        this.tiendaGuestService.listCourses(data).subscribe((resp:any)=>{
          console.log(resp);
          this.listCourses = resp.courses.data;
        })

      }
    })
    
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

  buscarCourses(){
    // this.router.navigateByUrl("/tienda-guest/listado-de-cursos?search="+this.search);
    window.location.href = "/tienda-guest/listado-de-cursos?search="+this.search;

  }

}
