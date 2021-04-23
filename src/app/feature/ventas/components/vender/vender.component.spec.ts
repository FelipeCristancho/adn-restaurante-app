import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarComponent } from './vender.component';

describe('ComprarComponent', () => {
  
  let fixture: ComponentFixture<ComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarComponent);
    fixture.detectChanges();
  });

});
