import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
})

export class CarsService {
    private occasionCars = [
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

    constructor() {}

    getAllCars(): any [] {
        return this.occasionCars;
    }

    getCarDetails(carId: number): any {
        // rechercher la voiture avec Id correspondant
        console.log('Getting details for Car ID:', carId);
        const car = this.occasionCars.find((c) => c.id == carId);

        if (car) {
            console.log('Car details found:', car);
            return car;
        } else {
            // si jamais le véhicule n'est pas trouver retourner une valeur par défaut
            console.log('Car details not found for ID:', carId);
            return null;
        }
    }
}

