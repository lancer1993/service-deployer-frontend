import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReleaseComponent } from './edit-release.component';

describe('EditReleaseComponent', () => {
  let component: EditReleaseComponent;
  let fixture: ComponentFixture<EditReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
