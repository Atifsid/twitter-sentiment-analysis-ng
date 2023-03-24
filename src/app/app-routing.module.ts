import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'Home', component:  HomeComponent},
  { path: 'Analyze', component:  AnalyzeComponent},
  { path: 'Compare', component: CompareComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Product', component: ProductComponent},
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
