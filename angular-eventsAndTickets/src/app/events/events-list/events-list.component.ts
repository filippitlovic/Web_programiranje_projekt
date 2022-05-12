import { Component, OnInit } from '@angular/core';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events: eventDTO[];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getAllEvents().subscribe((events) => {
      this.events = events;
    });
  }
}
