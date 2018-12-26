import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;
  constructor(private data: DataService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    this.data.getPosts().subscribe(data => {
        this.posts$ = data;
        this.spinner.hide();//hide the spinner if success
      },
      error => {this.spinner.hide();} //hide the spinner in case of error       
    );
  }

}
