import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent implements OnInit {
  post$: Object;
  constructor(private route: ActivatedRoute, private data: DataService,private spinner: NgxSpinnerService) {
     this.route.params.subscribe( postData => this.post$ = postData.id )
   }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    this.data.getPost(this.post$).subscribe(data => {
      this.post$ = data;
      this.spinner.hide();//hide the spinner if success
    },
    error => {this.spinner.hide();} //hide the spinner in case of error
    );
  }

}
