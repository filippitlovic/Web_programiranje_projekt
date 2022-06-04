import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  constructor(private eventsService: EventsService, private router: Router) {}
  event: eventDTO;
  data = this.router.getCurrentNavigation().extras.state['example'];
  ngOnInit(): void {
    this.eventsService.getEventById(this.data).subscribe((event) => {
      this.event = event;
      console.log(this.event);
    });
  }
  buyTicket() {}
}
