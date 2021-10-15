import { Component, OnInit } from '@angular/core';
import { NGXSecurizeClass, NGXSecurizeMethod } from 'ngx-securize';

@Component({
  selector: 'app-details',
  template: `<div>welcome!!!</div>`,
})
@NGXSecurizeClass()
export class DetailsComponent implements OnInit {
  ngOnInit() {
    this.say();
    this.say2('foo');
    this.say3('foo');
    this.say4('foo');
  }

  @NGXSecurizeMethod(['read'])
  say() {
    console.log('hi!');
  }

  @NGXSecurizeMethod(['write', 'delete'])
  say2(txt: string) {
    console.log('hi2!', txt);
  }

  @NGXSecurizeMethod('write', {
    debug: true,
  })
  say3(txt: string) {
    console.log('h3!', txt);
  }

  @NGXSecurizeMethod(['read'], {
    debug: true,
  })
  say4(txt: string) {
    console.log('this should be not showed up!', txt);
  }
}
