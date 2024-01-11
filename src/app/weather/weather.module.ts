import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';

@NgModule({
  declarations: [
    HomePageComponent,
    WeatherCardComponent,

    SpinnerLoadingComponent,
    
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    HttpClientModule,
    
  ]
})
export class WeatherModule { }
