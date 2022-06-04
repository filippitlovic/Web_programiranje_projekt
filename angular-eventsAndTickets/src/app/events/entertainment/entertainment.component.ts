import { Component, OnInit } from '@angular/core';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
})
export class EntertainmentComponent implements OnInit {
  constructor(private eventService: EventsService) {}

  events: eventDTO[];
  ngOnInit(): void {
    this.eventService
      .GetAllEntertainmentEvents()
      .pipe()
      .subscribe((events) => {
        this.events = events;
      });
  }
}
