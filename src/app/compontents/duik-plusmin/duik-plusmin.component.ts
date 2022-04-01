import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'duik-plusmin',
  templateUrl: './duik-plusmin.component.html',
  styleUrls: ['./duik-plusmin.component.scss'],
})

export class DuikPlusMinComponent {


  @Input()  value: any;
  @Output() valueChange = new EventEmitter<any>();

  @Input() min!: number;
  @Input() max!: number;
  @Input() step = 1;


  dec() { this.onchange(-this.step);}
  inc() { this.onchange(+this.step);}

  onchange(delta: number) {
    this.value = this.value + delta;
    this.valueChange.emit(this.value);
  }
}
