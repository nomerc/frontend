import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  error!: string;
  loading = false;

  ngOnInit(): void {}

  onLocalRegister(username: string, displayed: string, password: string) {
    this.showSpinner();

    this.authService.localRegister(username, displayed, password).subscribe(
      (res) => {
        // if (res.status == 200) {
        this.router.navigate([`/info`, JSON.stringify(res.body)]);
        // }
      },
      (err) => {
        this.hideSpinner();
        this.error = err.error.messages;
      }
    );
  }
  showSpinner() {
    this.loading = true;
  }
  hideSpinner() {
    this.loading = false;
  }
}
