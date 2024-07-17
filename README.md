Description
This repository contains my solution to the "Mexican Wave" kata from Codewars. The Mexican Wave, commonly seen in stadiums, is a phenomenon where a crowd stands up and raises their arms in a coordinated wave-like fashion. The challenge is to write a function that replicates this wave effect for a given string.

Problem Statement
Given a string, the function should return an array of strings representing the Mexican Wave. Each element of the array should have exactly one character in uppercase, progressing through the string from left to right.

Example:
For the input string "hello", the output should be: [  "Hello",  "hEllo",  "heLlo",  "helLo",  "hellO"]

Features
Handles input strings with spaces correctly, ignoring spaces when generating the wave.
Returns an empty array for an empty input string.
Maintains the original character casing except for the waved character.
