import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'cop-plusmin',
  templateUrl: './plusmin.component.html',
  styleUrls: ['./plusmin.component.scss'],
})

export class PlusMinComponent {

  @Input()  value;
  @Output() valueChange = new EventEmitter<any>();

  @Input() min;
  @Input() max;
  @Input() step = 1;


  dec() { this.onchange(-this.step);}
  inc() { this.onchange(+this.step);}

  onchange(delta: number) {
    this.value = this.value + delta;
    console.log(1,this.value);
    this.valueChange.emit(this.value);
  }

}
