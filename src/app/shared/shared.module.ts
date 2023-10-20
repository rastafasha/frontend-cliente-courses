import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { CartSideMenuComponent } from './cart-side-menu/cart-side-menu.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    CartSideMenuComponent,
    BannerHomeComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    CartSideMenuComponent,
    BannerHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
