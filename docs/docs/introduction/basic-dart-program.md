---
sidebar_position: 3
title: Basic Dart Program
description: Learn How dart program work.
---

This is a simple dart program that prints **Hello World** on screen. Most programmers write the Hello World program as
their
first program.

<iframe src="//dartpad.dev/embed-inline.html?id=c0f7c578204d61e08ec0fbc4d63456cd&split=80&theme=dark" frameborder="0" allowfullscreen width="100%" height="400"></iframe>

## Basic Dart Program Explained

- void `main()` is the starting point where the execution of your program begins. Program starts with main function.
- The curly braces `{}` represent the beginning and the ending of a block of code.
- `print(“Hello World!”);` prints Hello World! on screen.
- Each code statement must end with a semicolon.

## Basic Dart Program For Printing Name

<iframe src="//dartpad.dev/embed-inline.html?id=b0369d86b76b6c50e6aadd8d2b948240&split=60&theme=dark" frameborder="0" allowfullscreen width="100%" height="400"></iframe>

## Basic Dart Program To Join One Or More Variables

Here `$variableName` is used to join variables. This joining process in dart is called string interpolation.

<iframe src="//dartpad.dev/embed-inline.html?id=c22d51f78280cdfb56a8271bfe7c5220&split=60&theme=dark" frameborder="0" allowfullscreen width="100%" height="400"></iframe>

## Dart Program For Basic Calculation

Performing addition, subtraction, multiplication, and division in dart.

<iframe src="//dartpad.dev/embed-inline.html?id=9294fe7d4907d29e4ccb71aabce22dec&split=60&theme=dark" frameborder="0" allowfullscreen width="100%" height="600"></iframe>

## Create Full Dart Project

It’s nice to work on a single file, but if your project gets bigger, you need to manage configurations, packages, and
assets files. So creating dart project will help you to manage this all.

```shell
dart create -t console <project_name>
```

This will create a simple dart project with some ready-made code.

### Steps To Create Dart Project

- Open folder location on command prompt/terminal.
- Type `dart create project_name` (For E.g. dart create my_project)
- Type cd `my_project`
- Type `code .` to open project with visual studio code
- To check main dart file go to `bin/my_project.dart` and edit your code.

### Run Dart Project

First, open the project location on the command/terminal and run the project with this command.

```shell
dart bin/my_project.dart
```

## Convert Dart Code To Javascript

| Command                       | Description                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| dart compile js filename.dart | Compile dart to javascript. You can run this file with Node.js. |

## Challenge

Create a new dart project with name `stockmanagement` and then run it.
