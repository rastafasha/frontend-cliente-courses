import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaAuthComponent } from './tienda-auth.component';
import { ListCartComponent } from './list-cart/list-cart.component';

const routes: Routes = [
  {
    path: '',component: TiendaAuthComponent,
    children:[
      {
        path:'carrito-de-compra', component: ListCartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaAuthRoutingModule { }
