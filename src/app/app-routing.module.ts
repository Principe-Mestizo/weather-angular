import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFountComponent } from './shared/components/not-fount/not-fount.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherModule)
  },
  {
    path: '**',
    component: NotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
