import { ListKeyManager } from '@angular/cdk/a11y';
import { eventTypeDTO } from './eventTypeDTO';

export interface eventDTO {
  Id: number;
  Name: string;
  TicketPrice: number;
  Description: string;
  City: string;
  Date: Date;
  Poster: string;
}
