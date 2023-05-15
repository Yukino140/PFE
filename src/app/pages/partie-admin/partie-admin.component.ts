import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-partie-admin',
  styles: [
    `
      .content-container {
        min-height: 100vh;
        box-sizing: border-box;
        padding: 25px;
      }
    `,
  ],
  templateUrl: './partie-admin.component.html',
  styleUrls: ['./partie-admin.component.scss']
})
export class PartieAdminComponent implements OnInit {
  constructor( private router:Router) { }

  ngOnInit(): void {

  }
  public isSidebarOpen = true;
  open(){
    if(this.isSidebarOpen==true)
      this.isSidebarOpen = false
    else
    this.isSidebarOpen = true

  }
  toClient(){
    this.router.navigate(['client/main'])
  }

}
