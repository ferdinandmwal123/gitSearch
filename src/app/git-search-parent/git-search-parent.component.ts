import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-search-parent',
  templateUrl: './git-search-parent.component.html',
  styleUrls: ['./git-search-parent.component.css']
})
export class GitSearchParentComponent implements OnInit {
  user: User;
  repo: Repository;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    interface ApiResponse {
      user: string;
      repo: string;
    }
    //this.http.get<ApiResponse>
  }

}
