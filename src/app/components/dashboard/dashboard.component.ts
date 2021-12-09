import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  image = "https://images-na.ssl-images-amazon.com/images/I/41wkG24yDkL.png";
  ville = '';
  loading = false;
  query = false;
  temperature = 0;
  humidite = 0;
  clima = '';
  villeError = false;


  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  getClima() {
    this.query = true;
    this.loading = true;

    this._climaService.getClima(this.ville).subscribe(data =>{
      this.loading = false;
      this.query = true;
      this.temperature = data.main.temp - 273
      this.humidite = data.main.humidity
      this.clima = data.weather[0].main
    }, error => {
      console.log(error);
      this.loading = false;
      this.error();
    })
  }

  error() {
    this.villeError = true;
    setTimeout(() => {
      this.villeError = false;
      this.ville = '';
      this.clima = '';
      this.temperature = 0;
      this.humidite = 0;
    }, 3000);
  }

}
