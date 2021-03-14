# Simplistic-Log

You're more than likely like most of us, using console.log to check output of certain code when we're trying to figure something out. If you use that way long enough you'll notice how lost you can get in all the console outputs. Simplistic-Log is suppose to help out in that regard. It'll inform you when and where the log was called along with what you've told it to write.

Simplistic-Log also allows you to set a certain level for every message. That means if you've set the level at 4 and a DebugMsg is set at 3 then it will not be run but if you then change the level to 3 it will run and log out to console.

Simplistic-Log also comes with default values, by default the level for a DebugMsg is at 0 unless you tell it otherwise. The message for a DebugMsg also holds a default value in case you've forgot to give it one.

Something to remember is, if you set the level for a DebugMsg to be 0 then it will also run no matter the current debug level, 0 means to run no matter any current debug level.

### Default values
Message  = Default debug message

Level    = 0

asObject = true

## Installation

`npm install simplistic-log`

## Examples of use

```js
import { debugMsg, setDebugLevel, getDebugLevel } from 'simplistic-log';

setDebugLevel(2);
main();

function main() {
    helloDebugWorld();
}

function helloDebugWorld() {
    debugMsg('Test #1 at level 0', 0);
    debugMsg('Test #2 at level 1', 1);
    debugMsg('Test #3 at level 2', 2);
    debugMsg('Test #4 at level 3', 3);

    console.log("What is my current debug level:", getDebugLevel())

    // By giving debugMsg a "false" after level value, it'll console.log it all as a String
    debugMsg('Test #1 at level 0 and NOT as an object', 0, false);
}
```

Output
```js
{Timestamp: "2021-03-14 19:50:59", Level: 0, Scope: "helloDebugWorld", message: "Test #1 at level 0"}
{Timestamp: "2021-03-14 19:50:59", Level: 2, Scope: "helloDebugWorld", message: "Test #3 at level 2"}
What is my current debug level: 2
<2021-03-14 19:52:10> [Level=0, Scope=helloDebugWorld] -> Test #1 at level 0 and NOT as an object
```

## Author
Christoffer Hansen - [Github](https://github.com/HansenChristoffer) [npm](https://www.npmjs.com/~hansenchristoffer)
