import { Component, OnInit } from '@angular/core';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent implements OnInit {
  constructor(public eventSerivice: EventsService) {}

  events: eventDTO[];
  ngOnInit(): void {
    this.eventSerivice
      .GetAllMusicEvents()
      .pipe()
      .subscribe((events) => {
        this.events = events;
      });
  }
}
