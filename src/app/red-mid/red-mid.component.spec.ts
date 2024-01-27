import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedMidComponent } from './red-mid.component';

describe('RedMidComponent', () => {
  let component: RedMidComponent;
  let fixture: ComponentFixture<RedMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedMidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
