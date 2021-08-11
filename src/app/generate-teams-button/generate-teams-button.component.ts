import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-teams-button',
  templateUrl: './generate-teams-button.component.html',
  styleUrls: ['./generate-teams-button.component.css']
})
export class GenerateTeamsButtonComponent implements OnInit {
  members = [
    {
      id: 1,
      firstName: 'Dieu Ly',
      lastName: 'Ninh',
      age: 26,
      gender: 'female'
    },
    {
      id: 2,
      firstName: 'Quang Huy',
      lastName: 'Nguyen',
      age: 27,
      gender: 'male'
    },
    {
      id: 3,
      firstName: 'Tuan Nghia',
      lastName: 'Luu',
      age: 26,
      gender: 'male'
    },
    {
      id: 4,
      firstName: 'Huu Giang',
      lastName: 'Nguyen',
      age: 27,
      gender: 'male'
    },
    {
      id: 5,
      firstName: 'Thi Dieu Linh',
      lastName: 'Vo',
      age: 26,
      gender: 'female'
    },
    {
      id: 6,
      firstName: 'Manh Cuong',
      lastName: 'Mai',
      age: 26,
      gender: 'male'
    },
    {
      id: 7,
      firstName: 'Hoang Hung',
      lastName: 'Do',
      age: 29,
      gender: 'male'
    },
    {
      id: 8,
      firstName: 'Huong Thu',
      lastName: 'Nguyen',
      age: 25,
      gender: 'female'
    },
    {
      id: 9,
      firstName: 'Hong Anh',
      lastName: 'Duong',
      age: 26,
      gender: 'female'
    },
    {
      id: 10,
      firstName: 'Quang Tuan',
      lastName: 'Nguyen',
      age: 26,
      gender: 'male'
    },
    {
      id: 11,
      firstName: 'Nguoi yeu',
      lastName: 'Tuan',
      age: 24,
      gender: 'female'
    }
  ];
  team1 = [];
  team2 = [];
  constructor() {}

  ngOnInit() {}

  onClick() {
    while (this.members.length > 0) {
      let randomId = Math.floor(Math.random() * this.members.length) + 1;
      if (this.team1.length <= 5) {
        let numOfFemale = this.team1.filter(mem => mem.gender === 'female')
          .length;
        if (this.members[randomId].gender === 'female' && numOfFemale > 3) {
          this.team2.push(this.members[randomId]);
        } else {
          this.team1.push(this.members[randomId]);
        }
      }
    }
    console.log('team 1:' + this.team1);
    console.log('team 2:' + this.team2);
  }
}
