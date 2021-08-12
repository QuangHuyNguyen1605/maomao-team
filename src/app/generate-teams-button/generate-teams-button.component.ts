import { Component, OnInit } from '@angular/core';
import { Member, members } from '../members';

@Component({
  selector: 'app-generate-teams-button',
  templateUrl: './generate-teams-button.component.html',
  styleUrls: ['./generate-teams-button.component.css']
})
export class GenerateTeamsButtonComponent implements OnInit {
  team1: Member[] = [];
  team2: Member[] = [];
  constructor() {}

  ngOnInit() {}

  onClick() {
    while (members.length > 0) {
      const randomId = Math.floor(Math.random() * members.length) + 1;
      if (this.team1.length <= 5) {
        let numOfFemale = this.team1.filter(mem => mem.gender === 'female')
          .length;
        if (members[randomId].gender === 'female' && numOfFemale > 3) {
          this.team2.push(members[randomId]);
        } else {
          this.team1.push(members[randomId]);
        }
      }
      members.forEach((mem, idx) => {
        if (mem.id === randomId) {
          members.splice(idx, 1);
        }
      });
    }
    console.log('team 1:' + this.team1);
    console.log('team 2:' + this.team2);
  }
}
