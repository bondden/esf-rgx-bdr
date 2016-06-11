# ESF RegExp Builder

## Installation

```bash
npm i esf-rgx-bdr
```

## Running unit tests locally

```bash
esf-puml> npm test
```

## Road Map

Version | Functionality                                     | Status
------- | ------------------------------------------------- | -------
1.0.0   | API 1.0 (req. [esf-rgx-bdr-1.1](esf-rgx-bdr-1.1)) |

## Requirements
### esf-rgx-bdr-1

TP  | ReqId           | Requirement                                                    | Verification Methods
--- | --------------- | -------------------------------------------------------------- | --------------------
[ ] | esf-rgx-bdr-1.1 | API 1.0, RegExp function series generation from config object. | at/ut: [idx](tst/index.js)

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
