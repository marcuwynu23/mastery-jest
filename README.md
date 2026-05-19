# mastery-jest

A small learning project for mastering Jest with TypeScript.

## Purpose

This repository is designed to help you practice and learn Jest testing in a TypeScript environment. It includes a simple source file and a test suite configured to run with `ts-jest`.

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Run the test suite:

```bash
pnpm test
```

## Roadmap

### Basic

- [ x ] Learn Jest test structure: `describe`, `test`, and `expect`
- [ x ] Write simple unit tests for functions and return values
- [ x ] Run Jest tests locally with `pnpm test`
- [ x ] Use matchers like `toBe`, `toEqual`, `toContain`, and `toHaveLength`

### Intermediate

- [ ] Test asynchronous code with `async/await`, `resolves`, and `rejects`
- [ ] Mock functions and modules using `jest.fn()` and `jest.mock()`
- [ ] Use setup and teardown hooks: `beforeEach`, `afterEach`, `beforeAll`, `afterAll`
- [ ] Organize test files and improve coverage with targeted cases

### Advanced

- [ ] Explore spies, deep mocks, and custom matchers
- [ ] Test Express routes or API handlers in Node.js
- [ ] Use snapshot testing for component or object output validation
- [ ] Configure Jest with TypeScript via `ts-jest` and custom transformer settings

### Mastery

- [ ] Write resilient tests that focus on behavior, not implementation
- [ ] Combine Jest with code coverage reports and continuous integration
- [ ] Use advanced mock behaviors for complex dependencies
- [ ] Debug failing tests and maintain a clean, stable test suite
