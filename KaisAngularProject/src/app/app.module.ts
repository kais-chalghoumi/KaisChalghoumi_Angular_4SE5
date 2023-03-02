import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductsComponent } from './products/products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    DetailProductComponent,
    NotFoundComponent,
    OffresEmploiComponent,
    ProductsComponent,
    NavBarComponent,
    TemplateDrivenFormComponent,
    AddProductComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
