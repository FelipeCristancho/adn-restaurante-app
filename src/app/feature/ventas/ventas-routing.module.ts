import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ComprarComponent} from './components/vender/vender.component';
import { ListarVentasComponent } from './components/listar-ventas/listar-ventas.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { PlatosComponent } from './components/platos/platos.component';

const routes: Routes = [
    {
        path: '',
        component: VentasComponent,
        children: [
            {
                path: 'listar',
                component: ListarVentasComponent
            },
            {
                path: 'comprar',
                component: ComprarComponent
            },
            {
                path: 'platos',
                component: PlatosComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VentasRoutingModule { }