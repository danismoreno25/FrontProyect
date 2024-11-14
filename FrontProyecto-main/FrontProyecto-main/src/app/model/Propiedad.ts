import { Usuario } from "./Usuario";

export interface Propiedad {
    id: number;
    direccion: string;
    descripcion: string;
    precio: number;
    estado: string;
    usuario: Usuario;
}