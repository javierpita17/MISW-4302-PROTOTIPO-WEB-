import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmDashboardComponent } from './components/alarm-dashboard/alarm-dashboard.component';
import { AlarmLoginComponent } from './components/alarm-login/alarm-login.component';
import { AlarmNewComponent } from './components/alarm-new/alarm-new.component';
import { AlarmRegisterComponent } from './components/alarm-register/alarm-register.component';

const routes: Routes = [
  {path: 'registro', component: AlarmRegisterComponent},
  {path: 'dashboard', component: AlarmDashboardComponent},
  {path: 'crear', component: AlarmNewComponent},
  {path: '', component: AlarmLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
