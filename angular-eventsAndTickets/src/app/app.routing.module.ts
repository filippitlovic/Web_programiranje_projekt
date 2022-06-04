import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntertainmentComponent } from './events/entertainment/entertainment.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { FilterEventsComponent } from './events/filter-events/filter-events.component';
import { MusicComponent } from './events/music/music.component';
import { SportsComponent } from './events/sports/sports.component';
import { TheaterComponent } from './events/theater/theater.component';
import { LoginComponentComponent } from './security/login-component/login.component';
import { RegisterComponent } from './security/register/register.component';
import { TicketComponent } from './ticketShop/ticket/ticket.component';
import { ProfileComponent } from './user-profile/profile/profile.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  {
    path: 'filter',
    component: FilterEventsComponent,
  },

  {
    path: '',
    component: FilterEventsComponent,
  },
  {
    path: 'sport',
    component: SportsComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  {
    path: 'theater',
    component: TheaterComponent,
  },
  {
    path: 'entertainment',
    component: EntertainmentComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'ticket',
    component: TicketComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
