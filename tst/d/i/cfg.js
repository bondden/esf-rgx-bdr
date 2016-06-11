/**
 * Created by Denis Bondarenko (github.com/bondden) on 6/11/16.
 */
"use strict";

module.exports={

  //default rule record
  "dft":{
    "act":"replace",
    "val":"some unbelievable search pattern",
    "mdf":"ig",
    "rpl":""
  },

  //rules data example
  "dat":[
    {
      "act": "replace",
      "val": "join",
      "mdf": "ig",
      "rpl": "",
      "join":{
        "lst":[
          'stroke: #[^;]+;',
          'fill="[^"]+"',
          'lengthAdjust="spacingAndGlyphs"',
          'stroke-width:[^;]+;',
          'font-family="sans-serif"',
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
    },
    {
      val: 'font-size="13"',
      rpl:''
    },
    {
      val: 'style="[\\t\\s]*"',
      rpl:''
    },
    {
      val: '<defs>(.*)<\\/defs>',
      rpl:'<style type="text/css">rect,polygon,path,line,ellipse {fill:none;stroke:DimGrey;stroke-width:1.0;}text {lengthAdjust:spacingAndGlyphs;font-family:"sans-serif";font-size:13;}.h1{font-size:18;font-weight:bold;}.h2{font-size:14;}</style>'
    },
    {
      val: 'filter="url\\(#f1\\)"',
      rpl:''
    },
    {
      val: '[ ]+',
      rpl:' '
    }
  ]
};


