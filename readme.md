# ESF RegExp Builder

[![Build Status](https://travis-ci.org/bondden/esf-rgx-bdr.svg?branch=master)](https://travis-ci.org/bondden/esf-rgx-bdr.svg?branch=master)

## Installation

```bash
npm i esf-rgx-bdr
```

## Usage

```js

// require the esf-rgx-bdr module
const 
  mod=require('esf-rgx-bdr'),
  
// set all RegExp rules in config object:
  
  cfg={
    dat:[
      {
        "val": "join",
        "mdf": "ig",
        "rpl": "",
        "join":{
          "lst":[
            'stroke: #[^;]+;',
            'fill="[^"]+"',
            'lengthAdjust="spacingAndGlyphs"',
            'stroke-width:[^;]+;',
            'font-weight="[^"]+"'
          ],
          "dlm":"|"
        }
      },
      {
        val: 'font-size="18"',
        rpl:'class="h1"'
      },
      {
        val: 'font-size="14"',
        rpl:'class="h2"'
      }
    ]
  }
  ; 

// generate a function:
let fun=mod(cfg);

let stringToBeCleaned='PUT YOUR DATA HERE';

// process your string data with regexp-s:
let cleanSring=fun(stringToBeCleaned);

```

## Running unit tests locally

```bash
esf-puml> npm test
```

## Road Map

Version | Functionality                                     | Status
------- | ------------------------------------------------- | --------
1.0.0   | API 1.0 (req. [esf-rgx-bdr-1.1](esf-rgx-bdr-1.1)) | released

## Requirements
### esf-rgx-bdr-1

TP  | ReqId           | Requirement                                                    | Verification Methods
--- | --------------- | -------------------------------------------------------------- | --------------------
[x] | esf-rgx-bdr-1.1 | API 1.0, RegExp function series generation from config object. | at/ut: [idx](tst/index.js)

## API
### v.1.0

Return Type  | Method  | Parameters   | Comment
------------ | ------- | -------------| -------
`Function`   | `main`  | `object cfg` |

Config object:

```js
cfg = {

  //schema
  "shm": {
    "$schema": "http://shm.itms.pro/esf-rgx-bdr/schema#",
    "type": "object",
    "properties": {
      "dat": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "act": {
              "type": "string",
              "default": "replace"
            },
            "val": {
              "type": "string",
              "default": "search pattern"
            },
            "mdf": {
              "type": "string",
              "default": "ig"
            },
            "rpl": {
              "type": "string",
              "default": ""
            },
            "join": {
              "type": "object",
              "properties": {
                "lst": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "dlm": {
                  "type": "string",
                  "default": "|"
                }
              },
              "required": [
                "lst",
                "dlm"
              ]
            }
          },
          "required": [
            "act",
            "val",
            "mdf",
            "rpl"
          ]
        }
      }
    },
    "required": [
      "dat"
    ]
  },

  //default rule record
  "dft": {
    "act": "replace",
    "val": "search pattern",
    "mdf": "ig",
    "rpl": ""
  },

  //rules data example
  "dat": [
    {
      "act": "replace",
      "val": "join",
      "mdf": "ig",
      "rpl": "",
      "join": {
        "lst": [],
        "dlm": "|"
      }
    },
    {
      "act": "replace",
      "val": "search pattern",
      "mdf": "ig",
      "rpl": "replacement"
    }
  ]

}
```
where
1. `dat` order matters.
2. If `.join` is set, then `.val` doesn't matter.

---

MIT © [bondden](https://github.com/bondden) 2016
