import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSerductComponent } from './edit-serduct.component';

describe('EditSerductComponent', () => {
  let component: EditSerductComponent;
  let fixture: ComponentFixture<EditSerductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSerductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSerductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
