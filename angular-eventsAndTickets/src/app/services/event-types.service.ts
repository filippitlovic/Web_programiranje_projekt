import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { eventDTO } from '../DTOs/eventDTO';
import { eventTypeDTO } from '../DTOs/eventTypeDTO';

@Injectable({
  providedIn: 'root',
})
export class EventTypesService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + '/eventTypes';

  getAllEventTypes(): Observable<eventTypeDTO[]> {
    return this.http.get<eventTypeDTO[]>(this.apiURL);
  }
  getEventTypeById(id: number): Observable<eventTypeDTO> {
    return this.http.get<eventTypeDTO>(`${this.apiURL}/${id}`);
  }
}
