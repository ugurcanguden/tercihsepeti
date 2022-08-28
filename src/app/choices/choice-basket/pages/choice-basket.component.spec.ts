import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceBasketComponent } from './choice-basket.component';

describe('ChoiceBasketComponent', () => {
  let component: ChoiceBasketComponent;
  let fixture: ComponentFixture<ChoiceBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
