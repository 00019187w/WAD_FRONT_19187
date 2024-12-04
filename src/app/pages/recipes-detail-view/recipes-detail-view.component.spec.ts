import { ComponentFixture, TestBed } from '@angular/core/testing';

import { recipesDetailViewComponent } from './recipes-detail-view.component';

describe('recipesDetailViewComponent', () => {
  let component: recipesDetailViewComponent;
  let fixture: ComponentFixture<recipesDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [recipesDetailViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(recipesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
