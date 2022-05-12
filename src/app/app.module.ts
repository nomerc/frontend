import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { ErrorInfoComponent } from './components/error-info/error-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    RegisterPageComponent,
    InfoPageComponent,
    ErrorInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
