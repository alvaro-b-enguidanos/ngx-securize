import { Component, OnInit } from '@angular/core';
import { NGXSecurizeClass, NGXSecurizeMethod } from 'ngx-securize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@NGXSecurizeClass()
export class AppComponent implements OnInit {
  title = 'demo';

  constructor() {}

  ngOnInit(): void {
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
    console.log('h3!', txt, this.title);
  }

  @NGXSecurizeMethod(['delete'], {
    debug: true,
  })
  say4(txt: string) {
    console.log('this should be not showed up!', txt);
  }
}
