import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDetailViewComponent } from './ingredient-detail-view.component';

describe('ParticipantsDetailViewComponent', () => {
  let component: IngredientDetailViewComponent;
  let fixture: ComponentFixture<IngredientDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientDetailViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
