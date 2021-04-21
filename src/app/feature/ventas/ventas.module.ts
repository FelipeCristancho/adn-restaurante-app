import { NgModule } from '@angular/core';

import {VentasRoutingModule} from './ventas-routing.module';
import { SharedModule } from '@shared/shared.module';

import { ListarVentasComponent } from './components/listar-ventas/listar-ventas.component';
import { VentasComponent } from './components/ventas/ventas.component';

import { VentasServiceService } from './shared/service/ventas-service.service';
import { ComprarComponent } from './components/comprar/comprar.component';
import { PlatosComponent } from './components/platos/platos.component';

@NgModule({
    declarations: [
      ListarVentasComponent,
      VentasComponent,
      ComprarComponent,
      PlatosComponent
    ],
    imports: [
      VentasRoutingModule,
      SharedModule
    ],
    providers: [VentasServiceService]
  })
  export class VentasModule { }
