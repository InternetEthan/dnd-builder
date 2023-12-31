# D&D Builder [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

DnD Builder is a Dungeons and Dragons character builder that's all about keeping it simple and letting you create your hero hassle-free. Craft your character quickly and easily with a straightforward tool to bring your adventurer to life.

DnD Builder allows the user to create an account, create and view DnD characters with basic character information and view their character sheets.

## Installation

To start, use ``` Ctrl + Shift + ` ``` to open up the Integrated Terminal. If you can't find where the backtick symbol is on your keyboard, it's usually to the left of the *1* key and above the *Tab* key.

Inside the terminal, you should see that it is in Powershell. To change it to Git Bash, go to the plus icon and click on the arrow besides it. There click on the option, *Git Bash*, to change the terminal to the compatible CLI.

Next, type in the terminal `npm install` or `npm i` to install the correct packages and dependancies. If any problems come up, follow the terminal instructions and use `npm audit fix` and/or `npm audit fix --force` to solve the problem. The instructions might also tell you to use `npm fund`. However, that is not needed.

You will also need to split the terminal to run mySQL. In order to do that, use `Ctrl + Shift + 5` in a terminal instance to split it into two seperate terminal. After that, run the code `mysql -u <username> -p`.

### Note

You will need a mySQL user for this back end. If you don't already have one, go to [this link here](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql) to create a new user.

## Usage

* Access the login/signup page and create or login to your account
* Click the "create character" button to create a new character
* Enter in the following character information:
    1. Character name: Type in as text input
    2. Race: Select from a list
    3. Class: Select from a list
    4. Ability Scores: Randomly generated upon loading character creation page but able to be customized.
    5. Character Portraits: Select from a thumbnail list
* In the profile page, click on your character names to access their character sheets.
* In a character's sheet, you can dynamically change their health points.

## Credits

This was created by Porject 2, Group 7's team, consisting of Ethan Bulter, Emily Knight, Kevin Rosengren, Nataniel Carrasquillo, and Matthew Earls.

## Licence [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2023 InternetEthan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.