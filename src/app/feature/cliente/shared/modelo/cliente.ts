export class Cliente {

    id: string;
    dni: string;
    nombre : string;
    apellido : string;
    telefono : string;
    totalCompras : string;

    constructor(id: string, dni: string, nombre : string, apellido : string, telefono: string, totalCompras : string) {
        this.id = id;
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.totalCompras = totalCompras
    }
}