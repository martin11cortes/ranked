import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class MainComponent implements OnInit {
  constructor(private as: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.as.logout();
  }
}
