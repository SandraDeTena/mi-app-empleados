import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importar Angular Material
import { MatSliderModule } from '@angular/material/slider';

//Toolbar Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';

//Importar Tabla de Material Angular
import { MatTableModule } from '@angular/material/table';

//Importal el form Field
import { MatFormFieldModule } from '@angular/material/form-field';

//Importar el input
import { MatInputModule } from '@angular/material/input';

//Importar los iconos
import { MatIconModule } from '@angular/material/icon';

//Importar paginación de Angular Material
import { MatPaginator } from '@angular/material/paginator';

// Importar la filtración de cada una de las columnas de las tablas
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,


  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,


  ]
})
export class AngularMaterialModule { }
