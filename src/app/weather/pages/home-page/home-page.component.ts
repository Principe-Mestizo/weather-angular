import { Component, HostBinding, OnInit, computed, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../interfaces/weather.interface';
import { WeatherIconData } from '../../interfaces/wather-icon.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {
  public clima?: WeatherData;
  public icon?: WeatherIconData;
  public isLoading: boolean = false;
  public errorMessage: string = '';
  constructor( private weatherService: WeatherService){}

  
  private darkMode = signal<boolean>(false);

  protected readonly darkmode$ = computed( () => this.darkMode())

  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }
  setDarkMode() {
    this.darkMode.set(!this.darkMode())
  }

  getIconPath(): string {
    return this.darkMode() ? 'assets/dark.svg' : 'assets/light.svg';
  }
  searchByWeatherPais( term: string):void{
   
   console.log('Desde capital page');
   console.log({term});
    this.isLoading = true;
    

   this.weatherService.searchByPais( term )
   
    .subscribe( clima => {
      this.clima = clima
      this.isLoading = false;
      
    },
    error => {
      this.errorMessage = 'No se encontraron resultados';
      this.isLoading = false;
      this.clima = undefined;
    }
    )
    
  }

  
  getWeatherIconUrl(iconName: string): string {
    return `https://www.meteosource.com/static/img/ico/weather/${iconName}.svg`;
  }

 

}
