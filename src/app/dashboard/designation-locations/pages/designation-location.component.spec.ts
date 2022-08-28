import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationLocationComponent } from './designation-location.component';

describe('DesignationLocationComponent', () => {
  let component: DesignationLocationComponent;
  let fixture: ComponentFixture<DesignationLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignationLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
