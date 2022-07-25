import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EightComponent } from '../eight/eight.component';
import { SevenComponent } from '../seven/seven.component';

import { ThreeComponent } from './three.component';

describe('ThreeComponent', () => {
  let component: ThreeComponent;
  let fixture: ComponentFixture<ThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ThreeComponent,
        SevenComponent,
        EightComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
