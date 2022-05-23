import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { FilterEventsComponent } from './events/filter-events/filter-events.component';
import { LoginComponentComponent } from './security/login-component/login.component';
import { RegisterComponent } from './security/register/register.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'login', component: LoginComponentComponent,
  },
  {
    path: 'filter',
    component: FilterEventsComponent,
  },

  {
    path: '',
    component: EventsListComponent,
  },
  { path: '**', redirectTo: '' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
