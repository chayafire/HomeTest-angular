import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationContactsComponent } from './concentration-contacts.component';

describe('ConcentrationContactsComponent', () => {
  let component: ConcentrationContactsComponent;
  let fixture: ComponentFixture<ConcentrationContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrationContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrationContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
