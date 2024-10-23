import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  @Input() valor: number = 0; // Propiedad de entrada para recibir el valor inicial
  @Output() valorCambio: EventEmitter<number> = new EventEmitter<number>(); // Evento de salida

  incrementar() {
    this.valor++;
    this.valorCambio.emit(this.valor); // Emitimos el nuevo valor
  }

  decrementar() {
    this.valor--;
    this.valorCambio.emit(this.valor); // Emitimos el nuevo valor
  }
}
