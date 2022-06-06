import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-confirmationdialog',
  templateUrl: './confirmationdialog.component.html',
  styleUrls: ['./confirmationdialog.component.css'],
})
export class ConfirmationdialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public email: string,
    private dataService: DataserviceService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.email = this.dataService.sharedData;
    console.log(this.email + '9292');
  }
  close() {
    this.dialog.closeAll();
    this.router.navigate(['/']);
  }
}
