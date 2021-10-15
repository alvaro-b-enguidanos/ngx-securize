# NGX-SECURIZE

[![QA](https://github.com/candyman00/ngx-securize/actions/workflows/QA.js.yml/badge.svg)](https://github.com/candyman00/ngx-securize/actions/workflows/QA.js.yml)
[![publish](https://github.com/candyman00/angular-securize/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/candyman00/angular-securize/actions/workflows/npm-publish.yml)

![Angular](https://badgen.net/badge/Angular/12/red)
![Node](https://badgen.net/badge/node/14/green)
![npm](https://badgen.net/badge/icon/6/green?icon=npm&label)

## Table of content

- [NGX-SECURIZE](#ngx-securize)
  - [Table of content](#table-of-content)
  - [About](#about)
  - [Motivation](#motivation)
  - [Considerations & Requisites](#considerations--requisites)
  - [Usage](#usage)
    - [Import](#import)
    - [Using the decorators](#using-the-decorators)
    - [Testing](#testing)
  - [Author](#author)

## About

## Motivation

## Considerations & Requisites

## Usage

### Import

The first step to use the library, is to import the module into your `app.module.ts`

```typescript
// app.module.ts
import { NGXSecurizeModule, NGXSecurizeResolver, NGXSecurizeAPI } from 'ngx-securize';

const factory = (userService: UserService) => {
  const providedApi: NGXSecurizeAPI = {
    check: (role: string | string[]) => userService.userHasRole(role),
  };
  return new NGXSecurizeResolver(providedApi);
};

@NgModule({
  imports: [
    NGXSecurizeModule.forRoot({
      useProvider: {
        provide: NGXSecurizeResolver,
        useFactory: factory,
        deps: [UserService],
      },
    }),
    ...
  ],
  ...
})
export class AppModule {}
```

Note that the factory provided to the module, should return an `NGXSecurizeAPI` object. But the actual implementation is completly up to you.

In this example, i use a `UserService` that looks for an especific role/s, but you can configure the module, with whatever is your need. Just be sure that if you use an angular service, you need to provide it into the `deps` array.

```typescript
// user.service.ts
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user!: User;

  constructor() {
    this.init();
  }

  public userHasRole(role: string | string[]): boolean {
    if (Array.isArray(role)) {
      return this._user?.roles.some(r => (role as string[]).includes(r)) ?? false;
    }
    return this._user?.roles.includes(role as string) ?? false;
  }

  private init(): void {
    this._user = {
      name: 'jhon doe',
      roles: ['write', 'read'],
    };
  }
}
```

### Using the decorators

### Testing

## Author

mail: alvaro.bellido.enguidanos+ngx_securize@gmail.com
