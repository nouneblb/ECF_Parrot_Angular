import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-cars-content',
  templateUrl: './cars-content.component.html',
  styleUrls: ['./cars-content.component.scss'],
})

export class CarsContentComponent implements OnInit {
  car: any; 

  constructor(private route: ActivatedRoute, private carsService: CarsService) {} 
  
  ngOnInit(): void {
    // observer les changements de paramètres de route
    this.route.params.subscribe(params => {

    // récuperer l'Id du véhicule depuis l'url
    const carId = params['id'];
    console.log('Car ID from URL:', carId);

    // utiliser le service.ts pour récuperer les détails du véhicule selon l'id 
    this.car = this.carsService.getCarDetails(carId);
    }); 
  }
}