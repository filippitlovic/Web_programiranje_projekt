import { Component, Input, OnInit } from '@angular/core';
import { eventDTO } from 'src/app/DTOs/eventDTO';
import { EventsService } from 'src/app/services/events.service';

import { BrowserModule } from '@angular/platform-browser';
import { DetailsDialogComponent } from 'src/app/assets/details-dialog/details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SecurityService } from 'src/app/security/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  @Input()
  events: eventDTO[];
  id: number;
  constructor(
    private eventsService: EventsService,
    private dialog: MatDialog,
    private securityService: SecurityService,
    private router: Router
  ) {}
  @Input()
  link: String;
  role: string;
  ngOnInit(): void {
    this.link = this.router.url;
    console.log(this.link);
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data: { id: id },
    });
  }

  public isAuthorized() {
    if (this.role) {
      return this.securityService.getRole() === this.role;
    } else {
      return this.securityService.isAuthenticated();
    }
  }
  buyTicket(id: number) {
    if (this.isAuthorized()) {
      this.id = id;
      this.router.navigate(['ticket'], { state: { example: this.id } });
    } else {
      this.router.navigate(['login']);
    }
  }
}
