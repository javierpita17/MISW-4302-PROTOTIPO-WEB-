import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmLoginComponent } from './components/alarm-login/alarm-login.component';
import { AlarmRegisterComponent } from './components/alarm-register/alarm-register.component';

const routes: Routes = [
  {path: 'registro', component: AlarmRegisterComponent},
  {path: '', component: AlarmLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
