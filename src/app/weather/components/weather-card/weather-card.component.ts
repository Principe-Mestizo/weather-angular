import { Component, Input } from '@angular/core';
import { WeatherData } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input()
  public clima?: WeatherData;

  getWeatherIconUrl(iconName: string): string {
    return `https://www.meteosource.com/static/img/ico/weather/${iconName}.svg`;
  }
}


