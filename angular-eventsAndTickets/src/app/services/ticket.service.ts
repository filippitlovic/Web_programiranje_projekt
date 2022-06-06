import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ticketBM } from '../BMs/ticketBM';
import { eventDTO } from '../DTOs/eventDTO';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + '/tickets';

  public addTicket(ticket: ticketBM): Observable<void> {
    return this.http.post<void>(`${this.apiURL}`, ticket);
  }
  public getEvents(email: string): Observable<eventDTO[]> {
    let params = new HttpParams().set('email', email);
    return this.http.get<eventDTO[]>(this.apiURL, { params: params });
  }
}
