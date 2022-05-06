import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'sign-in',
    component: SigninComponent,
  },
  {
    path:'sign-up',
    component: SignupComponent,
  },
  {
    path:'event',
    component: EventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
