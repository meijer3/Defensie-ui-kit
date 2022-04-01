import {  Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { DropdownDirective } from './duik-dropdown.Directive';



@Component({
  selector: 'duik-dropdown',
  templateUrl: './duik-dropdown.component.html',
  styleUrls: ['./duik-dropdown.component.scss'],
})

export class DuikDropdownComponent {

  @Input()  label: any;


  @Input()  items: any;
  @Input() placeholder = '-';

  @Input()  selected: any;
  @Output() selectedChange = new EventEmitter<any>();

  @ContentChild(DropdownDirective) content!: DropdownDirective;


  constructor(){

  }



  change(){
    this.selectedChange.emit(this.selected);
  }

}
