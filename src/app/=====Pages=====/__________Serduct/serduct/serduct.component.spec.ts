import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerductComponent } from './serduct.component';

describe('SerductComponent', () => {
  let component: SerductComponent;
  let fixture: ComponentFixture<SerductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
