import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteprofileComponent } from './docenteprofile.component';

describe('DocenteprofileComponent', () => {
  let component: DocenteprofileComponent;
  let fixture: ComponentFixture<DocenteprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
