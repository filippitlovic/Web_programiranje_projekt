import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationdialogComponent } from '../confirmationdialog/confirmationdialog.component';

@Component({
  selector: 'app-ticketdialog',
  templateUrl: './ticketdialog.component.html',
  styleUrls: ['./ticketdialog.component.css'],
})
export class TicketdialogComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public email: string;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.email + 'dialogog');
  }
  buyTicket() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {});
  }
  close() {
    this.dialog.closeAll();
  }
}
