import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecComponent } from './direc.component';

describe('DirecComponent', () => {
  let component: DirecComponent;
  let fixture: ComponentFixture<DirecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirecComponent]
    });
    fixture = TestBed.createComponent(DirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
