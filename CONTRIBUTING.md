# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Branch model: [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html)

Commit message convention: [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) - latest LTS or current version
- [npm](https://www.npmjs.com/get-npm) - latest version

### Installing

1. Fork, then clone the repo:

```sh
git clone https://github.com/your-username/linkedin-auth-client.git
```

2. Install dependencies in your freshly cloned directory:

```sh
npm install
```

### Development

Running the `watch` task will start a development server on `localhost:8000`.

Server supports auto refreshing, so you don't need to worry about hitting refresh on every change made.

```sh
npm run watch
```

### Building

Running the `build` will create a production-ready version of the library, located in `dist`.

```sh
npm run build
```

## Reporting Issues and Asking Questions

Before opening an issue, please search the [issue tracker](https://github.com/and-end/linkedin-auth-client/issues) to make sure your issue hasn't already been reported.

### Help Us Help You

On both websites, it is a good idea to structure your code and question in a way that is easy to read to entice people to answer it. For example, we encourage you to use syntax highlighting, indentation, and split text in paragraphs.

### Sending a Pull Request

For non-trivial changes, please open an issue with a proposal for a new feature or refactoring before starting on the work. We don't want you to waste your efforts on a pull request that we won't want to accept.

On the other hand, sometimes the best way to start a conversation _is_ to send a pull request. Use your best judgement!

In general, the contribution workflow looks like this:

- Open a new issue in the [Issue tracker](https://github.com/and-end/linkedin-auth-client/issues).
- Fork the repo.
- Create a new feature branch based off the `master` branch.
- Make sure all tests pass and there are no linting errors.
- Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, we'll try to get back to you as soon as possible. We may suggest some changes or improvements.

Thank you for contributing!
