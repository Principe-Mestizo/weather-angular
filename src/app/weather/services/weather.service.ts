import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of } from 'rxjs';
import {  WeatherData } from '../interfaces/weather.interface';
import { HttpClient } from '@angular/common/http';
import { WeatherIconData } from '../interfaces/wather-icon.interface';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl: string = '  https://www.meteosource.com/api/v1/free'
  private API_KEY:string = 'f78gv2mtsqjn5pz4mcuycqz7003o9s7cges9usww'
  constructor(private http: HttpClient) { }

 
  searchByPais(term: string):Observable<WeatherData>{

    const url = `${this.apiUrl}/point?place_id=${ term }&sections=all&timezone=UTC&language=en&units=metric&key=${this.API_KEY}`
    return this.http.get<WeatherData>(url);
  }

 
}
