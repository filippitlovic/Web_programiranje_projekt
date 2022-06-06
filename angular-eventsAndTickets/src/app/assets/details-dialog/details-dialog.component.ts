import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { eventDTO } from 'src/app/DTOs/eventDTO';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css'],
})
export class DetailsDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public id: number,
    private eventsService: EventsService
  ) {}
  event: eventDTO;
  data = this.id['id'];
  ngOnInit(): void {
    this.eventsService.getEventById(this.data).subscribe((event) => {
      this.event = event;
    });
  }
}
