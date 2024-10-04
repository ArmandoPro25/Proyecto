import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Atractivo } from '../../../interfaces/atractivo.interface';

@Component({
  selector: 'personalizado-atractivo-card',
  templateUrl: './personalizado-atractivo.component.html',
  styles: ``
})
export class PersonalizadoAtractivoComponent implements OnInit {

  @Input()
  public atractivo!: Atractivo;

  @Output() seleccionado = new EventEmitter<Atractivo>();

  ngOnInit(): void {
    if (!this.atractivo)
      throw new Error('Atractivo property is required');
  }

  seleccionarAtractivo(event: any, atractivo: Atractivo) {
    atractivo.selected = event.target.checked;
    this.seleccionado.emit(atractivo);
  }
}
