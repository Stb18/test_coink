//----------------------------------------------------------------------------------------------//
//--------ACA SE DEBEN DECLARAR TODOS LOS COMPONENTES QUE SE UTILIZARAN A NIVEL GENERAL---------//
//----------------------------------------------------------------------------------------------//

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'; // Se agrego manualmente (componente del header 
//general de la aplicacion)
import { IonicModule } from '@ionic/angular'; // Se importa con el fin de que todos los componentes de la 
//carpeta components puedan hacer uso de los componentes de ionic, es decir; ion-header, ion-title etc. 
//En general de etiquetas de ionic.

@NgModule({
  declarations: [
    HeaderComponent // Se agrego manualmente
  ],
  exports: [ // Exports es lo que permite utilizar los componentes globalmente (en cualquier parte donde se importe)
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }