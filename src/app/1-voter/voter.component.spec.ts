import {ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoterComponent } from './voter.component';
import {el} from '@angular/platform-browser/testing/src/browser_util';

describe('VoterComponent', () => {
  let fixture: ComponentFixture<VoterComponent>;
  let component: VoterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;

    // fixture.nativeElement
    // fixture.debugElement
  });

  it('should render totalVotes properly', () => {
    component.othersVote = 10;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const elem: HTMLElement = de.nativeElement;

    expect(elem.innerText).toContain('11');
  });

  it('should highlight upvote button if myUpvote equals 1', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should increment totalVotes when click upvote button', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
