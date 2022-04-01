import { Component } from '@angular/core';
import { Code } from 'src/app/core/app-code/app-code.model';


@Component({
  selector: 'app-button-component',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent  {
  codeblock1 : Code ={
    html:`
<button mat-flat-button color="primary">
  <mat-icon>menu</mat-icon>
  <span>Primary</span> <!--span preferred -->
</button>
    `
  }

  constructor( 
  ) {}
}
