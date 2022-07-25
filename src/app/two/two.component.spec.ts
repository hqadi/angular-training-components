import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiveComponent } from '../five/five.component';
import { FourComponent } from '../four/four.component';

import { TwoComponent } from './two.component';

describe('TwoComponent', () => {
  let component: TwoComponent;
  let fixture: ComponentFixture<TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TwoComponent,
        FourComponent,
        FiveComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
