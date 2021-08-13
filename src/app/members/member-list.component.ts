import { Component, Input } from '@angular/core';
import { Member, members } from '../members';

@Component({
  selector: 'member-list',
  template: `
    <button class="btn btn-primary" (click)="onClick()" [disabled]="hasGenerated">Generate 2 teams</button>
    <p>
    <div *ngIf="hasGenerated">
      <h2>Hello Team1</h2>
      <ul class="list-group" *ngFor="let mem of team1">
        <li class="list-group-item">
          <member-details [member]="mem" (select)="onSelected($event)"></member-details>
        </li>
      </ul>
    </div> 
    <br>
    <div *ngIf="hasGenerated">
      <h2>Hello Team2</h2>
      <ul class="list-group" *ngFor="let mem of team2">
        <li class="list-group-item">
          <member-details [member]="mem" (select)="onSelected($event)"></member-details>
        </li>
      </ul>
    </div>
    <br>
    <div>
      <p class="fst-normal">
        Current selected member: {{ currentMember?.lastName }} {{ currentMember?.firstName }}
        <br>
        Age: {{ currentMember?.age }}
        <br>
        Gender: {{ currentMember?.gender }}
      </p>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class MemberListComponent {
  hasGenerated: boolean = false;
  currentMember: Member;
  members = members;
  team1: Member[] = [];
  team2: Member[] = [];
  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("before " + members.length);
    for (let counter: number = 1; counter < 12; counter++) {
      const randomId = Math.floor(Math.random() * (11 - counter));
      console.log("randomMem " + this.members[randomId]?.firstName);
      if (this.team1.length <= 5) {
        let numOfFemale = this.team1.filter(mem => mem?.gender === 'female')
          .length;
        if (this.members[randomId]?.gender === 'female' && numOfFemale > 2) {
          this.team2.push(this.members[randomId]);
        } else {
          this.team1.push(this.members[randomId]);
        }
      } else {
        this.team2.push(this.members[randomId]);
      }
      this.members = this.members.filter(mem => {
        return mem.id !== this.members[randomId]?.id;
      });
      this.hasGenerated = true;
    }
    //console.log(this.members.length);
    //this.team1.forEach((mem) => console.log(mem?.firstName));
    //console.log("---------------------");
    //this.team2.forEach((mem) => console.log(mem?.firstName));
  }

  onSelected(selectedMember: Member) {
    this.currentMember = selectedMember;
  }
}
