# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yuliwang/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: function that retrieves the first element from the array
* `tail`: function that retrieves every element except the head (first element) of the array
* `middle`: function that returns the middle element of an array
* `assertArraysEqual`: function that asserts if two arrays are equals
* `assertEqual`: Compare the two values it takes in and print out a message telling us if they match or not
* `assertObjectsEqual`: function that asserts if two objects are equals
* `countLetters`: function that returns counts of each letter of a string
* `countOnly`: function that takes items and returns counts for a specific subset of those items
* `eqArrays`: Takes in two arrays and returns true or false, based on a perfect match
* `eqObjects`: Takes in two objects and returns true or false, based on a perfect match
* `findKey`: function that scans the object and return the first key for which the callback returns a truthy value
* `findKeyByValue`: function that searches for a key on an object where its value matches a given value
* `letterPositions`: function that returns all the indices in the string where each character is found
* `map`: function that creates a new array with the results of calling a provided function on every element in the calling array
* `takeUntil`: function that returns a slice of the array with elements taken from the beginning
* `without`: function that removes elements from an array