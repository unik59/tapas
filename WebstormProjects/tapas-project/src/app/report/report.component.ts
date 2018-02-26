import {Component, Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Injectable()
export class CarService {

  constructor(private http: Http) {}

  getCarsSmall() {
    return this.http.get('/assets/cars-small.json')
      .toPromise()
      .then(res => <Car[]> res.json().data)
      .then(data => data);
  }
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }


}
