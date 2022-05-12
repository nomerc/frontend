import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', component: SignUpPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'info', component: InfoPageComponent },
  { path: 'info/:profile', component: InfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
