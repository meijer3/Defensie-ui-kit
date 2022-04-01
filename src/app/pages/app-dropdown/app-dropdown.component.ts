import { Component, Renderer2 } from '@angular/core';
import { AppService, Themes } from 'src/app/core/app.service';


@Component({
  selector: 'app-dropdown-component',
  templateUrl: './app-dropdown.component.html',
})
export class AppDropdownComponent  {

  constructor(
    private renderer: Renderer2,
    private appService: AppService,
  ){}

  theme = this.appService.theme
  themes = Object.values(Themes)
  themesEnum = Themes

  codeblock1 = {
    html: `
<cop-dropdown
  [items]="gmsCommandos"
  [(selected)]="selectedGmsCommandos"
  #dopdownText
>
  <ng-template copDropdown let-item>
    {{ item }}
  </ng-template>
</cop-dropdown>
            `,
            js:`
import {Component} from '@angular/core';
@Component({
  selector: 'example',
  templateUrl: 'example.html',
})
export class Example {
  theme = Themes.kmar
  themes = Object.values(Themes)
}
          `

  }

  ngOnInit() {
    this.updateFontsize(this.appService.fontsize)
    this.updateTheme(this.appService.theme)
  }

  updateTheme(theme: Themes) {
    this.appService.theme = theme
    this.theme = theme
    this.themes.forEach(theme => this.renderer.removeClass(document.body, theme));
    this.renderer.addClass(document.body, this.appService.theme)
  }
  updateFontsize(size: number){
    this.appService.fontsize = size
    this.renderer.setStyle(document.body, 'font-size', this.appService.fontsize + 'px');
  }
}