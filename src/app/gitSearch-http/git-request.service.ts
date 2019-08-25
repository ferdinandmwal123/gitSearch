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
    this.userName = 'ferdinandmwal123';
  }
  detailRequest() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      html_url: string;
      name: string;
      public_repos: number;
      followers: number;
      following: number;
     }
    const promiseUser = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '?access_token=' + this.apiKey).toPromise()
      .then(response => {
this.user.login = response.login;
this.user.avatar_url = response.avatar_url;
this.user.html_url = response.html_url;
this.user.name = response.name;
this.user.followers = response.followers;
this.user.following = response.following;
this.user.public_repos = response.public_repos;
resolve();
      },
      error => {
        // this.login.login = 'ferdinandmwal123';
        reject(error);
    });
  });
    return promiseUser;
  }

  getRepos(username) {

    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
    }

    const promiseUser = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrlUser + this.userName + '/repos?access_token' + environment.apiKey).toPromise()
      .then(response => {
        this.repo.repo = response;
      }, error => {
        reject (error);
      });
    });
    return promiseUser;
  }

  getUsernamen(username: string) {
    this.userName = username;
  }

   /*  this.login = new User ('');
    this.repo = new Repository('');
  }


    // tslint:disable-next-line: prefer-const

       }
       );
     });
    // tslint:disable-next-line: prefer-const


         resolve();
       }, error => {
         this.repo.repository = 'Quotes';

         reject(error);
         return promiseRepository;
       });

     });
    return promiseLogin;

  } */



}
