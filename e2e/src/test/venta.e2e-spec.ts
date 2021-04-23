import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { VentaPage } from '../page/venta/venta.po';

describe('workspace-project Venta', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let venta: VentaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        venta = new VentaPage();
    });

    it('Deberia listar todas las ventas', async  () => {
        page.navigateTo();
        navBar.clickBotonVentas();
        venta.clickBotonListarVentas();
        let totalVentas;
        await venta.contar().then(function(result) {            
            totalVentas = result;
        });
        expect(totalVentas).toBeGreaterThan(1);
    });
    
    it('Deberia listar todos las ventas de un cliente', async () => {
        const DNI_CLIENTE = '4120631';
        page.navigateTo();
        navBar.clickBotonVentas();
        venta.clickBotonListarVentas();
        venta.ingresarDni(DNI_CLIENTE);
        venta.clickBotonDni();
        let totalVentas;
        await venta.contarVentasCliente().then(result => {
            totalVentas = result;
        })
        expect(totalVentas).toBeGreaterThan(1);
    });

    it('Deberia listar todos los platos', async () => {
        page.navigateTo();
        navBar.clickBotonVentas();
        venta.clickBotonListarPlatos();
        let totalPlatos;
        await venta.contar().then(result => {
            totalPlatos = result;
        })
        expect(totalPlatos).toBe(5);
    });

    it('Deberia mostrar el plato mas vendido', async () => {
        page.navigateTo();
        navBar.clickBotonVentas();
        venta.clickBotonListarPlatos();
        let platoMasVendido;
        await venta.contarPlatoMasVendido().then(result => {
            platoMasVendido = result;
        })
        expect(platoMasVendido).toBe(1);
    });

    it('Deberia crear una venta', async () => {   

        const DNI_CLIENTE = '4120631';        

        page.navigateTo();
        navBar.clickBotonVentas();
        venta.clickBotonListarVentas();
        let ventasAntes;
        await venta.contar().then(function(result) {            
            ventasAntes = result;
        });
        venta.clickBotonComprar();
        venta.ingresarDniCompra(DNI_CLIENTE);
        venta.clickBotonRadioBandeja();
        venta.clickBotonCrearVenta();
        venta.clickBotonListarVentas();
        let ventasDespues;
        await venta.contar().then(function(result) {
            ventasDespues = result;
        });;

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
        await expect(ventasDespues).toBeGreaterThan(ventasAntes);
    });

});