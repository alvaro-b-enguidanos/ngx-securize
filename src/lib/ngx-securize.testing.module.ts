import { NgModule } from '@angular/core';
import { NGXSecurizeModule } from './ngx-securize.module';
import { NGXSecurizeEnvTesting } from './ngx-securize.constants';
import { NGXSecurizeInjectorEnv } from './ngx-securize.injector';

@NgModule({
  imports: [NGXSecurizeModule.forRoot()],
  providers: [
    {
      provide: NGXSecurizeInjectorEnv,
      useValue: NGXSecurizeEnvTesting,
    },
  ],
})
export class NGXSecurizeTestingModule {}
