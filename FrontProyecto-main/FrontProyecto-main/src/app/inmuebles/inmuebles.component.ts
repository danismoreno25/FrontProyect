import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Propiedad } from '../model/Propiedad';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-inmuebles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inmuebles.component.html',
  styleUrl: './inmuebles.component.css'
})
export class InmueblesComponent {
  constructor(
    // No descomentar hasta que se implemente el servicio
    // private servicioPropiedad: PropiedadServicioService
  ){}

  usuariosPrueba: Usuario[] = [
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan.perez@example.com",
      password: "123456",
      role: "admin",
    },
    {
      id: 2,
      nombre: "Ana López",
      email: "ana.lopez@example.com",
      password: "abcdef",
      role: "usuario",
    },
    {
      id: 3,
      nombre: "Carlos García",
      email: "carlos.garcia@example.com",
      password: "qwerty",
      role: "usuario",
    },
  ];
  
  // Datos de prueba para propiedades
  propiedadesPrueba: Propiedad[] = [
    {
      id: 1,
      direccion: "Av. Siempre Viva 742, Springfield",
      descripcion: "Hermosa casa familiar con jardín y piscina.",
      precio: 350000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[0],
    },
    {
      id: 2,
      direccion: "Calle Falsa 123, Ciudad Gótica",
      descripcion: "Departamento moderno en el centro de la ciudad.",
      precio: 150000,
      estado: "Vendido",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 3,
      direccion: "Boulevard de los Sueños Rotos, 456",
      descripcion: "Casa amplia con vista al mar y acceso a la playa.",
      precio: 800000,
      estado: "Reservado",
      usuario: this.usuariosPrueba[2],
    },
    {
      id: 4,
      direccion: "Callejón Diagon 7, Londres",
      descripcion: "Propiedad mágica ideal para magos y brujas.",
      precio: 500000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[0],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
    {
      id: 5,
      direccion: "La Colina, Hobbiton",
      descripcion: "Acogedora casa hobbit con jardín verde y gran vista.",
      precio: 250000,
      estado: "Disponible",
      usuario: this.usuariosPrueba[1],
    },
  ];

  ngOnInit(){
    //TODO: Implementar lógica con servicioPropiedades para que, al inicializar la página, se muestren todos los resultados
  }
}
