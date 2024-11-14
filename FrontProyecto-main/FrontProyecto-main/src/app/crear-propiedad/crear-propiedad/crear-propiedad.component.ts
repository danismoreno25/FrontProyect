import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-propiedad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-propiedad.component.html',
  styleUrls: ['./crear-propiedad.component.scss']
})
export class CrearPropiedadComponent {
  nombre: string = '';
  ciudad: string = '';
  direccion: string = '';
  precio: number | null = null;
  descripcion: string = '';

  crearPropiedad() {
    console.log("Propiedad creada:", {
      nombre: this.nombre,
      ciudad: this.ciudad,
      direccion: this.direccion,
      precio: this.precio,
      descripcion: this.descripcion
    });
    // Lógica adicional para guardar la propiedad
  }
}
