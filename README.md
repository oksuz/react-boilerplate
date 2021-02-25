# React Hello World App

- `install` dependencies via command line `npm install`
- `start` development server with command `npm run start:dev`
- `build` your app using `npm run build` command, your build appears in `dist` folder

# Some useful commands

`npm run codestyling:fix` fixes code styles automatically end show errors that not convenient for eslint rules

`npm run eslint:check` checks the code according to eslint rules

`npm run prettier:check` checks the code according to prettier rules

Last two of the commands are useful for ci/cd tools. 

# Test

it uses jest for testing. run this command for run tests: `npm run test` 

# Enabled Babel Plugins

- @babel/plugin-proposal-class-properties
which enables add properties and bound functions in classes directly. [doc](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)

- @babel/plugin-proposal-export-default-from

```js
export v from 'mod';
```

- @babel/plugin-proposal-export-namespace-from

```js
export * as ns from 'mod';
```

- @babel/plugin-proposal-logical-assignment-operators

```js
a ||= b;
obj.a.b ||= c;

a &&= b;
obj.a.b &&= c;
```

- @babel/plugin-proposal-nullish-coalescing-operator

```js
var foo = object.foo ?? "default";
```

- @babel/plugin-proposal-optional-chaining

```js
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined

// Optional chaining and normal chaining can be intermixed
obj?.foo.bar?.baz; // Only access `foo` if `obj` exists, and `baz` if
                   // `bar` exists

// Example usage with bracket notation:
obj?.['foo']?.bar?.baz // 42

```

- @babel/plugin-proposal-throw-expressions

```js
function test(param = throw new Error('required!')) {
  const test = param === true || throw new Error('Falsy!');
}
```

- @babel/plugin-proposal-function-bind [doc](https://babeljs.io/docs/en/babel-plugin-proposal-function-bind)

enables function context binding with `::` instead of `.bind`

```js
obj::func
// is equivalent to:
func.bind(obj)

::obj.func
// is equivalent to:
obj.func.bind(obj)

obj::func(val)
// is equivalent to:
func.call(obj, val)

::obj.func(val)
// is equivalent to:
obj.func.call(obj, val)
```

- @babel/plugin-transform-regenerator

enables generator feature

```js
function* a() {
  yield 1;
}
```



- @babel/plugin-proposal-json-strings
- @babel/plugin-proposal-function-sent
- @babel/plugin-syntax-dynamic-import
- @babel/plugin-syntax-import-meta