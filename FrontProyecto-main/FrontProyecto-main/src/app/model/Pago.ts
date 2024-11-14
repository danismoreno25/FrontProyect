import { Propiedad } from "./Propiedad";

export interface Pago{
    idPago: number;
    monto: number;
    fechaPago: Date;
    propiedad: Propiedad;
    idPropiedad: number;
}