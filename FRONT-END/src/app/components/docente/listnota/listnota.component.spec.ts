import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnotaComponent } from './listnota.component';

describe('ListnotaComponent', () => {
  let component: ListnotaComponent;
  let fixture: ComponentFixture<ListnotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
