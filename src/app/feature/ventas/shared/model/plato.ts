export class Plato {

    id: string;
    nombre: string;
    precio : string;
    totalVentas : string;

    constructor(id: string, nombre: string, precio : string, totalVentas : string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.totalVentas = totalVentas;
    }
}