import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConfigurateurComponent } from './liste-configurateur.component';

describe('ListeConfigurateurComponent', () => {
  let component: ListeConfigurateurComponent;
  let fixture: ComponentFixture<ListeConfigurateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeConfigurateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeConfigurateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
