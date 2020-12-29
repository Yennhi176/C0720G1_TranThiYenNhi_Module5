import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NangCapHackernewsComponent } from './nang-cap-hackernews.component';

describe('NangCapHackernewsComponent', () => {
  let component: NangCapHackernewsComponent;
  let fixture: ComponentFixture<NangCapHackernewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NangCapHackernewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NangCapHackernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
