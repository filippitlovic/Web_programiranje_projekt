import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { userCredentials } from '../security.models';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  constructor(
    private securityService: SecurityService,
    private router: Router,
    private dataService: DataserviceService
  ) {}

  ngOnInit(): void {}

  login(userCredentials: userCredentials) {
    this.securityService
      .login(userCredentials)
      .subscribe((authenticationResponse) => {
        this.securityService.saveToken(authenticationResponse);
        this.dataService._sharedData = userCredentials.email;
        localStorage.setItem('email', userCredentials.email);
        this.router.navigate(['/']);
      });
  }
}
