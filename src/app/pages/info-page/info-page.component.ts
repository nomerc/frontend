import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent implements OnInit {
  profile!: User;
  products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.profile = JSON.parse(this.route.snapshot.params['profile']);
    });
  }

  showProducts() {
    this.authService.showProducts().subscribe((res) => {
      this.products = res.products;
    });
  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      this.router.navigate([`/`]);
    });
  }
}
