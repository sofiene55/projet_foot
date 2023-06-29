import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJoueursComponent } from './list-joueurs.component';

describe('ListJoueursComponent', () => {
  let component: ListJoueursComponent;
  let fixture: ComponentFixture<ListJoueursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListJoueursComponent]
    });
    fixture = TestBed.createComponent(ListJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
