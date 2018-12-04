import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesClientsComponent } from './pages-clients.component';

describe('PagesClientsComponent', () => {
  let component: PagesClientsComponent;
  let fixture: ComponentFixture<PagesClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
