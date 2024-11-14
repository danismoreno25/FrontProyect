import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  role: 'arrendador' | 'arrendatario' = 'arrendador';

  constructor(private router: Router) {}

  register() {
    this.router.navigate(['/login']);
  }
}
