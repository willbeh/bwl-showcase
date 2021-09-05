import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConstrainedGridComponent } from './layout-constrained-grid.component';

describe('LayoutConstrainedGridComponent', () => {
  let component: LayoutConstrainedGridComponent;
  let fixture: ComponentFixture<LayoutConstrainedGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutConstrainedGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutConstrainedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
