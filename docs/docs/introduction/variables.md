---
sidebar_position: 4
title: Variables in Dart
description: Learn about variables in dart language.
---

Variables are containers used to store value in the program. There are different types of variables where we can store
different types of values. Here is an example of creating a variable and initializing it.

```dart
// here variable name contains value John.
var name = "John";
```

## Types Of Variables

They are called data types. We will learn more about data types later in this dart tutorial.

- `String`: For storing text value. E.g. `“John”` [Must be in quotes]
- `int`: For storing integer value. E.g. 10, -10, 8555 [Decimal is not included]
- `double`: For storing floating point value. E.g. 10.0, -10.2, 85.698 [Decimal is included]
- `num`: For storing any types of number. E.g. 10, 20.2, -20 [both int and double]
- `bool`: For storing true or false value. E.g. true, false [Only stores true or false values]
- `var`: For storing any value. E.g. ‘Bimal’, 12, ‘z’, true

## Syntax

```dart

type variableName = value;
```

## Example

<iframe src="//dartpad.dev/embed-inline.html?id=42e3ff5816f695b53113199e7a76d3c7&split=60&theme=dark" frameborder="0" allowfullscreen width="100%" height="600"></iframe>

:::tip Note
Always use the descriptive variable name. Don’t use a variable name like a, b, c because this will make your code
more complex.
:::

## Rules For Creating Variables In Dart

- Variable names are case sensitive, i.e., a and A are different.
- A variable name can consist of letters and alphabets.
- A variable name cannot start with number.
- Keywords are not allowed to use as a variable name.
- Blank spaces are not allowed in a variable name.
- Special characters are not allowed except for the underscore (_) and the dollar ($) sign.

## Constant In Dart

Constant is the type of variable whose value never changes. In programming, changeable values are mutable and
unchangeable values are immutable. Sometimes, you don’t need to change the value once declared. Like the value of
PI=3.14, it never changes. To create a constant in Dart, you can use the const keyword.

<iframe src="//dartpad.dev/embed-inline.html?id=f9d4993a2e0129609d69572c0535be4c&split=60&theme=dark" frameborder="0" allowfullscreen width="100%" height="350"></iframe>

## Naming Convention For Variable and Constant In Dart

It is a good habit to follow the naming convention. In Dart Variables, the variable name should start with lower-case,
and every second word’s first letter will be upper-case like num1, fullName, isMarried, etc. Technically, this naming
convention is called `lowerCamelCase`.

### Example

```dart
// Incorrect Way
var fullname = "John Doe";
// Correct Way
var fullName = "John Doe";
const pi = 3.14;
```