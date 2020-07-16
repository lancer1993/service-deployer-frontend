import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeploymentComponent } from './add-deployment.component';

describe('AddDeploymentComponent', () => {
  let component: AddDeploymentComponent;
  let fixture: ComponentFixture<AddDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
