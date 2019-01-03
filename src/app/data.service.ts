import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private envAddress: EnvironmentUrlService ){
  }
  getUsers() {   
  //  return this.http.get('https://jsonplaceholder.typicode.com/users') 
    return this.http.get(this.createCompleteRoute("userApi.php", this.envAddress.envUrl))
  }

  getUser(userId) {
   // this.http.get('https://jsonplaceholder.typicode.com/users/'+userId).subscribe(asjad => console.log(asjad));
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getPost(postId) {
    // this.http.get('https://jsonplaceholder.typicode.com/posts/'+postId).subscribe(asjad => console.log(asjad));
     return this.http.get('https://jsonplaceholder.typicode.com/posts/'+postId)
   }

   private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }
}
