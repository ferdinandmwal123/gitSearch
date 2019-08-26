import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class GitRequestService {

   user: User;
  repo: Repository;
  private userName: string;

  apiKey = environment.apiKey;
  baseUrl = environment.apiUrlUser;

  constructor(private http: HttpClient) {
    this.user = new User ('', '', '', '', 0, 0, 0);
    this.repo = new Repository ('', '', '');
    this.userName = 'Nathan-Kimutai';
  }
  getUser() {

    interface ApiResponse {
       login: string;
      avatar_url: string;
      html_url: string;
      name: string;
      public_repos: number;
      followers: number;
      following: number;

     }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '?access_token=' + this.apiKey).toPromise()
      .then(res => {
this.user.login = res.login;
this.user.avatar_url = res.avatar_url;
this.user.html_url = res.html_url;
this.user.name = res.name;
this.user.followers = res.followers;
this.user.following = res.following;
this.user.public_repos = res.public_repos;

resolve();
      },
      error => {
                 this.user.login = 'ferdinandmwal123';
                 reject(error);
    });
  });
    return promise;
  }

    getRepos(username) {

    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + this.apiKey).toPromise()
      .then(res => {
        this.repo.repo = res;
      }, error => {
        reject (error);
      });
    });
    return promise;
  }

   getUsername(username: string) {
    this.userName = username;

  }



}
