import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerductCardComponent } from './serduct-card.component';

describe('SerductCardComponent', () => {
  let component: SerductCardComponent;
  let fixture: ComponentFixture<SerductCardComponent>;

  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      declarations: [ SerductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
