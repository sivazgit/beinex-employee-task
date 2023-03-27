import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpbyidComponent } from './empbyid.component';

describe('EmpbyidComponent', () => {
  let component: EmpbyidComponent;
  let fixture: ComponentFixture<EmpbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
