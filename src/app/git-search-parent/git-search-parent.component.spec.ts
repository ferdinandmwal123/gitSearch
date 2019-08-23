import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchParentComponent } from './git-search-parent.component';

describe('GitSearchParentComponent', () => {
  let component: GitSearchParentComponent;
  let fixture: ComponentFixture<GitSearchParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
