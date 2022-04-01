import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
import { componentRoutes } from '../../app.module';


@Component({
  selector: 'app-components',
  templateUrl: './app-components.component.html',
  styleUrls: ['./app-components.component.scss']
})
export class AppComponentsComponent implements OnInit {

  title$ = new BehaviorSubject('main')

  items = [
    ...componentRoutes,
  ]
  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.init()
  }

  cleanName = (componentName:string) => componentName.replace('App','').replace('Component','')


  init(){
    this.title$.next(this.activatedRoute.snapshot.data['name'])
    this.router
        .events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          map(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
              if (child.firstChild) {
                child = child.firstChild;
              } else if (child.snapshot.data && child.snapshot.data['name']) {
                return child.snapshot.data['name'];
              } else {
                return ;
              }
            }
            return;
          }),
        )
        .subscribe( (name: string) => {
          this.title$.next(name)
       });
  }
}
