import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



// DUIK
import { MaterialModule } from '../mat.module';
import { DuikButtonComponent } from './duik-button/duik-button.component';
import { DuikDropdownComponent } from './duik-dropdown/duik-dropdown.component';
import { DuikPlusMinComponent } from './duik-plusmin/duik-plusmin.component';
import { DuikToggleComponent } from './duik-toggle/duik-toggle.component';


@NgModule({
  declarations: [
    DuikButtonComponent,
    DuikDropdownComponent,
    DuikToggleComponent,
    DuikPlusMinComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    DuikButtonComponent,
    DuikDropdownComponent,
    DuikToggleComponent,
    DuikPlusMinComponent,
  ],
})
export class DuikModule { }
