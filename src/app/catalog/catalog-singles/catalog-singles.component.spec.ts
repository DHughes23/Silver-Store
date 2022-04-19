import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSinglesComponent } from './catalog-singles.component';

describe('CatalogSinglesComponent', () => {
  let component: CatalogSinglesComponent;
  let fixture: ComponentFixture<CatalogSinglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogSinglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSinglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
