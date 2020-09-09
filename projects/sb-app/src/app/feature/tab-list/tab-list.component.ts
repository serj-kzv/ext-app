import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {

  title = 'app-tab-list';

  users: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.route.snapshot.data.users;
  }

}
