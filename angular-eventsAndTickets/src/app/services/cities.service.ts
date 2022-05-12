import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cityDTO } from '../DTOs/cityDTO';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + '/cities';

  getAllCities(): Observable<cityDTO[]> {
    return this.http.get<cityDTO[]>(this.apiURL);
  }
}
