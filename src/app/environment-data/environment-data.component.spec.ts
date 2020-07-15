import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentDataComponent } from './environment-data.component';

describe('EnvironmentDataComponent', () => {
  let component: EnvironmentDataComponent;
  let fixture: ComponentFixture<EnvironmentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
