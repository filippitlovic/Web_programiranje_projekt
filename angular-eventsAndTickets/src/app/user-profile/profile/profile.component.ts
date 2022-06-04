import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/security/security.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private securityService: SecurityService) {}

  data: string;
  ngOnInit(): void {}
}
