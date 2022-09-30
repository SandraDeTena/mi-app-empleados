import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importar Angular Material
import { MatSliderModule } from '@angular/material/slider';

//Toolbar Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';

//Importar Tabla de Material Angular
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class AngularMaterialModule { }
