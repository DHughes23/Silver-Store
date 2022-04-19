import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarchesComponent } from './starches.component';

describe('StarchesComponent', () => {
  let component: StarchesComponent;
  let fixture: ComponentFixture<StarchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
