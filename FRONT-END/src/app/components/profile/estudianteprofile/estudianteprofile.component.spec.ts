import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteprofileComponent } from './estudianteprofile.component';

describe('EstudianteprofileComponent', () => {
  let component: EstudianteprofileComponent;
  let fixture: ComponentFixture<EstudianteprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
