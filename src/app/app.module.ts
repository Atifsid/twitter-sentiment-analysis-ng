import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDivider} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import {TextFieldModule} from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyzeComponent } from './analyze/analyze.component';
import { HomeComponent } from './home/home.component';
import { CompareComponent } from './compare/compare.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { NgChartsModule } from 'ng2-charts';
import { LottieModule } from 'ngx-lottie';
import { LottieAnimationComponent } from './lottie-animation/lottie-animation.component';
import player from 'lottie-web';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { NavComponent } from './nav/nav.component';
import { IphoneComponent } from './iphone/iphone.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { MacbookComponent } from './macbook/macbook.component';
import { SkullcandyComponent } from './skullcandy/skullcandy.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    AnalyzeComponent,
    HomeComponent,
    CompareComponent,
    ProductComponent,
    AboutComponent,
    LottieAnimationComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    NavComponent,
    IphoneComponent,
    OneplusComponent,
    MacbookComponent,
    SkullcandyComponent,
  ],
  imports: [
    TextFieldModule,
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatFormFieldModule,
    MatCardModule,
    LottieModule.forRoot({ player: playerFactory }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
