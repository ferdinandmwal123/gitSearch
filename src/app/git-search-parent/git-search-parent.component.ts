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

  user: User;
  repo: Repository;

  constructor(private gitrequestService: GitRequestService) {

  }

  ngOnInit() {
this.gitrequestService.detailRequest();
this.user = this.gitrequestService.user;
this.repo = this.gitrequestService.repo;

  }

}
