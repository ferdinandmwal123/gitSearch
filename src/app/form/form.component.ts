import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GitRequestService } from '../gitSearch-http/git-request.service';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
searchUsers = true;
user: User;
repo: Repository;
username: string;
  constructor(public gitrequestService: GitRequestService) {
  }

  getProfile() {
     this.gitrequestService.getUsername(this.username);

     this.gitrequestService.getUser();
     this.user = this.gitrequestService.user;

     this.gitrequestService.getRepos(this.username);
     this.repo = this.gitrequestService.repo;
     console.log(this.username);

  }
  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }

  ngOnInit() {
    this.gitrequestService.getUser();
    this.user = this.gitrequestService.user;

    this.gitrequestService.getRepos(this.username);
    this.repo = this.gitrequestService.repo;
  }

}
