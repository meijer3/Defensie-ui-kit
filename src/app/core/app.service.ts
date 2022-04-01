import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export enum Themes{
  kmar = 'theme-kmar',
  eodd = 'theme-eodd',
}

@Injectable({
  providedIn: 'root',
 })
 export class AppService {

  update$ = new Subject<void>();
  fontsize = 18;
  theme = Themes.kmar

  constructor(
  ){}

  update(){
    this.update$.next()
  }

 }