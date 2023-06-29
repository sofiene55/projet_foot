import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassemnetEquipesComponent } from './classemnet-equipes.component';

describe('ClassemnetEquipesComponent', () => {
  let component: ClassemnetEquipesComponent;
  let fixture: ComponentFixture<ClassemnetEquipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassemnetEquipesComponent]
    });
    fixture = TestBed.createComponent(ClassemnetEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
