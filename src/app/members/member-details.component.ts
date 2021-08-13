import { Component, Input } from '@angular/core';
import { Member } from '../members';

@Component({
  selector: 'member-details',
  template: `
    <div>{{ member.firstName }} {{ member.lastName }}</div>
  `
})
export class MemberDetailsComponent {
  @Input() member: Member;
}
