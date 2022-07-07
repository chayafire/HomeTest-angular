import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationInformationProcessComponent } from './concentration-information-process.component';

describe('ConcentrationInformationProcessComponent', () => {
  let component: ConcentrationInformationProcessComponent;
  let fixture: ComponentFixture<ConcentrationInformationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrationInformationProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrationInformationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
