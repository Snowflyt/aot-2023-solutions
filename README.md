# AOT-2023 Solutions

My solutions for the [_Advent of TypeScript 2023_](https://typehero.dev/aot-2023) hosted by [TypeHero](https://typehero.dev).

English | [简体中文](./README.zh-CN.md)

## Usage

Install dependencies:

```shell
npm install
# Or
yarn
# Or
pnpm install
```

This project uses [Typroof](https://github.com/Snowfly-T/typroof) to test TypeScript type definitions. It is a CLI tool similar to [tsd](https://github.com/tsdjs/tsd), but use BDD-style assertions like in [Jest](https://jestjs.io/) or [Vitest](https://vitest.dev/). It is also faster, more flexible and more lightweight than tsd, WYSIWYG, and you can even define your only assertion methods. See [its documentation](https://github.com/Snowfly-T/typroof?tab=readme-ov-file) for more details.

After installing dependencies, you can run the following command to use Typroof to test type definitions:

```shell
npx typroof
# Or
npm run test-types
# Or
yarn test-types
```
