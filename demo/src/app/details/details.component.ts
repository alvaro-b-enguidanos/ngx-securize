import { Component, OnInit } from '@angular/core';
import { SecurizeClass, SecurizeMethod } from 'ngx-securize';

@Component({
  selector: 'app-details',
  template: `<div>welcome!!!</div>`,
})
@SecurizeClass()
export class DetailsComponent implements OnInit {
  ngOnInit() {
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
    console.log('h3!', txt);
  }

  @SecurizeMethod(['read'], {
    debug: true,
  })
  say4(txt: string) {
    console.log('this should be not showed up!', txt);
  }
}
