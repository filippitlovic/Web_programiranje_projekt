import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TicketdialogComponent } from 'src/app/assets/ticketdialog/ticketdialog.component';
import { ticketBM } from 'src/app/BMs/ticketBM';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { EventsService } from 'src/app/services/events.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  constructor(
    private eventsService: EventsService,
    private router: Router,
    private dialog: MatDialog,
    private dataService: DataserviceService,
    private ticketService: TicketService
  ) {}

  userMail;
  eventId;
  event: eventDTO;

  data = this.router.getCurrentNavigation().extras.state['example'];

  ngOnInit(): void {
    this.eventsService.getEventById(this.data).subscribe((event) => {
      this.event = event;
    });
  }
  buyTicket() {
    const dialogRef = this.dialog.open(TicketdialogComponent, {
      data: { datakey: this.dataService.sharedData },
    });
    var ticket: ticketBM = {
      EventId: this.event.Id,
      UserMail: this.dataService.sharedData,
    };
    this.ticketService.addTicket(ticket).subscribe(() => {});
  }
}
