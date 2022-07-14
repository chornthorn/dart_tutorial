---
sidebar_position: 1
title: Null Safety
description: Learn about the null safety feature in Dart.
---

In simple words null safety in dart means variables cannot contain **null** value by default. This reduces the risk of
runtime bugs and makes your code error-free. This feature is called **Sound Null Safety** in dart. A null safety feature
is
added to **Dart 2.12** version.

## What Is Null?

The meaning of **Null** in a programming language is no value or absence of value. For E.g `int age = null;`. This code will
not work in dart recent version.

### Example

<iframe src="//dartpad.dev/embed-inline.html?id=007ba3a4acad493c038cacfa261a1f34&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="300"></iframe>

:::tip Note
A value of type **Null** can’t be assigned to a variable of type `int`.
:::

## Problem With Null

Programmers do have a lot of difficulties while handling `null` values. They forget that there are null values, so the
program breaks. Here `null` mostly acts as time bomb for programmers, which is ready to break the program.

:::tip Note
Common cause of errors for programming languages, in general, comes from not properly handling null values.
:::

## Non-Nullable By Default

Variables cannot be null by default. If you attempt to assign a null value, it will give a compile-time error.

```dart
int productId = 20; // non-nullable
int productId = null; // give error
```

## How To Define Null Value

As you know with dart sound `null` Safety you cannot provide a `null` value by default. If you are 100% sure to use it then you can use `?` to the type declaration.

## Syntax

```dart
 int? productId = null; // Works
```

### Example

<iframe src="//dartpad.dev/embed-inline.html?id=2a2f98f7ef8f0d38d7615c97ca65baf0&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="300"></iframe>

## Important Point In Dart Null

- Null means no value.
- Common error in programming is caused due to null.
- Dart 2.12 introduced sound null Safety to solve null problems.
- Non-nullable type is confirmed to never be null.
- You can define null value on your own if necessary.

#### In the next section, you will learn to handle null Safety more clearly.
