import {  Component, OnInit } from '@angular/core';
import { AppService, Themes } from 'src/app/core/app.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  themesEnum = Themes
  themesArray = Object.values(Themes)

  lineValue = 'This is a single line input'
  textValue = 'This is a multi line input'


  get fontsize(){
    return this.appService.fontsize
  }
  set fontsize(x){
    this.appService.fontsize = x
    this.appService.update()
  }

  get theme(){
    return this.appService.theme
  }
    
  set updateTheme(theme: Themes) {
    console.log(theme)
    this.appService.theme = theme
    this.appService.update()
  }

  booleanFlag = true;
  
  constructor(
    public appService:AppService,
  ) { }

  ngOnInit(): void {
  }

}
