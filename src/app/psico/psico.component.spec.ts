import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicoComponent } from './psico.component';

describe('PsicoComponent', () => {
  let component: PsicoComponent;
  let fixture: ComponentFixture<PsicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
