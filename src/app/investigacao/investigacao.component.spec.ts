import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacaoComponent } from './investigacao.component';

describe('InvestigacaoComponent', () => {
  let component: InvestigacaoComponent;
  let fixture: ComponentFixture<InvestigacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
