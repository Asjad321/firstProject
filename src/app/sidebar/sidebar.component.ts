import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart,NavigationError, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;
  startUrl: string;

  constructor(private router: Router) {   
    router.events.subscribe((lastSegment: NavigationEnd) =>{
      this.currentUrl = this.router.url;
    });      
  }
  
  ngOnInit() {
  }

}
