import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { GetAllItemsComponent } from './get-all-items/get-all-items.component';
import { DeleteByItemIdComponent } from './delete-by-item-id/delete-by-item-id.component';
import { FindByItemCuisineComponent } from './find-by-item-cuisine/find-by-item-cuisine.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { FindByItemIdComponent } from './find-by-item-id/find-by-item-id.component';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';
import {CartComponent} from './cart/cart.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: "createItem", component: CreateItemComponent },
  { path: "getAllItems", component: GetAllItemsComponent },
  { path: "deleteByItemId", component: DeleteByItemIdComponent },
  { path: "findByItemCuisine", component: FindByItemCuisineComponent },
  { path: "updateItem", component: UpdateItemComponent },
  { path: "findByItemId", component: FindByItemIdComponent },
  { path: "cart", component: CartComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// export const appRoutingModule = RouterModule.forRoot(routes);

export class AppRoutingModule { }
