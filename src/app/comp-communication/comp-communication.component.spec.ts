import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCommunicationComponent } from './comp-communication.component';

describe('CompCommunicationComponent', () => {
  let component: CompCommunicationComponent;
  let fixture: ComponentFixture<CompCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompCommunicationComponent]
    });
    fixture = TestBed.createComponent(CompCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
