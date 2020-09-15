import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarestudianteComponent } from './navbarestudiante.component';

describe('NavbarestudianteComponent', () => {
  let component: NavbarestudianteComponent;
  let fixture: ComponentFixture<NavbarestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
