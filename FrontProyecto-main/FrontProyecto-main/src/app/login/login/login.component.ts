import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  role: 'arrendador' | 'arrendatario' = 'arrendador';

  constructor(private router: Router) {}

  login() {
    console.log("Login method called");
    if (this.role === 'arrendador') {
      this.router.navigate(['/arrendador']);
    } else {
      this.router.navigate(['/arrendatario']);
    }
  }

  goToSignUp() {
    this.router.navigate(['/register']);
  }
}
