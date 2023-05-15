import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCategorieComponent } from './sales-by-categorie.component';

describe('SalesByCategorieComponent', () => {
  let component: SalesByCategorieComponent;
  let fixture: ComponentFixture<SalesByCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesByCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
