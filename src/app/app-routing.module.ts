import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { CompareComponent } from './compare/compare.component';
import { MacbookComponent } from './macbook/macbook.component';
import { IphoneComponent } from './iphone/iphone.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { SkullcandyComponent } from './skullcandy/skullcandy.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'analyze', component:  AnalyzeComponent},
  { path: 'compare', component: CompareComponent},
  { path: 'about', component: AboutComponent},
  { path: 'product', component: ProductComponent},
  {path:"iphone", component:IphoneComponent},
  {path:"macbook", component:MacbookComponent},
  {path:"oneplus", component:OneplusComponent},
  {path:"skullcandy", component:SkullcandyComponent},
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
