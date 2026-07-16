import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './dashboard.html',
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }

    .dashboard-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 32px;
    }

    mat-card {
      width: 100%;
      max-width: 500px;
    }
  `]
})
export class DashboardComponent {

  private router = inject(Router);

  logout(): void {
    // Eliminar datos de autenticación (opcional)
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirigir al login
    this.router.navigate(['/login']);
  }

}