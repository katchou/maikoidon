import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentairesClientComponent } from './commentaires-client.component';

describe('CommentairesClientComponent', () => {
  let component: CommentairesClientComponent;
  let fixture: ComponentFixture<CommentairesClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentairesClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentairesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
