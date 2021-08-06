import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: boolean;

  constructor(public authService: AuthService) {
    this.user = this.authService.isLoggedIn;
    console.log('user --> ', this.user);
  }

  ngOnInit(): void {}
}
