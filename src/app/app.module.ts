import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { LightboxDirective } from './model/lightbox.directive';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InfoComponent } from './components/info/info.component';

let routes=[
  {path:'', component:HomePageComponent},
  {path:'commerce', component:HomePageComponent},
  {path:'product',component:ProductsComponent},
  {path:'home',component:HomePageComponent},
  {path:'product/:id',component:ProductsComponent},
  {path:'login',component:LoginComponent},
  {path:'details',component:CardComponent},
  {path:'info/:id',component:InfoComponent},

  {path:'**', component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    LoginComponent,
    ProductsComponent,
    LightboxDirective,
    ErrorComponent,
    HomePageComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
