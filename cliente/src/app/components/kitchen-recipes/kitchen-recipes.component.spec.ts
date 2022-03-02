import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenRecipesComponent } from './kitchen-recipes.component';

describe('KitchenRecipesComponent', () => {
  let component: KitchenRecipesComponent;
  let fixture: ComponentFixture<KitchenRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
