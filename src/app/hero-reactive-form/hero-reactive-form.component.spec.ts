import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroReactiveFormComponent } from './hero-reactive-form.component';

describe('HeroReactiveFormComponent', () => {
  let component: HeroReactiveFormComponent;
  let fixture: ComponentFixture<HeroReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
