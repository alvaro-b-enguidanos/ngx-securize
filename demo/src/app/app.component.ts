import { Component } from '@angular/core';
import { SecurizeClass } from 'ngx-securize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@SecurizeClass()
export class AppComponent {}
