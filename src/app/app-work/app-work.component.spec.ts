import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWorkComponent } from './app-work.component';

describe('AppWorkComponent', () => {
  let component: AppWorkComponent;
  let fixture: ComponentFixture<AppWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
