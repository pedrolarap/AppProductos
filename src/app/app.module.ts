import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*Firebase*/
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';


import { ProductsComponent } from './components/products/products.component';
import { ProducListComponent } from './components/products/produc-list/produc-list.component';
import { ProductComponent } from './components/products/product/product.component';
import {ProductService} from './services/product.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProducListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
