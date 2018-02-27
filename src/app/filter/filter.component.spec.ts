import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterComponent} from './filter.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [FilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should disabled if empty form', () => {
    // component.filterForm.controls['magasin'].setValue('');
   // expect(component.filterForm.valid).toBeFalsy();
  });

  it('input should set to "decat 1"  ', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input#magasin').value).toContain('decat');
  });


  it('User can display current day report', () => {
    // test
  });

  it('User can filter by store', () => {
    // test
  });

  it('User can filter by day', () => {
    // test
  });

  it('User can filter by period', () => {
    // test
  });

  it('User can display error message if unreachable database', () => {
    // test
  });

  it('User can display a report with missing datas', () => {
    // test
  });

});

