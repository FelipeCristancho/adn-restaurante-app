export class Venta {

    id: string;
    cliente: string;
    plato : string;
    precio : string;
    fecha : string;
    promocion : boolean;

    constructor(id: string, cliente: string, plato : string, precio : string, fecha: string, promocion : boolean) {
        this.id = id;
        this.cliente = cliente;
        this.plato = plato;
        this.precio = precio;
        this.fecha = fecha;
        this.promocion = promocion;
    }
}