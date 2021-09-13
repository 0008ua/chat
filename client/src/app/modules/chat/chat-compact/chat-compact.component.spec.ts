import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCompactComponent } from './chat-compact.component';

describe('ChatCompactComponent', () => {
  let component: ChatCompactComponent;
  let fixture: ComponentFixture<ChatCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
