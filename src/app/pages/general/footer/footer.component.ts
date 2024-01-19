import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  schedules = [
    { day: 'Lundi', timeRanges: ['8h30 - 13h30', '14h30 - 19h30'] },
    { day: 'Mardi', timeRanges: ['8h30 - 13h30', '14h30 - 19h30'] },
    { day: 'Mercredi', timeRanges: ['8h30 - 13h30', '14h30 - 19h30'] },
    { day: 'Jeudi', timeRanges: ['8h30 - 13h30', '14h30 - 19h30'] },
    { day: 'Vendredi', timeRanges: ['8h30 - 13h30', '14h30 - 19h30'] },
    { day: 'Samedi', timeRanges: ['8h30 - 13h30', '14h30 - 19h30'] },
    { day: 'Dimanche', closed: true },
  ]
}
