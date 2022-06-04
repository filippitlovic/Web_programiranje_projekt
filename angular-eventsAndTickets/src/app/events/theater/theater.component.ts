import { Component, OnInit } from '@angular/core';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css'],
})
export class TheaterComponent implements OnInit {
  constructor(private eventService: EventsService) {}

  events: eventDTO[];
  ngOnInit(): void {
    this.eventService
      .GetTheaterEvents()
      .pipe()
      .subscribe((events) => {
        this.events = events;
      });
  }
}
