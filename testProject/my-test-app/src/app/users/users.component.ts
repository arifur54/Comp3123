import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, of } from 'rxjs'; // <<--Observalbe (need to learn)

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() { //<<--Life Cycle Hooks (Do research) 
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )              // The code gets executed when a component loads 
  }

}
