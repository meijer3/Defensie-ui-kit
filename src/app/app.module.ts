import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './core/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


// App

import { DuikModule } from './compontents/duik.module';
import { AppTypographyComponent } from './pages/app-typography/app-typography.component';
import { AppStylesComponent } from './pages/app-styles/app-styles.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { AppComponentsComponent } from './core/app-components/app-components.component';
import { AppButtonComponent } from './pages/app-button/app-button.component';
import { MaterialModule } from './mat.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppCodeComponent } from './core/app-code/app-code.component';
import { AppDropdownComponent } from './pages/app-dropdown/app-dropdown.component';
import { AppToggleComponent } from './pages/app-toggle/app-toggle.component';
import { FlexLayoutModule } from '@angular/flex-layout';

export const componentRoutes = [
  { path: 'button', component: AppButtonComponent, data: {name:'Button'} },
  { path: 'dropdown', component: AppDropdownComponent, data: {name:'Dropdown'}  },
  { path: 'toggle', component: AppToggleComponent, data: {name:'Toggle'}  },
]


const routes: Routes = [
  { path: '', redirectTo:'components' , pathMatch: 'full' },
  { path: 'typography', component: AppTypographyComponent },
  { path: 'styles', component: AppStylesComponent },
  { path: 'components', component: AppComponentsComponent,
    children: [
      { path: '', component: AppHomeComponent, pathMatch: 'full' },
      ...componentRoutes,
    ],
 },
  
]; 

@NgModule({
  declarations: [
    AppComponent,
    AppTypographyComponent,
    AppStylesComponent,
    AppHomeComponent,
    AppCodeComponent,

    AppComponentsComponent,
    AppDropdownComponent,
    AppButtonComponent,
    AppToggleComponent,
  ],
  imports: [
    MaterialModule,
    DuikModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HighlightModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
        themePath: 'assets/highlight/agate.css'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
