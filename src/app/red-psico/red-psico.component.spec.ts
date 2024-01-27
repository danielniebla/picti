import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedPsicoComponent } from './red-psico.component';

describe('RedPsicoComponent', () => {
  let component: RedPsicoComponent;
  let fixture: ComponentFixture<RedPsicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedPsicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedPsicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
