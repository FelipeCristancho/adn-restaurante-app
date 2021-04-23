import {by, element, browser} from 'protractor'

export class ClientePage{

    private linkCrearCliente = element(by.id('linkCrearCliente'));
    private linkListarCliente = element(by.id('linkListarCliente'));
    private inputNombre = element(by.id('inputNombre'));
    private inputApellido = element(by.id('inputApellido'));
    private inputDni = element(by.id('inputDni'));
    private inputTel = element(by.id('inputTel'));

    private registrar = element(by.id('registrar'));

    private listaClientes = element.all(by.css('table tbody tr'));
    private mejorCliente = element.all(by.id('mejorCliente'));
    
    
    async clickBotonRegistrar() {
        await this.registrar.click();
    }
    async clickBotonCrearClientes() {
        await this.linkCrearCliente.click();
    }

    async clickBotonListarClientes() {
        await this.linkListarCliente.click();
    }

    async ingresarNombre(nombreCliente) {
        await this.inputNombre.sendKeys(nombreCliente);
    }

    async ingresarApellido(apellidoCliente) {
        await this.inputApellido.sendKeys(apellidoCliente);
    }

    async ingresarTelefono(telCliente) {
        await this.inputTel.sendKeys(telCliente);
    }

    async ingresarDni(DniCLiente) {
        await this.inputDni.sendKeys(DniCLiente);
    }

    async contarClientes(){
        return this.listaClientes.count();
    }

    async contarMejorCliente(){
        return this.mejorCliente.count();
    }

    async obtenerTextoAlert(){
        return (await browser.switchTo().alert()).dismiss();
    }

}