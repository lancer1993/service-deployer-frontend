import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEnvironmentComponent } from './component-environment.component';

describe('ComponentEnvironmentComponent', () => {
  let component: ComponentEnvironmentComponent;
  let fixture: ComponentFixture<ComponentEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
