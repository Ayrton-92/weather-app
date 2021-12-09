import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  apiKey = '8ee3dac1de5105a83f39585b77e7f902';

  constructor(private http: HttpClient) { }

  getClima(ville:string): Observable<any> {
    const URL = this.url + ville + '&appid=' + this.apiKey;
    return this.http.get(URL);
  }

}
