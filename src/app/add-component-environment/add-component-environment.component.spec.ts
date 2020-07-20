import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentEnvironmentComponent } from './add-component-environment.component';

describe('AddComponentEnvironmentComponent', () => {
  let component: AddComponentEnvironmentComponent;
  let fixture: ComponentFixture<AddComponentEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponentEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
