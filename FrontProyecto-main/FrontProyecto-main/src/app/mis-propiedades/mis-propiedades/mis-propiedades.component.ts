import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-propiedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-propiedades.component.html',
  styleUrls: ['./mis-propiedades.component.scss']
})
export class MisPropiedadesComponent {
  propiedades = [
    { nombre: 'Casa en el campo', ciudad: 'cajica', direccion: 'km 2.5 cajica - tabio', precio: 150000 },
    // Ejemplo de datos; reemplaza con tus datos reales
  ];

  editarPropiedad(propiedad: any) {
    console.log("Editando propiedad:", propiedad);
    // Lógica para editar propiedad
  }

  eliminarPropiedad(propiedad: any) {
    console.log("Eliminando propiedad:", propiedad);
    // Lógica para eliminar propiedad
  }
}
