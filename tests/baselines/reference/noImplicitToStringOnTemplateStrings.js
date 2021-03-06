//// [noImplicitToStringOnTemplateStrings.ts]
let object = {};
let maybeString = Math.random() > 0.5 ? "" : undefined;
let a = `${object}`;
let b = `${null}`;
let c = `${undefined}`;
let d = `${maybeString}`;

// still ok...
let e = `${0}`;

let f = `${Infinity}`;
let g = `${true}`;
let h = `${object.toString()}`;
let i = `${<any>object}`;



//// [noImplicitToStringOnTemplateStrings.js]
var object = {};
var maybeString = Math.random() > 0.5 ? "" : undefined;
var a = "" + object;
var b = "" + null;
var c = "" + undefined;
var d = "" + maybeString;
// still ok...
var e = "" + 0;
var f = "" + Infinity;
var g = "" + true;
var h = "" + object.toString();
var i = "" + object;
