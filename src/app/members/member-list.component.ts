import { Component, Input } from '@angular/core';
import { Member, members } from '../members';

@Component({
  selector: 'member-list',
  template: `
    <button (click)="onClick()">Generate 2 teams</button>
    <h1>Hello Team1!</h1>
    <member-details *ngFor="let mem of team1" [member]="mem"></member-details>
    <br>
    <h1>Hello Team2!</h1>
    <member-details *ngFor="let mem of team2" [member]="mem"></member-details>
    <br>
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
        //console.log(mem.id)
        return mem.id !== this.members[randomId]?.id;
      });
      
      //console.log("after " + members.length);
    }
    console.log(this.members.length);
    this.team1.forEach((mem) => console.log(mem?.firstName));
    console.log("---------------------");
    this.team2.forEach((mem) => console.log(mem?.firstName));
  }
}
