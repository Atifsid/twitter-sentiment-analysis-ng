import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkullcandyComponent } from './skullcandy.component';

describe('SkullcandyComponent', () => {
  let component: SkullcandyComponent;
  let fixture: ComponentFixture<SkullcandyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkullcandyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkullcandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
