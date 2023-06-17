import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriEventComponent } from './inscri-event.component';

describe('InscriEventComponent', () => {
  let component: InscriEventComponent;
  let fixture: ComponentFixture<InscriEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
