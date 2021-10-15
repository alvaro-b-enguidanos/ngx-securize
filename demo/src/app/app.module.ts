import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NGXSecurizeModule, NGXSecurizeResolver, NGXSecurizeAPI } from 'ngx-securize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';

const factory = (userService: UserService) => {
  const providedApi: NGXSecurizeAPI = {
    check: (role: string | string[]) => userService.userHasRole(role),
  };
  return new NGXSecurizeResolver(providedApi);
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NGXSecurizeModule.forRoot({
    //   useProvider: {
    //     provide: NGXSecurizeResolver,
    //     useFactory: factory,
    //     deps: [UserService],
    //   },
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
