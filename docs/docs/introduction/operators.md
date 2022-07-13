---
sidebar_position: 7
title: Operators in Dart
description: Learn about the operators in Dart
---

Operators are used to perform mathematical and logical operations on the variables. Each operation in dart uses a symbol
called the operator to denote the type of operation it performs. Before learning operators in the dart, you must
understand the following things.

Operands : It represents the data.
Operator It represents how the operands will be processed to produce a value.

:::tip Note
Suppose the given expression is 2 + 3. Here 2 and 3 are operands, and + is the operator.
:::

## Types Of Operators

- Arithmetic Operators
- Increment and Decrement Operators
- Assignment Operators
- Logical Operators
- Type Test Operators

## Arithmetic Operators

Arithmetic operators are the most common types of operators. They perform operations like addition, subtraction,
multiplication, division, etc.

| Operator Symbol | Operation Name | Description                                          |
| --------------- | -------------- | ---------------------------------------------------- |
| +               | Addition       | For adding two operands                              |
| -               | Subtraction    | For subtracting two operands                         |
| -expr           | Unary          | Minus For reversing the sign of the expression       |
| \*              | Multiplication | For multiplying two operands                         |
| /               | Division       | For dividing two operands and give output in double  |
| ~/              | Division       | For dividing two operands and give output in integer |
| %               | Modulus        | Remainder After Integer Division                     |
| ++              | Increment      | Increase Value By 1. For E.g a++;                    |
| --              | Decrement      | Decrease Value By 1. For E.g a–;                     |

Let’s look at how to perform arithmetic calculations in dart.

<iframe src="//dartpad.dev/embed-inline.html?id=44d196363f3a46961bb4e604cc25987f&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="700"></iframe>

## Increment and Decrement Operators

With increment and decrement operators, you can increase and decrease values. If `++` is used at the beginning, then it
is a prefix. If it is used at last, then it is postfix.

| Operator Symbol | Operation Name | Description                                                  |
| --------------- | -------------- | ------------------------------------------------------------ |
| ++var           | Pre Increment  | Increase Value By 1. var = var + 1 Expression value is var+1 |
| --var           | Pre Decrement  | Decrease Value By 1. var = var - 1 Expression value is var-1 |
| var++           | Post Increment | Increase Value By 1. var = var + 1 Expression value is var   |
| var--           | Post Decrement | Decrease Value By 1. var = var - 1 Expression value is var   |

:::tip Note
**++var** increases the value of operands, whereas **var++** return the actual value of operands before the increment.
:::

<iframe height="600" src="//dartpad.dev/embed-inline.html?id=857e3d55344fe4b4f6f9976bb38282e5&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Assignment Operators

It is used to assign some values to variables. Here, we are assigning 24 to the age variable.

```dart

int age = 24;
```

| Operator Type | Description                   |
| ------------- | ----------------------------- |
| =             | Assign a value to a variable  |
| +=            | Adds a value to a variable    |
| -=            | Reduces a value to a variable |
| \*=           | Multiply value to a variable  |
| /=            | Divided value by a variable   |

<iframe height="400" src="//dartpad.dev/embed-inline.html?id=d8042da3945428b8ab28e34bdfb8e4ee&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

:::tip Note
To assign only if the assign-to variable is null use `??` operator.
:::

## Relational Operators

Relational operators are also called comparison operators. They are used to make a comparison.

| Operator Symbol | Operation Name           | Description                                                                   |
| --------------- | ------------------------ | ----------------------------------------------------------------------------- |
| ` >`            | Greater than             | Used to check which operand is bigger and gives result as boolean             |
| <               | Less than                | Used to check which operand is smaller and gives result as boolean            |
| `>=`            | Greater than or equal to | Used to check which operand is bigger or equal and gives result as boolean    |
| <=              | Less than or equal to    | Used to check which operand is smaller or equal and gives result as boolean   |
| ==              | Equal to                 | Used to check operands are equal to each other and gives result as boolean    |
| !=              | Not equal to             | Used to check operand are not equal to each other and gives result as boolean |

<iframe height="400" src="//dartpad.dev/embed-inline.html?id=bd03369257fb7b845e76cae55665f4b7&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Logical Operators

It is used to compare values.

| Operator Type | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| &&            | This is ‘and’, return true if all conditions are true            |
| 2 equal       | This is ‘or’. Return true if one of the conditions is true       |
| !             | This is ’not’. return false if the result is true and vice versa |

<iframe height="400" src="//dartpad.dev/embed-inline.html?id=5df7cc0c67102c9feed2ab6923523cc0&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Type Test Operators

In dart, **type test** operators are useful for checking types at runtime.

| Operator Symbol | Operation Name | Description                                                 |
| --------------- | -------------- | ----------------------------------------------------------- |
| is              | is             | Gives boolean value true if the object has a specific type  |
| is!             | is not         | Gives boolean value false if the object has a specific type |

<iframe height="300" src="//dartpad.dev/embed-inline.html?id=3488d68321ecf30c9065bf39a4c481ed&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>
