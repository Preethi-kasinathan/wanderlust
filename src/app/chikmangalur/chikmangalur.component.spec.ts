import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChikmangalurComponent } from './chikmangalur.component';

describe('ChikmangalurComponent', () => {
  let component: ChikmangalurComponent;
  let fixture: ComponentFixture<ChikmangalurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChikmangalurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChikmangalurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
