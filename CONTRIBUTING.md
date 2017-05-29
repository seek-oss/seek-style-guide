# Contributing to seek-style-guide

⚠️ 🌏 👀 First and foremost, remember that this repo is **open source**.

Don't post anything or commit any code that isn't ready for the entire world to see. If you're introducing new patterns, try to keep it abstract, rather than making specific reference to the features under development. While a lot of this information is probably harmless, it's better to be safe than sorry.

If you work at SEEK and run into issues along the way, or even if you find some of these steps confusing or intimidating, please reach out to your friendly neighbourhood developer in the living style guide Slack channel. We'll be super excited to help out!

## Setup

First, install [Node.js](https://nodejs.org/).

After cloning the project, install the dependencies:

```bash
$ npm install
```

## Workflow

Before starting your work, first ensure you're in the `master` branch and that you've pulled down the latest changes:

```bash
$ git checkout master
$ git pull
```

Next, create a new branch for your work, with an appropriate name for your change:

```bash
$ git checkout -b add-my-cool-new-feature
```

### Local Development Workflow

In order to see changes to the style guide during development, run the local development server:

```bash
$ npm start
```

To run the test suite locally:

```bash
$ npm test
```

Note that the test suite needs to pass for your changes to be accepted, so it's worth running this locally during development and before committing.

Even though we'd like to automate as much as possible, a comprehensive manual test is never a bad idea, especially if you're working in an area of the codebase that's particularly business critical. Reviewers are also encouraged to put UI changes through their paces, to act as a last line of defense before merging.

### Local Design Workflow

Some components have associated Sketch files included, but these are stored in git as plain text rather than Sketch's zip-based file format.

To generate the Sketch files, run the following script, but be warned that this will overwrite any Sketch files that you've modified in your local copy of the style guide:

```bash
npm run git-to-sketch
```

Feel free to add new Sketch files or modify any existing files. Once you're ready to commit your changes, you need to decode your Sketch files back to plain text by running the inverse of the previous command:

```bash
npm run sketch-to-git
```

### Design + Code = ❤

🎨🔗💻 If your code becomes out of sync with the design assets, or vice-versa, make sure you either keep them in sync yourself, or pair with a designer/developer to help you make the necessary changes. Either way, **we want to ensure that design and development assets remain in sync with every pull request.**

### Committing

Once you've made the desired changes and you're ready to commit, first stage your local changes:

```bash
$ git add .
```

Before continuing, consider the scope of your changes according to [semantic versioning](http://semver.org), noting whether this is a breaking change, a feature release or a patch.

New versions are published automatically from [Travis CI](https://travis-ci.org) using [semantic-release](https://github.com/semantic-release/semantic-release). In order to automatically increment version numbers correctly, commit messages must follow our [semantic commit message convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines). If your commit includes a breaking change, be sure to prefix your commit body with `BREAKING CHANGE: `. To make this process easier, we have a commit script (powered by [commitizen](https://github.com/commitizen/cz-cli)) to help guide you through the commit process:

```bash
$ npm run commit
```

Once you've committed your work, push your changes to a branch of the same name on GitHub:

```bash
$ git push --set-upstream origin $(git symbolic-ref --short HEAD)
```

Next, head over to the style guide's GitHub page and create a new pull request from your branch.

In order for your pull request to be accepted, the [Travis CI](https://travis-ci.org) build needs to pass, and **2 other contributors needs to approve your work.** GitHub will block your PR until you have your first approval, but make sure you wait for a second approval. It's likely that you might need to make some changes for your work to be accepted, but don't take this personally! Ultimately, the aim is to make it feel like the codebase was written by a single person, but this takes a lot of work and constant review of each others' work.

Once your work is approved and ready to go, hit the merge button and check that your commit message and description are clean and free of cruft, removing any irrelevant messages due to review feedback. Finally, take a deep breath, hit the green "confirm" button, and we have liftoff—your work should be automatically deployed!

🎨📦🚀
