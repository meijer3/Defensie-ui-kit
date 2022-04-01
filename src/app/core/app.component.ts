import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { AppService, Themes } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{

  constructor(
    private renderer: Renderer2,
    private appService: AppService,
  ){}

  themes = Object.values(Themes)

  ngOnInit() {
    this.appService.update$.subscribe(()=>{
      this.themes.forEach(theme => this.renderer.removeClass(document.body, theme));
      this.renderer.addClass(document.body, this.appService.theme)
      this.renderer.setStyle(document.body, 'font-size', this.appService.fontsize + 'px');
    })
    this.updateTheme(this.appService.theme)
  }


  updateTheme(theme: Themes) {
    this.appService.theme = theme
    this.appService.update()
  }

}

