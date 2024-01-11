# AOT-2023 Solutions

我个人对由 [TypeHero](https://typehero.dev) 主办的 [_Advent of TypeScript 2023_](https://typehero.dev/aot-2023) 年度挑战的解答。

[English](./README.md) | 简体中文

## 使用

安装依赖：

```shell
npm install
# 或
yarn
# 或
pnpm install
```

该项目使用 [Typroof](https://github.com/Snowfly-T/typroof) 测试 TypeScript 类型定义——这是个类似于 [tsd](https://github.com/tsdjs/tsd) 的 CLI 工具，但使用类似于 [Jest](https://jestjs.io/) 或 [Vitest](https://vitest.dev/) 的 BDD 风格断言。它比 tsd 更快、更灵活、更轻量，且所见即所得，你甚至可以定义自己的断言方法。更多信息请参阅 [Typroof 的文档](https://github.com/Snowfly-T/typroof?tab=readme-ov-file)。

在安装依赖后，你可以运行以下命令使用 Typroof 测试类型定义：

```shell
npx typroof
# 或
npm run test-types
# 或
yarn test-types
```
