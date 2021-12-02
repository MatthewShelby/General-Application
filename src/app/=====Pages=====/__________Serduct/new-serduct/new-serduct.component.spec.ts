import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSerductComponent } from './new-serduct.component';

describe('NewSerductComponent', () => {
  let component: NewSerductComponent;
  let fixture: ComponentFixture<NewSerductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSerductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSerductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
