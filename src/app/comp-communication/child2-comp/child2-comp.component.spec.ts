import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2CompComponent } from './child2-comp.component';

describe('Child2CompComponent', () => {
  let component: Child2CompComponent;
  let fixture: ComponentFixture<Child2CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child2CompComponent]
    });
    fixture = TestBed.createComponent(Child2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
