import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPrestationsComponent } from './pages-prestations.component';

describe('PagesPrestationsComponent', () => {
  let component: PagesPrestationsComponent;
  let fixture: ComponentFixture<PagesPrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesPrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
