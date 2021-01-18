import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGoodComponent } from './bookGood.component';

describe('BooksComponent', () => {
  let component: BookGoodComponent;
  let fixture: ComponentFixture<BookGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
