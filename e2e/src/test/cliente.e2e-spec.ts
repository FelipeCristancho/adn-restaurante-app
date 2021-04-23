import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ClientePage } from '../page/cliente/cliente.po';

describe('workspace-project Cliente', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cliente: ClientePage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cliente = new ClientePage();
    });

    /*it('Deberia crear un cliente', async () => {
        const NOMBRE_CLIENTE = 'ClienteTest1';
        const APELLIDO_CLIENTE = 'ClienteTest';
        const DNI_CLIENTE = '48316813';
        const TEL_CLIENTE = '+57-3112568734';

        page.navigateTo();
        navBar.clickBotonClientes();
        cliente.clickBotonListarClientes();
        let clientesAntes;
        await cliente.contarClientes().then(result => {
            clientesAntes = result;
        })
        cliente.clickBotonCrearClientes();
        cliente.ingresarNombre(NOMBRE_CLIENTE);
        cliente.ingresarApellido(APELLIDO_CLIENTE);
        cliente.ingresarDni(DNI_CLIENTE);
        cliente.ingresarTelefono(TEL_CLIENTE);
        cliente.clickBotonRegistrar();
        cliente.clickBotonListarClientes();
        let clientesDespues;
        await cliente.contarClientes().then(result => {
            clientesDespues = result;
        })

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
        await expect(clientesDespues).toBeGreaterThan(clientesAntes);
    });*/

    it('Deberia listar todos los clientes', async () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        navBar.clickBotonClientes();
        cliente.clickBotonListarClientes();
        let totalClientes = 0;
        await cliente.contarClientes().then(result => {
            totalClientes = result;
        })
        expect(totalClientes).toBeGreaterThan(1);
    });

    it('Deberia Mostrar el mejor cliente', async () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        navBar.clickBotonClientes();
        cliente.clickBotonListarClientes();
        let mejorCliente = 0;
        await cliente.contarMejorCliente().then(result => {
            mejorCliente = result;
        })
        expect(mejorCliente).toBe(1);
    });
});