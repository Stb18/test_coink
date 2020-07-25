import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-phone',
  templateUrl: './register-phone.page.html',
  styleUrls: ['./register-phone.page.scss'],
})
export class RegisterPhonePage implements OnInit {

  header_title: any;

  constructor() { }

  ngOnInit() {
    this.header_title = 'número celular';
  }

  cambiarColor() {
    document.getElementById('path-svg').classList.add('path-svg');
  }

}
