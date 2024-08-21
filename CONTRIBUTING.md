# Contributing to jssnippets

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Share about it
> - Refer this project in your project's README
> - Mention the project at local meetups and tell your friends/colleagues

> Note:- [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) with [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate) is used to support cross-browser compatibility.

## Table of Contents

- [Have a Question](#have-a-question)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Setup Development Enviroment](#setup-development-enviroment)
- [Contributing to the Codebase](#contributing-to-the-codebase)
- [Proposing a Pull Request (PR)](#proposing-a-pull-request-pr)

## Have a Question

> If you want to ask a question, we assume that you have read the available [README](https://github.com/asdotdev/jssnippets/blob/master/README.md).

Before you ask a question, it is best to search for existing [Issues](https://github.com/asdotdev/jssnippets/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/asdotdev/jssnippets/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, pnpm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

## Reporting Bugs

### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the [README](https://github.com/asdotdev/jssnippets/blob/master/README.md)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [issues](https://github.com/asdotdev/jssnippets/issues) section.
- Collect information about the bug:
  - Device, OS, Browser and Version
  - Possibly your input and the output
  - Can you reliably reproduce the issue? And can you also reproduce it with older versions?

### How Do I Submit a Good Bug Report?

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/asdotdev/jssnippets/issues/new). (Since we can't be sure at this point whether it is a bug or not, we ask you not to talk about a bug yet and not to label the issue.)
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the **reproduction steps** that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

## Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for `jssnippets`, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [README](https://github.com/asdotdev/jssnippets/blob/master/README.md) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a search in the [issues](https://github.com/asdotdev/jssnippets/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/asdotdev/jssnippets/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to.
- **Explain why this enhancement would be useful** to most `jssnippets` users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

## Setup Development Enviroment

### Prerequisites

Check if [Node.js](https://nodejs.org/en/download/) and [pnpm](https://pnpm.io/installation) is already installed on your machine, run the following commands to validate:

```
node -v
pnpm -v
```

Once you have the prerequisites installed, you need to prepare your development environment. This is common for many development workflows, and you will only need to do this once.

> Install [Git](https://git-scm.com/) or your favorite Git client, if you haven't already. Update to the latest version; the version that came bundled with your OS may be outdated.
>
> (Optional but recommended) [Set up an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

> Install a code editor of your choice. If you aren't sure which one to use, try [VSCode](https://code.visualstudio.com/) — it's most recommend IDE developed by Microsoft which is free, essy to use and open source.

### Fork the Repository on GitHub

1. Go to the repository on GitHub: https://github.com/asdotdev/jssnippets

2. Click the "Fork" Button in the upper right-hand corner of the interface

3. After the repository has been forked, you will be taken to your copy of the repository at `https://github.com/YOUR_USER_NAME/jssnippets` (`YOUR_USER_NAME` would be replaced with your GitHub user name.)

### Clone your Fork from GitHub

1. Open a Terminal / Command Prompt / Shell in the directory you want to copy of the repository

2. Clone your fork of jssnippets, replacing `YOUR_USER_NAME` with your GitHub Username

```
git clone https://github.com/YOUR_USER_NAME/jssnippets.git
```

3. This will download the entire repository to your directory.

### Set up Syncing from Parent

1. Change the directory to the new jssnippets directory:

```
cd jssnippets
```

2. Add a remote reference to the `master` jssnippets repository:

```
git remote add upstream https://github.com/asdotdev/jssnippets.git
```

3. Ensure the configuration looks correct:

```
git remote -v
```

4. The output should look something like below (replacing `YOUR_USER_NAME` with your GitHub username):

```
origin    https://github.com/YOUR_USER_NAME/jssnippets.git (fetch)
origin    https://github.com/YOUR_USER_NAME/jssnippets.git (push)
upstream    https://github.com/asdotdev/jssnippets.git (fetch)
upstream    https://github.com/asdotdev/jssnippets.git (push)
```

> the main repository is referred to as the upstream repository. Your fork is referred to as the origin repository.

### Running Locally

1. Goto inside jssnippets directry in your terminal

2. Install pnpm dependencies with `pnpm install`

3. Build the library in watch mode with `pnpm run dev`

4. Use the extension locally on [Chrome](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) or [Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/).

## Contributing to the Codebase

1.  Validate that you are on the `master` branch:

    ```
    git checkout master
    ```

2.  Resolve previous commits:

    ```
    git status
    ```

    should show the message

    ```
    Your branch is up-to-date with 'origin/master'
    ```

3.  Sync the latest changes from the jssnippets upstream `master` branch to your `master` fork branch:
    Update your copy of the jssnippets upstream repository:
    ```
    git fetch upstream
    ```
    Hard reset your `master` branch with the jssnippets `master`:
    ```
    git reset --hard upstream/master
    ```
    Push your `master` branch to your origin to have a clean history on your fork on GitHub:
    ```
    git push origin master --force
    ```
    You can validate that your current `master` matches the `upstream/master` by performing a diff:
    ```
    git diff upstream/master
    ```
4.  Create a fresh new branch:

    ```
    git checkout -b fix/resolve-xyz
    ```

    > Your branch name should start with a fix/, feat/, docs/, chore/, etc. Avoid using issue numbers in branches. Keep them short, meaningful and unique.
    > Some examples of good branch names are:

    ```
    fix/resolve-xyz
    feat/add-xyz
    docs/update-abc
    chore/update-xyz
    ```

5.  Edit pages and work on code in your favorite text editor.

6.  Once you are happy with the changes and your final preview of the changes.

7.  Make sure your changes don't have any errors, and also check the formatting of your changes.

    Prettier -> `pnpm run format:check` & `pnpm run format:fix`

8.  Check and confirm the files you are updating with `git status`

9.  Stage the changes and make a commit:

    ```
    // stage all unstaged files in current directory
    git add .

    // stage single file
    git add <file>

    // stage multiple files
    git add <file1> <file2> <file3> ...
    ```

    > Only commit the `packag-lock.json` file if you've made changes to the `package.json` file.
    >
    > The `CHANGELOG.md` an`config/app.json` files are auto-generated, so don't make changes or commit them.

10. Now, you can commit your changes with a short message structured as: `<type>[optional scope]: <description>`:

    ```
    git commit -m "fix: my short commit message"
    ```

    Some examples of conventional commit messages are:

    ```
    fix: resolve xyz
    feat: added xyz
    docs(xyz): updated abc in xyz doc
    chore: updated xyz
    ```

    > You can learn more about why you should use conventional commits [here](https://www.conventionalcommits.org/en/v1.0.0/#why-use-conventional-commits).

## Proposing a Pull Request (PR)

1. Do not edit files directly through GitHub – while you can, it's not a good idea.

2. The PR title should structure similar to the commits as: `<type>[optional scope]: <description>`.
   | type | when to select |
   | -- | -- |
   | fix | resolve bug, improved functionality, etc. |
   | feat | Only if you are adding new functionality, etc. |
   | docs | Changes to file like README or CONTRIBUTING, etc. |
   | chore | Changes that are not related to code or docs, etc. |

   **description:** Keep it short (less than 30 characters) and simple; you can add more information and even screenshots in the PR description box and comments

3. Make sure you follow the PR checklist and not just tick things off.

4. Use the correct way to link issues in the description of the PR by updating the XXXXXX. Do not just add issue numbers everywhere and anywhere.

5. Do not "@mention" or request someone for reviews.

6. We understand you are excited about contributing. But please be patient, your PR get reviewed sooner or later.

7. Do not work directly off your `master` branch - create a new branch for the changes you are working on.