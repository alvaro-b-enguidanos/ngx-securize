import { Component, OnInit } from '@angular/core';
import { SecurizeClass, SecurizeMethod } from 'ngx-securize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@SecurizeClass()
export class AppComponent implements OnInit {
  title = 'demo';

  constructor() {}

  ngOnInit(): void {
    this.say();
    this.say2('foo');
    this.say3('foo');
    this.say4('foo');
  }

  @SecurizeMethod(['read'])
  say() {
    console.log('hi!');
  }

  @SecurizeMethod(['write', 'delete'])
  say2(txt: string) {
    console.log('hi2!', txt);
  }

  @SecurizeMethod('write', {
    debug: true,
  })
  say3(txt: string) {
    console.log('h3!', txt, this.title);
  }

  @SecurizeMethod(['delete'], {
    debug: true,
  })
  say4(txt: string) {
    console.log('this should be not showed up!', txt);
  }
}
