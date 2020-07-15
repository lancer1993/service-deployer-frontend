import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseInformationComponent } from './release-information.component';

describe('ReleaseInformationComponent', () => {
  let component: ReleaseInformationComponent;
  let fixture: ComponentFixture<ReleaseInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
