import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphrdetailsComponent } from './emphrdetails.component';

describe('EmphrdetailsComponent', () => {
  let component: EmphrdetailsComponent;
  let fixture: ComponentFixture<EmphrdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmphrdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmphrdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
