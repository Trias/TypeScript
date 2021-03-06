//// [noImplicitToStringOnStringConcatenation.ts]
function empty(){}

let a = "" + 0;
let b = {} + "";
let c = "a" + + "";
let d = false + "";
let e = null + "";
let f = undefined + "";
let g = empty() + "";
// also an error
let h = { toString(){return "fooo";} } + "";

// not an error
let i = String({}) + "";
let j = ({}).toString() + "";
let k = ({} as any) + "";

//// [noImplicitToStringOnStringConcatenation.js]
function empty() { }
var a = "" + 0;
var b = {} + "";
var c = "a" + +"";
var d = false + "";
var e = null + "";
var f = undefined + "";
var g = empty() + "";
// also an error
var h = { toString: function () { return "fooo"; } } + "";
// not an error
var i = String({}) + "";
var j = ({}).toString() + "";
var k = {} + "";
