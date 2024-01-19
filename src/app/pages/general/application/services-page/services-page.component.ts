import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  services = [
    { title: 'Mécaniques Dédiés', description: ''},
    { title: 'Contrôle des véhicules', description: ''},
    { title: 'Contrôle huile et freins', description: ''},
    { title: 'Service de dépannage', description: ''},
    { title: 'Changement des pneus', description: ''},
    { title: 'Service de carosserie', description: ''},
  ];

  getTitle(service: Service): string {
    return service.title;
  }
}
