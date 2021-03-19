# TypeScript workshops | March 2021

This repository is the starter code for the TypeScript workshops we ran in March 2021. [Workshop agenda & notes on Google Drive](https://docs.google.com/document/d/1-UgoJMTJh6TWRE_xsQfCH1WFmWCl-aKtFy3CAzNq5eg/edit).

## Resources

- [TypeScript official website](https://www.typescriptlang.org/)
- [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript playground](https://www.typescriptlang.org/play)
- [Gary Bernhardt’s Ideology conference talk](https://www.destroyallsoftware.com/talks/ideology)
- [Mypy](https://mypy.readthedocs.io/en/stable/)
- [Elm](https://elm-lang.org/), [ReasonML](https://reasonml.github.io/), [PureScript](https://www.purescript.org/)

## Intro

TypeScript

Why types – chart: [cost of finding software defect, and where defects are introduced](https://www.stickyminds.com/article/shift-left-approach-software-testing)

### Static vs Dynamic typing

- Static: the compiler raises type errors when compiling, for all code (generally). In theory no or very few type errors at runtime.
- Dynamic: no type errors when compiling (or no compiler). Type errors at runtime (for code that actually runs)
- Some dynamic languages also come with optional static type checkers.

Guess what the following langues are: C, Java, Scala, Rust, Python, JavaScript, TypeScript

Screenshot of test cases

Correctness: 14:06 https://www.destroyallsoftware.com/talks/ideology

### Structural vs nominal typing

Nominal:

```js
class Foo {
  method(input: string): number { ... }
}
class Bar {
  method(input: string): number { ... }
}
let foo: Foo = new Bar(); // ERROR!!
```

Structural:

```js
class Foo {
  method(input: string): number { ... }
}
class Bar {
  method(input: string): number { ... }
}
let foo: Foo = new Bar(); // Okay.
```

Sometimes languages mix both!

### TypeScript’s take

- Static at build time, with concessions. Still JavaScript (dynamic) at runtime.
- Type inference wherever possible
- Type enforcement strictness is configurable
- Compatible with existing JS code without much hassle (e.g. Elm)

### TypeScript beyond types

- A standard language (replaces Babel)
- Integrated JS compiler (replaces Babel’s 1000 different plugins, presets, helper packages)
- Well documented
- Built-in JSX support
- There are a few other language features, like:

### Basic project setup, TypeScript configuration overview

- Create React App: `npx create-react-app my-app --template typescript --use-npm`
- tsconfig.json
- ESLint, Prettier, Jest, etc.
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

### Type annotations & inference 101. ts-ignore & ts-expect-error

```sh
npm install -g typescript
tsc hello.ts
node hello.js
tsc --watch hello.ts
nodemon hello.js
```

- Basic syntax
- Annotations vs inference
- Primitive types
- tsc

`programmes.ts`

### Type aliases, combining types & type manipulations

`fizzbuzz.ts`

`unitToggle.ts`

- Aliases
- Union types
- typeof, keyof, keyed access

---

## Homework 1

`distances.ts`

Add types, to narrow down the function’s input and output as much as possible, with the least repetition possible.

---

## Workshop 2 intro

Type aliases vs interfaces
Interfaces only describe object shapes (or functions?)

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
