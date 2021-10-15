# Decorators

Decorators from the [ngx-securize](../../../README.md) library.

## NGXSecurizeClass

You have to decorate your components in order to secure its method. To do it so, you just need to use the `@NGXSecurizeClass` decorator between the class declaration and the `@Component` decorator.

_NOTE:_ It's important to use the `@NGXSecurizeClass` before the `@Component`

example:

```typescript
@Component({})
@NGXSecurizeClass()
export class MyComponent {}
```

## NGXSecurizeMethod

Once you decorate your class, you can proceed to decorate the methods that you want.

```typescript
@Component({})
@NGXSecurizeClass()
export class MyComponent {
  @NGXSecurizeMethod(['read'])
  someMethod() {
    // your logic
  }

  @NGXSecurizeMethod(['read', 'write'])
  anotherMethod() {
    // your logic
  }

  @NGXSecurizeMethod(['read', 'delete'], {
    debug: true,
  })
  andAnotherOneMethod() {
    // your logic
  }
}
```

_NOTE:_ The first param of the decorator, is completly up to you. In this example, i use an array, but you can use an object, a string, etc. Just take in mind that this param, is what you will receive into the `check` callback from the configuration factory.

### API

| param | description                                                 | type                  |
| ----- | ----------------------------------------------------------- | --------------------- |
| arg0  | params that you want to pass to your `check` implementation | any                   |
| arg1? | decorator config                                            | NGXSecurizeMethodConf |

### Models

```typescript
interface NGXSecurizeMethodConf {
  debug?: boolean; // set debug to `true` will display some information on your console.
}
```
