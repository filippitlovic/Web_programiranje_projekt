import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { eventDTO } from '../DTOs/eventDTO';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + '/events';

  public getAllEvents(): Observable<eventDTO[]> {
    return this.http.get<eventDTO[]>(this.apiURL);
  }
  public getEventById(id: number): Observable<eventDTO> {
    return this.http.get<eventDTO>(`${this.apiURL}/${id}`);
  }
  public getSportEvents(): Observable<eventDTO[]> {
    return this.http.get<eventDTO[]>(`${this.apiURL}/sports`);
  }
  public GetAllMusicEvents(): Observable<eventDTO[]> {
    return this.http.get<eventDTO[]>(`${this.apiURL}/music`);
  }
  public GetAllEntertainmentEvents(): Observable<eventDTO[]> {
    return this.http.get<eventDTO[]>(`${this.apiURL}/entertainment`);
  }
  public GetTheaterEvents(): Observable<eventDTO[]> {
    return this.http.get<eventDTO[]>(`${this.apiURL}/theater`);
  }
  public GetEventsByUser(): Observable<eventDTO[]> {
    return this.http.get<eventDTO[]>(`${this.apiURL}/UserEvents`);
  }
  public filter(values: any): Observable<any> {
    const params = new HttpParams({ fromObject: values });
    console.log('vrijednosti:');
    return this.http.get<eventDTO[]>(`${this.apiURL}/filter`, {
      params,
      observe: 'response',
    });
  }
}
