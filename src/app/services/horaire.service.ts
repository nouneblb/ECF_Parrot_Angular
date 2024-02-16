import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// récuperer les horaires dans le back
export class HoraireService {
  private apiUrl = 'http://localhost:8000/api/horaires';

  constructor(private http: HttpClient) { }

  saveHoraires(horaires: any[]): Observable<any> {
    return this.http.post<any>(this.apiUrl, horaires);
  }
}
