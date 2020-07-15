import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTierComponent } from './service-tier.component';

describe('ServiceTierComponent', () => {
  let component: ServiceTierComponent;
  let fixture: ComponentFixture<ServiceTierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
