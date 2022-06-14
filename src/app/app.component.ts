import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  url = window.location.href;
  myWindow = window;
  count = 5;
  result = 7 | 5;
  arr = new Array(1,2,3);
  cols = 2;
  inputId = 'hala';
  btnDisabled = false;
  isBlue = true;
  classes = 'border border-danger m-5 text-secondary';
  isSuccess = false;
  isBold = false;
  classObj = {
    'text-success': this.isSuccess,
    'text-danger': !this.isSuccess,
    'fw-bold': this.isBold
  };
  classesArray = [
    this.isBlue ? 'fw-bold' : ''
  ];
  backgroundColor = 'red';
  navStyle = 'font-size: 1.2rem; color: purple';
  linkStyle = 'underline';
  activeLinkStyle = 'overline';
  name = 'hala';


  greetUser(): string {
    console.log('inside greetUser');
    return 'welcome to Angular training';
  }

  onButtonClick(value: any): void{
    console.log(value);
  }

  onTitleUpdate(title: string): void {
    console.log('title updated', title);
  }
}
