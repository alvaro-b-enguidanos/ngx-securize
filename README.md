# NGX-SECURIZE

[![QA](https://github.com/candyman00/ngx-securize/actions/workflows/QA.js.yml/badge.svg)](https://github.com/candyman00/ngx-securize/actions/workflows/QA.js.yml)
[![publish](https://github.com/candyman00/ngx-securize/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/candyman00/ngx-securize/actions/workflows/npm-publish.yml)

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
    - [SecurizeResolver](#securizeresolver)
    - [Models](#models)
    - [Using the decorators](#using-the-decorators)
    - [Testing](#testing)
  - [Author](#author)

## About

ngx-securize is a solution that wants to help you to manage the securitization of your code, avoiding code redundancy and eliminating repetitive test by doing it in an elegant way, based on decorators.

## Motivation

If you used to work with securized apps, where you have to check some kind of permission from an user, you probably will end up with some common tasks, like guards, directives, etc. That are meant to show/hide information to the user.

Angular already gives you the tools to build this mechanisms. However. What about invoking some method inside a component?

In this case, you will end up with something like this:

```typescript
const allowedRoles = ['read', 'write'];

@Component({})
export class MyComponent {
  constructor(private userService: UserService) {}

  someMethod() {
    const userHasRoles = this.userService.hasRoles(allowedRoles);

    if (!userHasRoles) {
      return;
    }

    // some logic
  }
}
```

if this seems you familiar, you may be interesting on continue reading.

You can notice 3 things on the above code:

- You have to inject some kind of service to provide some security context to the component
- You have to manually call to the service. Every single time.
- You have an `if` statement on your method. so you have to test 2 cases instead of one. You have 50 method that implements this pattern? yo have make 50 test just to test those `if`

...and we don't like to waste efforts.

So `ngx-securize` comes to help you to remove this 3 points

You just need to provide an implementation to handle your specific case. In this example, you need to connect the library with the `UserService` and decorate the methods that you want.

And with that, you will achive:

- you just have to define the implementation once. No needed for calling it n times.
- The decorator manages that implementation, so there is no need for `if` statements
- since there is no `if` statement, you don need to test them :D

so, how the above code looks like with `ngx-securize`?

```typescript
const allowedRoles = ['read', 'write'];

@Component({})
@SecurizeClass()
export class MyComponent {
  @SecurizeMethod(allowedRoles)
  someMethod() {
    // some logic
  }
}
```

## Considerations & Requisites

The library is compiled using IVY, so make sure that your app, is running IVY too (if you are using angular v12+, this is the default)

In relation with that, the library is meant to be used in Angular v12+

## Usage

### Import

The first step to use the library, is to import the module into your `app.module.ts`

```typescript
// app.module.ts
import { SecurizeModule, SecurizeResolver, SecurizeAPI } from 'ngx-securize';

const factory = (userService: UserService) => {
  const providedApi: SecurizeAPI = {
    check: (role: string | string[]) => userService.userHasRole(role),
  };
  return new SecurizeResolver(providedApi);
};

@NgModule({
  imports: [
    SecurizeModule.forRoot({
      useProvider: {
        provide: SecurizeResolver,
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

Note that the factory provided to the module, should return an `SecurizeAPI` object. But the actual implementation is completly up to you.

In this example, i use a `UserService` that looks for an especific role/s, but you can configure the module with whatever is your need. Just be sure that if you use an angular service, you need to provide it into the `deps` array.

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

### SecurizeResolver

in this example:

```typescript
// app.module.ts
const factory = (userService: UserService) => {
  const providedApi: SecurizeAPI = {
    check: (role: string | string[]) => userService.userHasRole(role),
  };
  return new SecurizeResolver(providedApi);
};
```

```typescript

// xxx.component.ts
  @SecurizeMethod(['some:role'])
  someMethod() {
    // some logic
  }
```

the `check` callback will be invoked with `['some:role']`

The implementation itself, is completely up to you. You can do something completely different like: (the example is kind of useless, but you get the point)

```typescript
// app.module.ts
const factory = (userService: UserService) => {
  const providedApi: SecurizeAPI = {
    check: (year: number) => userService.userIsOlderThanYears(years),
  };
  return new SecurizeResolver(providedApi);
};
```

```typescript

// xxx.component.ts
  @SecurizeMethod(21)
  someMethod() {
    // some logic
  }
```

### Models

```typescript
interface SecurizeAPI {
  check: (arg: any) => boolean;
}
```

### Using the decorators

Once you configure the module, you are able to use the [decorators](./src/lib/decorators/README.md)

### Testing

In other to ensure that the decorators allows you to call to all the methods ( in a test environment, is what you want ), just import the `SecurizeTestingModule` like so:

```typescript
TestBed.configureTestingModule({
  imports: [
    SecurizeTestingModule
    ...,
  ],
  ...
});
```

## Author

mail: alvaro.bellido.enguidanos+ngx_securize@gmail.com

linkedIn: www.linkedin.com/in/alvaro-b-enguidanos

medium (spanish): https://alvaro-b-enguidanos.medium.com/
