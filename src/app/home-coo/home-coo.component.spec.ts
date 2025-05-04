import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCooComponent } from './home-coo.component';

describe('HomeCooComponent', () => {
  let component: HomeCooComponent;
  let fixture: ComponentFixture<HomeCooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCooComponent]
    });
    fixture = TestBed.createComponent(HomeCooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
