import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EightComponent } from '../eight/eight.component';
import { FiveComponent } from '../five/five.component';
import { FourComponent } from '../four/four.component';
import { SevenComponent } from '../seven/seven.component';
import { SixComponent } from '../six/six.component';
import { ThreeComponent } from '../three/three.component';
import { TwoComponent } from '../two/two.component';

import { OneComponent } from './one.component';

describe('OneComponent', () => {
  let component: OneComponent;
  let fixture: ComponentFixture<OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OneComponent,
        TwoComponent,
        ThreeComponent,
        FourComponent,
        FiveComponent,
        SixComponent,
        SevenComponent,
        EightComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
