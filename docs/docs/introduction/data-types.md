---
sidebar_position: 5
title: Data Types in Dart
description: Learn about data types in dart language.
---

Data types help you to categorize all the different types of data you use in your code. For e.g. numbers, texts,
symbols, etc. The data type specifies what type of value will be stored by the variable. Each variable has its data
type. Dart supports the following built-in data types :

- Numbers
- Strings
- Booleans
- Lists
- Maps
- Sets
- Runes
- Null

## Built-In Types

In **Dart language**, there is the type of values that can be represented and manipulated. The data type classification
is
as given below:

| Data Type | Keyword          | Description                                            |
|-----------|------------------|--------------------------------------------------------|
| Numbers   | int, double, num | It represents the number of bits of the computer.      |
| Strings   | String           | It represents a sequence of characters                 |
| Booleans  | bool             | It represents Boolean values true and false            |
| Lists     | List             | It is an ordered group of items                        |
| Maps      | Map              | It represents a set of values as key-value pairs       |
| Sets      | Set              | It is an unordered list of unique values of same types |
| Runes     | runes            | It represents Unicode values of String                 |
| Null      | null             | It represents null value                               |

## Numbers

When you need to store numeric value on dart, you can use either int or double. Both **int** and **double** are subtype
of **num**.
You can use **num** to store both **int** or **double** value.

<iframe src="//dartpad.dev/embed-inline.html?id=d2770b1f6a570d4f41f4c7b6d222f01d&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="600"></iframe>

## Round Double Value To 2 Decimal Places

The `.toStringAsFixed(2)` is used to round the double value upto 2 decimal places in dart. You can round to any decimal
places by entering number like **2**, **3**, **4**.

<iframe src="//dartpad.dev/embed-inline.html?id=fba372ed761800bd5bb07fbaf50f9348&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="300"></iframe>

## String

String helps you to store text data. You can store values like I love dart, New York 2140 in String. You can use single
or double quotes to store string in dart.

<iframe src="//dartpad.dev/embed-inline.html?id=aa4922a8b9b779adf532228023430135&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="350"></iframe>

## Create A Multi-Line String In Dart

If you want to create a multi-line String in dart, then you can use triple quote with either single or double quotation
marks.

<iframe src="//dartpad.dev/embed-inline.html?id=c6588efef633b37d35c5055aa5dc9883&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="590"></iframe>

## Special Character In String In Dart

| Special Character | Description     |
|-------------------|-----------------|
| `\n `             | New Line        |
| `\t`              | Tab             |
| `\r`              | Carriage Return |
| `\b`              | Backspace       |
| `\f`              | Form Feed       |
| `\v`              | Vertical Tab    |
| `\'`              | Single Quote    |
| `\"`              | Double Quote    |
| `\\`              | Backslash       |

### Example

<iframe src="//dartpad.dev/embed-inline.html?id=3779431881fde36bdbee784ba2ba0f35&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="460"></iframe>

## Create A Raw String In Dart

You can also create raw string in dart. Special characters won’t work here. You must write `r` after equal sign.

<iframe src="//dartpad.dev/embed-inline.html?id=9c8aa0be5234df444b9b9a3bd98c8ad8&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="350"></iframe>

## Type Conversion In Dart

In **dart**, type conversion allows you to convert one data type to other type. For e.g. to convert `String` to `int`
, `int` to
`String` or `String` to `bool`, etc.

## Convert String To Int In dart

You can convert String to int using `int.parse()` method. The method takes String as an argument and converts it into an
integer.

<iframe src="//dartpad.dev/embed-inline.html?id=c4612c516320cb5ed60c76ab1c2b15de&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="350"></iframe>

## Convert Int To String In Dart

You can convert int to String using `toString()` method. Here is example:

<iframe src="//dartpad.dev/embed-inline.html?id=936610d716923f556de50c6d87a2de26&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="350"></iframe>

## Convert Double To Int In Dart

You can convert double to int using `toInt()` method.

<iframe src="//dartpad.dev/embed-inline.html?id=6908bb3cf5da39afe38eeb37547173bf&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="350"></iframe>

## Booleans

In **Dart**, **boolean** holds either **true** or **false** value. You can write `bool` keyword to define **boolean**
data type.
<iframe src="//dartpad.dev/embed-inline.html?id=8a14e70a1d4784b7f9d8f675b1edd54f&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="280"></iframe>

## Lists

The list holds multiple values in a single variable. It is also called arrays. If you want to store multiple values
without creating multiple variables, you can use a list.

<iframe src="//dartpad.dev/embed-inline.html?id=ce8ad6b0e7498b8e4c44171a7259721d&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="450"></iframe>

:::tip Note
**List index** always starts with **0**. Here `names[0]` is Raj, `names[1]` is John and `names[2]` is Max.
:::

## Sets

An unordered collection of unique items is called set in dart. You can store unique data in **sets**.

:::tip Note
Set does’t print duplicate items.
:::

<iframe src="//dartpad.dev/embed-inline.html?id=8388be9017d281dc7bac2624c724c591&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="280"></iframe>

## Maps

In **dart**, a `map` is an object where you can store data in **key-value** pairs. Each key occurs only once, but you
can use same
value multiple times.

<iframe src="//dartpad.dev/embed-inline.html?id=f058ada5da402b921c460d8082daab21&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="350"></iframe>

## Var Keyword In Dart

In **dart**, `var` automatically finds a data type. In simple terms, `var` says if you don’t want to specify a data
type, I will find a data type for you.

<iframe src="//dartpad.dev/embed-inline.html?id=46ea00272d2bcd62cc6268948b0919ab&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="350"></iframe>

## Runes In Dart

With **runes**, you can find Unicode values of `String`. The Unicode value of a is 97, so runes give 97 as output.

<iframe src="//dartpad.dev/embed-inline.html?id=05ecf65dd5c78cdbcfa34ddf3c628ff4&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="350"></iframe>

## How To Check Runtime Type

You can check **_runtime type_** in **dart** with `.runtimeType` after variable name.

<iframe src="//dartpad.dev/embed-inline.html?id=ce731bc3927f513c7841ef4476e94026&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="300"></iframe>

## Optionally Typed Language

You may be heard of the **statically-typed** language. It means the data type of variables is known at compile time.
Similarly, **dynamically-typed** language means data types of variables are known at run time. **Dart** supports **
dynamic** and **static** types, so it is called **optionally-typed** language.

## Statically Typed

A language is **statically typed** if the data type of variables is known at compile time. Its main advantage is that
the compiler can quickly check the issues and detect bugs.
<iframe src="//dartpad.dev/embed-inline.html?id=ff4a7e43c5b6269cd92c08282397de05&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="300"></iframe>

## Dynamically Typed Example

A language is **dynamically typed** if the data type of variables is known at run time.

<iframe src="//dartpad.dev/embed-inline.html?id=9bb211ea64c4af2f15438cd09ae898f4&split=70&theme=dark" frameborder="0" allowfullscreen width="100%" height="300"></iframe>

:::tip Note
Using static type helps you to prevent writing silly mistakes in code. It’s a good habit to use static type in dart.
:::