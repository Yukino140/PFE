import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieClientComponent } from './partie-client.component';

describe('PartieClientComponent', () => {
  let component: PartieClientComponent;
  let fixture: ComponentFixture<PartieClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartieClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartieClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
