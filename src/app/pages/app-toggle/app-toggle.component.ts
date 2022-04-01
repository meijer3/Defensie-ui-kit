import { Component } from '@angular/core';
import { Code } from 'src/app/core/app-code/app-code.model';


@Component({
  selector: 'app-toggle-component',
  templateUrl: './app-toggle.component.html',
  styleUrls: ['./app-toggle.component.scss']
})
export class AppToggleComponent  {
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
