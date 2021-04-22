import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidefotosComponent } from './slidefotos.component';

describe('SlidefotosComponent', () => {
  let component: SlidefotosComponent;
  let fixture: ComponentFixture<SlidefotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidefotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidefotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
