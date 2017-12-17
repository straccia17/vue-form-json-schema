# on

Register events listeners for [Custom Events](https://vuejs.org/v2/guide/components.html#Custom-Events) emitted using [`$emit`](https://vuejs.org/v2/api/#vm-emit)

The `on` property accepts either an `Array` or an `Object`.

## Array

```js
// Option 1: Arrays
fieldOptions: {
  on: [
    'input'
  ]
}
```

## Object

An `Object` can be used if the value should be manipulated or used elsewhere before set in to the model.

> Note that the callback must be synchronous

```js
// Option 2: Object
fieldOptions: {
  on: {
    'change': value => String(value).toLowerCase();
  }
}
```