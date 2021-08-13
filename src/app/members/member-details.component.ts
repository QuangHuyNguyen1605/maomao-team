import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Member } from '../members';

@Component({
  selector: 'member-details',
  template: `
    <div>
      {{ member.firstName }} {{ member.lastName }}
      <button
        class="btn btn-info"
        style="margin-left: 1rem"
        (click)="select.emit(member)"
      >
        Select
      </button>
    </div>
  `
})
export class MemberDetailsComponent {
  @Input() member: Member;
  @Output() select = new EventEmitter<Member>();
}
