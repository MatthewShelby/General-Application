import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BEUComponent } from './beu.component';

describe('BEUComponent', () => {
  let component: BEUComponent;
  let fixture: ComponentFixture<BEUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BEUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BEUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
