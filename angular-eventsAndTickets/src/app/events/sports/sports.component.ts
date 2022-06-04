import { Component, OnInit } from '@angular/core';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  constructor(private eventService: EventsService) {}

  events: eventDTO[];

  ngOnInit(): void {
    this.eventService
      .getSportEvents()
      .pipe()
      .subscribe((events) => {
        this.events = events;
      });
  }
}
