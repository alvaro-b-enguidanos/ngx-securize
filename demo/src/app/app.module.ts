import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SecurizeModule, SecurizeResolver, SecurizeAPI } from 'ngx-securize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';

const factory = (userService: UserService) => {
  const providedApi: SecurizeAPI = {
    check: (role: string | string[]) => userService.userHasRole(role),
  };
  return new SecurizeResolver(providedApi);
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecurizeModule.forRoot({
      useProvider: {
        provide: SecurizeResolver,
        useFactory: factory,
        deps: [UserService],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
