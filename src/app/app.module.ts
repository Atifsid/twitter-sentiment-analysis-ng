import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDivider} from '@angular/material/divider';


import { MatIcon, MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyzeComponent } from './analyze/analyze.component';
import { HomeComponent } from './home/home.component';
import { CompareComponent } from './compare/compare.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AnalyzeComponent,
    HomeComponent,
    CompareComponent,
    ProductComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
