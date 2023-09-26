import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyTestComponent } from './typography-test.component';

describe('TypographyTestComponent', () => {
  let component: TypographyTestComponent;
  let fixture: ComponentFixture<TypographyTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypographyTestComponent]
    });
    fixture = TestBed.createComponent(TypographyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
