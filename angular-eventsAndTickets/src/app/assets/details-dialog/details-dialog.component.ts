import { Component, OnInit } from '@angular/core';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { FilterEventsComponent } from 'src/app/events/filter-events/filter-events.component';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css'],
})
export class DetailsDialogComponent implements OnInit {
  constructor(private filter: FilterEventsComponent) {}
  ngOnInit(): void {}
  data = this.filter.eventIndex;
}
