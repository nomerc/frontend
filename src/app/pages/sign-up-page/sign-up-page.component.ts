import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  error!: string;

  loading = false;
  loading_g = false;

  ngOnInit(): void {}

  onLocalSignUp(username: string, password: string) {
    this.showSpinner();

    this.authService.localSignUp(username, password).subscribe(
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

  onGoogleSignUp() {
    this.showSpinnerG();
    window.open(
      `${environment.SERVER_URI}/auth/google`,
      'mywindow',
      'location=1,status=1,scrollbars=1, width=800,height=800'
    );

    let listener = window.addEventListener('message', (message) => {
      this.hideSpinnerG();
      this.router.navigate([`/info`, JSON.stringify(message.data.user)]);
    });
  }

  showSpinner() {
    this.loading = true;
  }
  hideSpinner() {
    this.loading = false;
  }

  showSpinnerG() {
    this.loading_g = true;
  }
  hideSpinnerG() {
    this.loading_g = false;
  }
}
