import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LoginComponentComponent } from '../security/login-component/login.component';
import { SecurityService } from '../security/security.service';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    public securityService: SecurityService,
    private dataService: DataserviceService
  ) {}

  ema: string;
  email = 'sad';
  ngOnInit(): void {
    this.ema = this.dataService.sharedData;
  }
}
