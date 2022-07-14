---
sidebar_position: 2
title: Handle Null In Dart
description: Learn how to handle null in Dart
---

Before null Safety, it is hard to handle null values and cause errors in your program. You can handle null values in the
following ways.

## How To Allow Null Values

If you want to allow null, you can add the question mark ? to the end of the variable’s type.

### Example

```dart
void main() {
  int? productId = null;
}
```

## Assertion Operator In Dart

If you want to assign a nullable value to a **non-nullable** variable, Dart will not allow you by default. In this
situation
you can use an exclamation symbol `!` to force the compiler to tell the value is non-null.

### Example

```dart
void main() {
  String ? name;
  String firstName = name; // give error
  String lastName = name!; // it works
}
```

## Null Aware Operators In Dart

Dart gives a whole set of **null-aware** operators that can help you handle potentially `null` values.

### If null operator ??

- **Null** aware assignment operator `??=`
- **Null** aware access operator `?`
- **Null** assertion operator `!`
- **Null** aware method invocation operator `?`

## If Null Operator ??

One of the best ways to handle `null` values is to use a double question mark `??`, which is called the if `null`
operator.
This operator says if the value on the left is `null` go with the value on the right, if a value is not `null` do
nothing.

### Example

A simple example of if `null` operator in dart.

<iframe src="//dartpad.dev/embed-inline.html?id=d05c89dc6d728c39d6d997508f4a1bb0&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="300"></iframe>

### Explained

- Here address is `null`, `??` will set status `=` No Address
- Using `??` you can ensure that status can never be `null`.

### The above code is equal to:

<iframe height="400" src="//dartpad.dev/embed-inline.html?id=2d7b6cec7fa9c1b211ae1a876b4adaa8&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" ></iframe>

## Null-Aware Assignment Operator `??=`

**Null-aware** assignment operator in dart says if the value is `null` then it assigns value after `??=`, else don’t
assign any other value.

### Example

A simple example of a `null` aware assignment operator in dart.

<iframe height="300" src="//dartpad.dev/embed-inline.html?id=b611b28693979efb032c366815de57e8&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" ></iframe>

### Explained

- Here address is `null`, `??` will set address `=` USA
- Using `??=` you can ensure that address can never be `null`.

## Null-Aware Access Operator `?.`

The **null-aware** access operator in the dart returns `null` if the left-hand side is `null` else it will return the
property of the right hand.

### Example

A simple example of a `null` aware assignment operator in dart.

<iframe height="300" src="//dartpad.dev/embed-inline.html?id=ab7343139ad6530c693631d8fd7ff2d2&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" ></iframe>

### Explained

- Here age is `null`, so `?.` operator prevents the code from crashing.
- It returns `null` inside the print statement.

## Null Assertion Operator `!`

Sometimes dart doesn’t know whether a nullable value is `null` or not, but if you are sure that it is not `null`, you
can
use the `null` assertion operator!.

:::tip Note
You already learned that ! is not an operator before. The difference between not-operator `!` and `null` assertion
operator
is you can use **not-operator** as a prefix. `a!==2` and you can use `null` assertion operator as a postfix.
:::

### Example

Here is the example of the `null` assertion operator in dart. Removing `!` from code doesn’t work.

<iframe height="450" src="//dartpad.dev/embed-inline.html?id=d2bcc33c89029ef329e28822d2451b7e&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" ></iframe>

### Explained

- Here you are 100% sure that it returns true, so you are using it.
- If you can change the word to something other than water or sand, it won’t work.

This as `bool` is equivalent to an assertion operator `!` but the difference is `!` is shorter.

```dart

bool canIDrinkWater = canDrink("water") as bool;
```

:::tip Note
Wrong use of assertion operator ! may crash your program.
:::

Here is an alternative to the assertion operator, and it doesn’t crash your program.

```dart

bool canIDrinkWater = canDrink("water") ?? true;
```

## Late Keyword In Dart

In some situations, variable, fields in class should be **non-nullable**, but you can’t assign a value immediately you
can use a late keyword.

### What Happen When You Assign Late Keywords

- You can’t assign value now.
- You should assign a value before the variable is used.

```dart
void main() {
  late String name;
  name = "John";
  print(name);
}
```

If you don’t assign value to name it will give an error.

### Late Example In Dart

<iframe height="400" src="//dartpad.dev/embed-inline.html?id=875efbd23fd36ebcde1766ff106dddbd&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" ></iframe>

Here this code will give you an error to solve this issue simply, add a `late` keyword to the start of the line
initializing `secretNumber`.

```dart

late int secretNumber = calculateSecretNumber();
```

:::tip Note
Using `late` means dart doesn’t initialize value right away, it only initializes when you access it for the first time.
This is also called lazy loading.
:::
