import { Component, OnInit } from '@angular/core';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { SecurityService } from 'src/app/security/security.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { EventsService } from 'src/app/services/events.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private securityService: SecurityService,
    private dataService: DataserviceService,
    private eventService: EventsService,
    private ticketService: TicketService
  ) {}

  events: eventDTO[];
  ngOnInit(): void {
    this.ticketService
      .getEvents(this.dataService.sharedData)
      .subscribe((events) => {
        this.events = events;
      });
  }
}
