import {by, element, browser} from 'protractor'

export class VentaPage{

    private listas = element.all(by.css('table tbody tr'));
    
    private linkListarVentas = element(by.id('linkListarVentas'));
    private linkComprar = element(by.id('linkComprar'));

    private inputDniCliente = element(by.id('inputDniCliente'));
    private botonListar = element(by.id('botonListar'));
    private listaVentasCliente = element.all(by.id('listaVentasCliente'));

    private inputDniCompra = element(by.id('inputDniCompra'));
    private radioBandeja = element(by.id('radioBandeja'));
    private crearVenta = element(by.id('crearVenta'));

    private linkListarPlatos = element(by.id('linkListarPlatos'));
    private platoMasVendido = element.all(by.id('platoMasVendido'));
    
    

    async clickBotonComprar() {
        await this.linkComprar.click();
    }

    async clickBotonRadioBandeja(){
        await this.radioBandeja.click();
    }

    async clickBotonCrearVenta(){
        await this.crearVenta.click();
    }

    async clickBotonListarVentas() {
        await this.linkListarVentas.click();
    }

    async clickBotonListarPlatos(){
        await this.linkListarPlatos.click();
    }

    async ingresarDni(DniCLiente) {
        await this.inputDniCliente.sendKeys(DniCLiente);
    }

    async ingresarDniCompra(DniCLienteCompra) {
        await this.inputDniCompra.sendKeys(DniCLienteCompra);
    }

    async clickBotonDni(){
        await this.botonListar.click();
    }

    async contar(){
        return await this.listas.count();
    }

    async contarVentasCliente(){
        return await this.listaVentasCliente.count();
    }

    async contarPlatoMasVendido(){
        return await this.platoMasVendido.count();
    }

    async obtenerTextoAlert(){
        return (await browser.switchTo().alert()).getText();
    }

}