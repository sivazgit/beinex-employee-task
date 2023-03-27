import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GchartComponent } from './gchart.component';

describe('GchartComponent', () => {
  let component: GchartComponent;
  let fixture: ComponentFixture<GchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
