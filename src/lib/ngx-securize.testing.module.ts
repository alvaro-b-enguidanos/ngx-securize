import { NgModule } from '@angular/core';
import { SecurizeModule } from './ngx-securize.module';
import { SECURIZE_ENV_TESTING } from './ngx-securize.constants';
import { SECURIZE_INJECTOR_ENV } from './ngx-securize.injector';

@NgModule({
  imports: [SecurizeModule.forRoot()],
  providers: [
    {
      provide: SECURIZE_INJECTOR_ENV,
      useValue: SECURIZE_ENV_TESTING,
    },
  ],
})
export class SecurizeTestingModule {}
