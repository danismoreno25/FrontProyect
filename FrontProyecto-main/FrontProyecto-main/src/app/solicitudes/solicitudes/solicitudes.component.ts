import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent {
  solicitudes = [
    { propiedad: 'Casa en el campo', solicitante: 'Juan Pérez', mensaje: 'Estoy interesado en rentar.' },
    // Ejemplo de datos; puedes reemplazarlos por datos reales
  ];

  aprobarSolicitud(solicitud: any) {
    console.log("Solicitud aprobada:", solicitud);
    // Lógica para aprobar solicitud
  }

  rechazarSolicitud(solicitud: any) {
    console.log("Solicitud rechazada:", solicitud);
    // Lógica para rechazar solicitud
  }
}
