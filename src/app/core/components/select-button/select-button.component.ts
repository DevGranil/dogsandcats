import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent {
  @Output() openEditor = new EventEmitter()

  edit(){
    this.openEditor.emit()
  }
}
