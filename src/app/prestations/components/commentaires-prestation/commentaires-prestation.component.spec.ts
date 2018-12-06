import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentairesPrestationComponent } from './commentaires-prestation.component';

describe('CommentairesPrestationComponent', () => {
  let component: CommentairesPrestationComponent;
  let fixture: ComponentFixture<CommentairesPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentairesPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentairesPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
