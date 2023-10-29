import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/service/auth.guard';

const routes: Routes = [
  { path:'', 
  // canActivate: [AuthGuard],
    loadChildren:() => import("./modules/home/home.module").then(m=>m.HomeModule)
  },
  { path:'auth', 
    loadChildren:() => import("./modules/auth/auth.module").then(m=>m.AuthModule)
  },
  { path:'tienda-guest', 
    loadChildren:() => import("./modules/tienda-guest/tienda-guest.module").then(m=>m.TiendaGuestModule)
  },
  { path:'', redirectTo:'/', pathMatch:'full'},
  { path:'**', redirectTo:'error/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
