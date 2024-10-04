import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  exports: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // Añade RouterModule aquí
    Error404PageComponent,
    FormsModule
  ]
})
export class SharedModule { }
