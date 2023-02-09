# TypeScript workshops | llamatypes

Static types FTW! A short series of workshops and take-home exercises for static typing beginners who already know JavaScript and React.

## #1 Types 101, 19/03

Erratum: when compiling a single file, tsc doesn't read the tsconfig.json! It only reads it when run without any files input (`tsc`), or when running via Webpack or similar like a normal project.

Recommended resources for further information:

- [Gary Bernhardt's Ideology conference talk](https://www.destroyallsoftware.com/talks/ideology)
- [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript playground](https://www.typescriptlang.org/play)
- [Elm](https://elm-lang.org/),[ReasonML](https://reasonml.github.io/),[PureScript](https://www.purescript.org/)

### Housekeeping

- 90min, grab a drink, turn off Slack
- Make sure you have Node 14 and npm v6 installed on your computer ahead of time
  - `node --version`
  - `npm --version`

### Agenda

- 12:00 -- Welcome
- 12:05 -- Intro: Why TypeScript, type systems
  - Static typing vs dynamic typing (compile-time, runtime)
  - Structural typing vs nominal typing
  - TypeScript's type system
  - TypeScript beyond types. To TypeScript or not to TypeScript
- 12:20 -- Basic project setup, TypeScript configuration overview
  - Create React App
  - tsconfig.json
  - ESLint, Prettier, Jest
  - DefinitelyTyped
  - IDE
- 12:35 -- Type annotations & inference 101. ts-ignore & ts-expect-error
  - Basic syntax
  - Annotations vs inference
  - Primitive types
  - tsc
- 12:50 -- Type aliases, combining types & type manipulations
  - Aliases
  - Union types
  - typeof, keyof, keyed access
- 13:20 -- Questions

### Resources

- [TypeScript official website](https://www.typescriptlang.org/)
- [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript playground](https://www.typescriptlang.org/play)
- [Type Search](https://www.typescriptlang.org/dt/search)
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [dts-gen](https://github.com/Microsoft/dts-gen)
- [Gary Bernhardt’s Ideology conference talk](https://www.destroyallsoftware.com/talks/ideology)
- [Elm](https://elm-lang.org/), [ReasonML](https://reasonml.github.io/), [PureScript](https://www.purescript.org/)
- [Mypy](https://mypy.readthedocs.io/en/stable/)

### Intro

TypeScript

Why types – chart: [cost of finding software defect, and where defects are introduced](https://www.stickyminds.com/article/shift-left-approach-software-testing)

#### Static vs Dynamic typing

- Static: the compiler raises type errors when compiling, for all code (generally). In theory no or very few type errors at runtime.
- Dynamic: no type errors when compiling (or no compiler). Type errors at runtime (for code that actually runs)
- Some dynamic languages also come with optional static type checkers.

Guess what the following langues are: C, Java, Scala, Rust, Python, JavaScript, TypeScript

Screenshot of test cases

Correctness: 14:06 https://www.destroyallsoftware.com/talks/ideology

#### Structural vs nominal typing

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

#### TypeScript’s take

- Static at build time, with concessions. Still JavaScript (dynamic) at runtime.
- Type inference wherever possible
- Type enforcement strictness is configurable
- Compatible with existing JS code without much hassle (e.g. Elm)

#### TypeScript beyond types

- A standard language (replaces Babel)
- Integrated JS compiler (replaces Babel’s 1000 different plugins, presets, helper packages)
- Well documented
- Built-in JSX support
- There are a few other language features, like:

#### Basic project setup, TypeScript configuration overview

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

`fizzbuzz.ts`

`programmes.ts`

### Type aliases, combining types & type manipulations

`unitToggle.ts`

- Aliases
- Union types
- typeof, keyof, keyed access

---

## Homework 1

Add types to `distances.ts`, applying the concepts we learned during the workshop.

Try different variations to have more or less precise type definitions. Try different ways of writing the types to reduce repetition where relevant.

To submit your answer, DM Thibaud with a link to your merge request, or to the TypeScript playground: <https://www.typescriptlang.org/play>.

## Workshop 2: TypeScript real-world tasks

Recommended resources for further information:

- <https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b>
- <https://react-typescript-cheatsheet.netlify.app/>
- <https://www.destroyallsoftware.com/talks/ideology>

### Housekeeping

- Make sure you have Node 14 and npm v6 installed on your computer
- Prerequisite: you know everything from the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- Prerequisite: you've seen React code before

### Agenda

See README below.

#### Narrowing types, generics, casting

Typing vanilla JS DOM UI widgets

[accordion.js](https://git.torchbox.com/internal/wagtail-kit/-/blob/master/wagtailkit_repo_name/wagtailkit_repo_name/static_src/javascript/components/accordion.js)

[TypeScript Playground](https://www.typescriptlang.org/play)

#### TypeScript + React

##### Basic project setup

- Create React App: `npx create-react-app my-app --template typescript --use-npm`
- tsconfig.json
- ESLint, Prettier, Jest, etc.
- .tsx

##### Typing props & generics

- TypeScript types vs React PropTypes
- [Type aliases or interfaces](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#types-or-interfaces)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)

#### Dependencies, declaration files, DefinitelyTyped

- reading-time: DefinitelyTyped
- [Type Search](https://www.typescriptlang.org/dt/search)
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [dts-gen](https://github.com/Microsoft/dts-gen)
- Manually writing declaration files
- [globals](https://github.com/wagtail/wagtail/blob/main/client/src/custom.d.ts)

## Homework 2

Add types to `distances.ts`, applying the concepts we learned during the workshop.

Try to aim for different levels of strictness of the type definitions, making them as precise as possible but if possible with little or no repetition.

There are specific language features I would expect to see, from simplest to most advanced:

1. Type aliases and union types
2. "as const", typeof, keyof operators
3. Casting ("as" keyword), Type narrowing (if statement)
4. Generics

If you want a bigger challenge, go further and make a solution using something we didn't cover in the workshop -- some of the above plus type guards, or function overloads, or conditional types.

Submit your solution either as a MR on the repository, or a link to the [TypeScript Playground](https://www.typescriptlang.org/play).
