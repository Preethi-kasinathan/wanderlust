import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorgComponent } from './coorg.component';

describe('CoorgComponent', () => {
  let component: CoorgComponent;
  let fixture: ComponentFixture<CoorgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoorgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
