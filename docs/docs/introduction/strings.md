---
sidebar_position: 9
title: Strings in Dart
description: Learn about strings in Dart
---

String data types help you to store text data. In string, you can represent your name, address, or even the entire
complete text of the book. It is used to hold a series or sequence of characters – letters, numbers, and special
characters. You can use single or double or triple quotes to represent string.

## Example

<iframe height="400" src="//dartpad.dev/embed-inline.html?id=82c2a953a4e407e04760698e305baf69&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## String Concatenation

You can combine one string with another string. This is called concatenation. In Dart, you can use the `+` operator or
use **interpolation** to concatenate the string. Interpolation makes it easy to read and understand the code.

### Example

<iframe height="300" src="//dartpad.dev/embed-inline.html?id=03f0327d32831dbda92c87c638654035&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Properties Of String

- **codeUnits**: Returns an unmodifiable list of the UTF-16 code units of this string.
- **isEmpty**: Returns true if this string is empty.
- **isNotEmpty**: Returns false if this string is empty.
- **length**: Returns the length of the string including space, tab, and newline characters.

## String Properties Example In Dart

<iframe height="320" src="//dartpad.dev/embed-inline.html?id=465d11269f6deb867ec481a28bc5e8d2&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Methods Of String

- **toLowerCase()**: Converts all characters in this string to lowercase.
- **toUpperCase()**: Converts all characters in this string to uppercase.
- **trim()**: Returns the string without any leading and trailing whitespace.
- **compareTo()**: Compares this object to another.
- **replaceAll()**: Replaces all substrings that match the specified pattern with a given value.
- **split()**: Splits the string at matches of the specified delimiter and returns a list of substrings.
- **toString()**: Returns a string representation of this object.
- **substring()**: Returns the substring of this string that extends from startIndex, inclusive, to endIndex, exclusive.
- **codeUnitAt()**: Returns the 16-bit UTF-16 code unit at the given index.

## String Methods Example In Dart

Here you will see various methods example, that can help your work a lot better and fast.

## Converting String To Uppercase and Lowercase

You can convert your text to lower case using `.toLowerCase()` and convert to uppercase using `.toUpperCase()` method.

<iframe height="350" src="//dartpad.dev/embed-inline.html?id=32781a4c196ba743603939f4b05c2132&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Trim String In Dart

Trim is helpful when removing leading and trailing spaces from the text. This trim method will remove all the starting
and ending spaces from the text.

:::tip Note
In dart, `trim()` method doesn’t remove spaces in the middle.
:::

<iframe height="360" src="//dartpad.dev/embed-inline.html?id=eef949462fcdf7602d435196bcc12143&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Compare String In Dart

In dart, you can compare two strings. It will give result 0 when two texts are equal, 1 when the first string is greater than the second, and -1 when the first string is smaller than the second.

<iframe height="400" src="//dartpad.dev/embed-inline.html?id=b98cf323976a7e4ab51ad3e71b4979e8&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Replace String In Dart

You can replace one value with another with the `replaceAll(“old”, “new”)` method in dart. It will replace all the “old” words with “new”. Here in this example, this will replace milk with water.

<iframe height="400" src="//dartpad.dev/embed-inline.html?id=0cce0e5e78d439e48d309e8e991a9b49&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Split String In Dart

If you want to split String by comma, space, or other text, you can use the dart split method. It will help you to split String to list.

<iframe height="400" src="//dartpad.dev/embed-inline.html?id=6cf0f4cf54050bcb814c0b1c3785af29&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## ToString In Dart

In dart, `toString()` represents String representation of the value/object.

<iframe height="350" src="//dartpad.dev/embed-inline.html?id=d971be44a8d8e4b81d40299d5aa7f417&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## SubString In Dart

When you want to get text from any position then you can use substring in dart.

<iframe height="350" src="//dartpad.dev/embed-inline.html?id=544cd9ff3b54efd0ea0daf945661defe&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>

## Reverse String In Dart

If you want to reverse string in dart, you can reverse it by using different solution. One solution is here.

<iframe height="250" src="//dartpad.dev/embed-inline.html?id=05ab764e1add78f3e2be952251580567&split=70&theme=dark" frameborder="0" allowfullscreen width="100%"></iframe>
