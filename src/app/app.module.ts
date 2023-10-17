import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { DefaultComponent } from './layouts/default/default.component';
import { Teste1Component } from './pages/common/teste1/teste1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './pages/common/add-product/add-product.component';

@NgModule({
  declarations: [AppComponent, DefaultComponent, Teste1Component, AddProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    PoTemplatesModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
