# Decorators

Decorators from the [ngx-securize](../../../README.md) library.

## SecurizeClass

You have to decorate your components in order to secure its method. To do it so, you just need to use the `@SecurizeClass` decorator between the class declaration and the `@Component` decorator.

_NOTE:_ It's important to use the `@SecurizeClass` before the `@Component`

example:

```typescript
@Component({})
@SecurizeClass()
export class MyComponent {}
```

## SecurizeMethod

Once you decorate your class, you can proceed to decorate the methods that you want.

```typescript
@Component({})
@SecurizeClass()
export class MyComponent {
  @SecurizeMethod(['read'])
  someMethod() {
    // your logic
  }

  @SecurizeMethod(['read', 'write'])
  anotherMethod() {
    // your logic
  }

  @SecurizeMethod(['read', 'delete'], {
    debug: true,
  })
  andAnotherOneMethod() {
    // your logic
  }
}
```

_NOTE:_ The first param of the decorator, is completly up to you. In this example, i use an array, but you can use an object, a string, etc. Just take in mind that this param, is what you will receive into the `check` callback from the configuration factory.

### API

| param | description                                                 | type               |
| ----- | ----------------------------------------------------------- | ------------------ |
| arg0  | params that you want to pass to your `check` implementation | any                |
| arg1? | decorator config                                            | SecurizeMethodConf |

### Models

```typescript
interface SecurizeMethodConf {
  debug?: boolean; // set debug to `true` will display some information on your console.
}
```
