import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Code } from './app-code.model';


@Component({
  selector: 'app-code',
  templateUrl: './app-code.component.html',
  styleUrls: ['./app-code.component.scss']
})
export class AppCodeComponent implements OnInit {

  @Input() code!: Code
  single: boolean = false;

  constructor(
    private matSnackBar: MatSnackBar,
   ) {}

  ngOnInit(): void {
    this.single = Object.keys(this.code).length === 1
  }

  copy(x:any){
    console.log(x)
    this.matSnackBar.open('Copied to clipboard', 'Done', {
      duration: 2000
    });
  }


}
