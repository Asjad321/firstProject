import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user$: Object;
  constructor(private route: ActivatedRoute, private data: DataService,private spinner: NgxSpinnerService) {
     this.route.params.subscribe( userData => this.user$ = userData.id )
   }

  ngOnInit() {
      /** spinner starts on init */
      this.spinner.show();
      this.data.getUser(this.user$).subscribe(data => {
          this.user$ = data;
          this.spinner.hide();//hide the spinner if success
        },
        error => {this.spinner.hide();} //hide the spinner in case of error 
      );     
  }

}
