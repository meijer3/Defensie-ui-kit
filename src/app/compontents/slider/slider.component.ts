import {  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';



@Component({
  selector: 'cop-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnChanges {

  @Input()  label; // is a function to decorate the labels

  @Input()  value;
  @Output() valueChange = new EventEmitter<any>();

  @Input() min;
  @Input() max;
  @Input() step = 1;

  @Input() disabled;
  @Input() invert;

  @Input() tickInterval = 1 ;

  @Input() matrix: {value, label}[];


  constructor(
  ){}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.matrix !== undefined){
      this.setMatrix();
    }
  }

  changed(){
    if(this.matrix !== undefined){
      this.valueChange.emit(this.matrix[this.value].value);
    }else{
      // emit pure value
      this.valueChange.emit(this.value);
    }
  }

  setMatrix(){
    if(this.matrix !== undefined){
      // console.log('newmatrix ',this.value,' =>',this.findClosestInMatrix(this.value))
      this.value = this.findClosestInMatrix(this.value);
      this.min = 0;
      this.max = (this.matrix.length - 1 );
      this.step = 1;
      this.tickInterval = 1;
      this.label = (index) => this.matrix[index].label;


    }
  }

  findClosestInMatrix(value){ // return a index!
    const item = this.matrix.reduce((prev,curr)=> Math.abs(curr.value - value) <= Math.abs(prev.value - value) ? curr : prev );
    return this.matrix.indexOf(item);
  }

}
