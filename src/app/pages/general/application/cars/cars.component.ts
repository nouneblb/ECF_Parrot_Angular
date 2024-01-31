import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


interface Cars {
  title: string,
  price: number,
  year: number,
  mileage: number,
  fuel: string,
  image: string
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent {
  //tableau de données représentant les véhicules d'occasions
  occasionCars = [
    { id: 1, title: 'Ford Ranger Raptor', price: 55400, year: 2023, mileage: 20000, fuel: 'Diesel', image: 'assets/ford.jpg'},
    { id: 2, title: 'Audi Sportback 45', price: 44500, year: 2021, mileage: 23000, fuel: 'Hybride', image: 'assets/audisportback.jpg'},
    { id: 3, title: 'Golf 5 Volkswagen', price: 26460, year: 2021, mileage: 98000, fuel: 'Diesel', image: 'assets/volkswagen.jpg'},
    { id: 4, title: 'Opel Corsa ', price: 22340, year: 2020, mileage: 133000, fuel: 'Diesel', image: 'assets/opelcorsa.jpg'},
    { id: 5, title: 'Ford Fiesta', price: 21750, year: 2011, mileage: 98000, fuel: 'Essence', image: 'assets/fordfiesta.jpg'},
    { id: 6, title: 'Fiat 500', price: 19320, year: 2019, mileage: 55200, fuel: 'Diesel', image: 'assets/fiat 500.jpg'},
    { id: 7, title: 'Renault Clio IV', price: 16440, year: 2019, mileage: 70000, fuel: 'Essence', image: 'assets/clio.jpg'},
    { id: 8, title: 'Renault Clio II', price: 15600, year: 2017, mileage: 90000, fuel: 'Essence', image: 'assets/renaultclio.jpg'},
    { id: 9, title: 'Peugeot 208', price: 12980, year: 2011, mileage: 100000, fuel: 'Diesel', image: 'assets/peugeot208.jpg'},
  ];

  //form pour filter values
    // les inputs
  filterValues = {
    prixType: 'prix',
    minPrix: 0,
    maxPrix: 0,
    Kilometrage: 'Kilometrage',
    minKilometrage: 0,
    maxKilometrage: 0,
    Annee: 'année',
    minAnnee: 0,
    maxAnnee: 0,
  }

  isPrixFieldsVisible = false;
  togglePrixFields() {
    this.isPrixFieldsVisible = !this.isPrixFieldsVisible;
  }

  isKlmFieldsVisible = false;
  toggleKlmFields() {
    this.isKlmFieldsVisible = !this.isKlmFieldsVisible;
  }

  isAnneeFieldsVisible = false;
  toggleAnneeFields() {
    this.isAnneeFieldsVisible = !this.isAnneeFieldsVisible;
  };

  filteredCars: any[] = []; 
  showFilteredResults = false; // Variable pour contrôler l'affichage des résults filtrés 

  // utiliser les valeurs en min(x) et max(y)
  findcar(): void {
    //je veux  voir tous les vehicules supérieurs à (min)x et inférieur a (max)y
    this.filteredCars = this.occasionCars.filter((car: any)=> {
      return car.price >= this.filterValues.minPrix && car.price <= this.filterValues.maxPrix;
    }),
    this.filteredCars = this.occasionCars.filter((car: any)=> {
      return car.mileage >= this.filterValues.minKilometrage && car.mileage <= this.filterValues.maxKilometrage;
    }),
    this.filteredCars = this.occasionCars.filter((car: any)=> {
      return car.year >= this.filterValues.minAnnee && car.year <= this.filterValues.maxAnnee;
    }
    );

    console.log(this.filteredCars)
    // Afficher les résultats filtrés 
    this.showFilteredResults = true; 
  }

  
  constructor(private router: Router ) {}

  // lors du click sur un lien véhicule (navigue vers l'url de l'id) => affiche le detail du véhicule 
  navigateToContent(carId: number) {
    this.router.navigate(['/cars', carId]);
  }
}



  
