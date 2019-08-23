import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitRequestService {

  user: User;
  repo: Repository;

  constructor(private http: HttpClient) {
    this.user = new User ('');
    this.repo = new Repository('');
  }
  detailRequest() {
    interface ApiResponse {
      user: string;
      repo: string;
     }
    const promiseUser = new Promise((resolve, reject) => {
       this.http.get<ApiResponse>(environment.apiUrlUser, ).toPromise().then(response => {
 this.user.user = response.user;
 resolve();
       },
       error => {
         this.user.user = 'ferdinandmwal123';
         reject(error);
       }
       );
     });
    const promiseRepository = new Promise ((resolve, reject) => {
       this.http.get<ApiResponse>(environment.apiUrlRepository).toPromise().then(response => {
         this.repo.repository =  response.repo;

         resolve();
       }, error => {
         this.repo.repository = 'Quotes';

         reject(error);
       });
       return promiseRepository;
     });
    return promiseUser;

  }


}
