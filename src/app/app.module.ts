import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { GetAllItemsComponent } from './get-all-items/get-all-items.component';
import { DeleteByItemIdComponent } from './delete-by-item-id/delete-by-item-id.component';
import { FindByItemIdComponent } from './find-by-item-id/find-by-item-id.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { FindByItemCuisineComponent } from './find-by-item-cuisine/find-by-item-cuisine.component';
import { ItemService } from './item.service';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor } from './_helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    GetAllItemsComponent,
    DeleteByItemIdComponent,
    FindByItemIdComponent,
    UpdateItemComponent,
    FindByItemCuisineComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    CartComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
   ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
