import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './_guard/auth.guard';



export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'venues',
        loadChildren: './views/venues/venues.module#VenuesModule'
      },
      {
        path: 'users',
        loadChildren: './views/users/users.module#UsersModule'
      },
      {
        path: 'reports',
        loadChildren: './views/reports/reports.module#ReportsModule'
      },
      {
        path: 'users/detail/:userId',
        loadChildren: './views/profile/profile.module#ProfileModule',
      },
      {
        path: 'venues/detail/:venueId',
        loadChildren: './views/venues-detail/venue-detail.module#VenueDetailModule',
      },
      {
        path: 'venues/new',
        loadChildren: './views/new-venue/new-venue.module#NewVenueModule',
      },
      {
        path: 'report/detail/:reportedId',
        loadChildren: './views/reports-detail/report-detail.module#ReportDetailModule',
      },
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
