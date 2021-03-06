import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {
users$: Object;
  constructor(private data: DataService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    this.data.getUsers().subscribe(data => {
        this.users$ = data;
      //  console.log("==============="+JSON.stringify(data));
        this.spinner.hide();//hide the spinner if success
      },
      error => { console.log('Errors!'); this.spinner.hide();} //hide the spinner in case of error
    );
  }

}
