import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';
import { GitRequestService } from '../gitSearch-http/git-request.service';


@Component({
  selector: 'app-git-search-parent',
  templateUrl: './git-search-parent.component.html',
  styleUrls: ['./git-search-parent.component.css']
})
export class GitSearchParentComponent implements OnInit {

    searchUsers = true;
  login: User;
  repo: Repository;
   username: string;

  constructor(public gitrequestService: GitRequestService, ) {

  }
   /* getProfile() {
    this.gitrequestService.getUsername(this.username);
    this.gitrequestService.getUser();
    this.login=this.gitrequestService.user;

    this.gitrequestService.getRepos(this.username);
    this.repo = this.gitrequestService.repo;
    console.log(this.repo);
  } */

  /* notSearch(){
    this.searchUsers = !this.searchUsers;
  }
  */

  ngOnInit() {

 this.gitrequestService.getUser();
 this.login = this.gitrequestService.user;

 this.gitrequestService.getRepos(this.username);
 this.repo = this.gitrequestService.repo;

  }



}
