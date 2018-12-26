import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){    
  }
  getUsers() {
  //  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(asjad => console.log(asjad));
    return this.http.get('https://jsonplaceholder.typicode.com/users')
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
}
