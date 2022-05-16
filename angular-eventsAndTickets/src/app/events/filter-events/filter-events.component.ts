import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from 'src/app/assets/details-dialog/details-dialog.component';
import { cityDTO } from 'src/app/DTOs/cityDTO';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { eventTypeDTO } from 'src/app/DTOs/eventTypeDTO';
import { CitiesService } from 'src/app/services/cities.service';
import { EventTypesService } from 'src/app/services/event-types.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-filter-events',
  templateUrl: './filter-events.component.html',
  styleUrls: ['./filter-events.component.css'],
})
export class FilterEventsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private eventTypeService: EventTypesService,
    private citiesService: CitiesService,
    private dialog: MatDialog
  ) {}

  eventIndex;

  form: FormGroup;

  eventTypes: eventTypeDTO[];
  events: eventDTO[];
  eventCities: cityDTO[];

  initialFormValues: any;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      city: 0,
      eventType: 0,
      dateOfEvent: Date,
    });

    this.initialFormValues = this.form.value;

    this.eventsService.getAllEvents().subscribe((events) => {
      this.events = events;
      this.filterEvents(this.form.value);
      this.form.valueChanges.subscribe((values) => {
        this.filterEvents(values);
      });
    });

    this.citiesService.getAllCities().subscribe((eventCities) => {
      this.filterEvents(this.form.value);
      this.eventCities = eventCities;
      this.form.valueChanges.subscribe((values) => {
        this.filterEvents(values);
      });
    });

    this.eventTypeService.getAllEventTypes().subscribe((eventTypes) => {
      this.filterEvents(this.form.value);
      this.eventTypes = eventTypes;
      this.form.valueChanges.subscribe((values) => {
        this.filterEvents(values);
      });
    });
  }

  filterEvents(values: any) {
    this.eventsService
      .filter(values)
      .subscribe((response: HttpResponse<eventDTO[]>) => {
        this.events = response.body;
      });
  }

  clearForm() {
    this.form.patchValue(this.initialFormValues);
  }

  openDialog(data: number) {
    const dialogRef = this.dialog.open(DetailsDialogComponent);
    this.eventIndex = data;
  }
}
