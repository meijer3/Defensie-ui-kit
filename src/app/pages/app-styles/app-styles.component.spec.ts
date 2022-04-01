import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStylesComponent } from './app-styles.component';

describe('AppStylesComponent', () => {
  let component: AppStylesComponent;
  let fixture: ComponentFixture<AppStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
