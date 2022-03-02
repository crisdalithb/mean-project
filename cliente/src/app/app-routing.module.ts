import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FoodsComponent } from './components/foods/foods.component';
import { KitchenRecipesComponent } from './components/kitchen-recipes/kitchen-recipes.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'únete', component: RegisterComponent},
  { path: 'recetas', component: KitchenRecipesComponent},
  { path: 'biblioteca', component: FoodsComponent},
  { path: '404', component: Page404Component  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
