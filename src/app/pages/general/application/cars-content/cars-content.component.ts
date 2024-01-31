import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cars-content',
  templateUrl: './cars-content.component.html',
  styleUrls: ['./cars-content.component.scss'],
})

export class CarsContentComponent implements OnInit {
  car: any; 
  contactForm: FormGroup; 

  constructor(private route: ActivatedRoute, private carsService: CarsService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  } 
  
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

  submitForm() {
    if (this.contactForm.valid) {
      // soumission du form 
      console.log('Formulaire soumis avec succès!', this.contactForm.value);
    }
  }
}