import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerductDetailComponent } from './serduct-detail.component';

describe('SerductDetailComponent', () => {
  let component: SerductDetailComponent;
  let fixture: ComponentFixture<SerductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
