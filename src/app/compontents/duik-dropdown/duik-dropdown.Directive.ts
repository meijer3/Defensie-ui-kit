import { Component, Directive, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';



@Directive({
  selector: '[copDropdown]'
})

export class DropdownDirective {

  constructor(
    public templateRef: TemplateRef<unknown>,
  ) { }



}
