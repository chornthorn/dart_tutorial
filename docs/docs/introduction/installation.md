---
sidebar_position: 2
title: Installation
description: How to install the Dart SDK.
---

# Install the Dart SDK

There are multiple ways to install a dart on your system. You can install Dart on Windows, Mac, and Linux or run it from
the browser.

## Requirements

Dart SDK,
VS Code or Editors like [Intellij](https://www.jetbrains.com/idea/).

## How To Install Dart On Windows?

Follow the below instructions to install a dart on the windows operating system.

**Steps**:

- Download Dart SDK from [here](https://dart.dev/get-dart/archive).
- Copy dart-sdk folder to your C drive.
- Add C:\dart-sdk\bin to your environment variable. Watch the video below to be more clear.
- Open the command prompt and type dart –version to check it.
- Install [VS Code](https://code.visualstudio.com/download) and Add Dart Extension.

:::info
Note: **Dart SDK** provides the tools to compile and run dart program.
:::

## How To Install Dart On MAC?

- Install Homebrew From [Homebrew](https://brew.sh/). (It's a package manager for macOS)
- Type brew tap dart-lang/dart in the terminal.
- Type brew install dart the in terminal.
- If you have any issues installing the dart, watch the video below.

## Homebrew Install Command

Copy and paste this command on your terminal to install Homebrew.

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

To set the homebrew path, copy and paste this command on your terminal.

```shell
 export PATH=/opt/homebrew/bin:$PATH
```

## Verify If Dart Is Installed Or Not

Open your command prompt and type dart –version. The dart is successfully installed on your system if it gives you a
version code. If not, watch the video above.

## Some Useful Commands

| Command                          | Description                                                     |
| -------------------------------- | --------------------------------------------------------------- |
| `dart –help`                     | Show all available commands.                                    |
| `dart filename.dart`             | Run the dart file.                                              |
| `dart create`                    | Create dart project.                                            |
| `dart fix`                       | Update dart project to new syntax.                              |
| `dart compile exe bin/dart.dart` | Compile dart code.                                              |
| `dart compile js bin/dart.dart`  | Compile dart to javascript. You can run this file with Node.js. |

## Run Dart On Web

You can run the dart program on your browser without installing any software. Dartpad is a web tool to write and run
your dart code.

- [Run Dart Programming on Web](https://dartpad.dev/)

## Install Dart Official Link

- [Install Dart Official Link](https://dart.dev/get-dart)

## Can You Learn Dart From Mobile?

Yes, you can use [DartPad](https://dartpad.dev/?) to run simple dart programs from your phone without installing any
software. For bigger
projects, using DartPad is not recommended.
