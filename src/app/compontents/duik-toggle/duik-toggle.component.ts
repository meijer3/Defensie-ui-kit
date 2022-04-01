import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'duik-toggle',
  templateUrl: './duik-toggle.component.html',
  styleUrls: ['./duik-toggle.component.scss'],
})

export class DuikToggleComponent {

  @Input() options: any;

  @Input()  value: any;
  @Output() valueChange = new EventEmitter<any>();

  changed(){
    console.log(1);
    this.valueChange.emit(this.value);
  }
}
