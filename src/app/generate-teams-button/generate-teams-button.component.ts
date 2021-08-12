import { Component, OnInit } from '@angular/core';
import { Member, members } from '../members';

@Component({
  selector: 'app-generate-teams-button',
  templateUrl: './generate-teams-button.component.html',
  styleUrls: ['./generate-teams-button.component.css']
})
export class GenerateTeamsButtonComponent implements OnInit {
  members = members;
  team1: Member[] = [];
  team2: Member[] = [];
  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("before " + members.length);
    for (let counter: number = 0; counter < 11; counter++) {
      const randomId = Math.floor(Math.random() * (11 - counter)) + 1;
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
    this.team2.forEach((mem) => console.log(mem?.firstName));
  }
}
