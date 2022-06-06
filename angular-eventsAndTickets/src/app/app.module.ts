import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { FilterEventsComponent } from './events/filter-events/filter-events.component';
import { EventsListComponent } from './events/events-list/events-list.component';

import { CommonModule } from '@angular/common';
import { DetailsDialogComponent } from './assets/details-dialog/details-dialog.component';
import { RegisterComponent } from './security/register/register.component';
import { AuthenticationFormComponent } from './security/authentication-form/authentication-form.component';
import { AuthorizeViewComponent } from './security/authorize-view/authorize-view.component';
import { LoginComponentComponent } from './security/login-component/login.component';
import { SportsComponent } from './events/sports/sports.component';
import { TheaterComponent } from './events/theater/theater.component';
import { MusicComponent } from './events/music/music.component';
import { EntertainmentComponent } from './events/entertainment/entertainment.component';
import { TicketComponent } from './ticketShop/ticket/ticket.component';
import { TicketdialogComponent } from './assets/ticketdialog/ticketdialog.component';
import { ConfirmationdialogComponent } from './assets/confirmationdialog/confirmationdialog.component';
import { ProfileComponent } from './user-profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FilterEventsComponent,
    EventsListComponent,
    DetailsDialogComponent,
    RegisterComponent,
    AuthenticationFormComponent,
    AuthorizeViewComponent,
    LoginComponentComponent,
    SportsComponent,
    TheaterComponent,
    MusicComponent,
    EntertainmentComponent,
    TicketComponent,
    TicketdialogComponent,
    ConfirmationdialogComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
