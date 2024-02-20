import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// récuperer les horaires dans le back
export class HoraireService {
  private apiUrl = '/api/horaires';

  constructor(private http: HttpClient) { }

  //récuperer le détail d'un horaire à modifier
  getHoraire(id: number): Observable<any> {
    return this.http.get('${this.apiUrl}/${id}')
  }

  // enrigister les modifications
  updateHoraire(id: number, horaireData: any): Observable<any> {
    return this.http.put('${this.apiUrl}/${id}', horaireData);
  }
}
