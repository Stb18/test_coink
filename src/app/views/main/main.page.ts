import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  header_title: any;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.header_title = 'Main';
  }

  phoneRegister() {
    console.log('ENTROOOO');
    this.router.navigate(['/register-phone']);
  }

}
