// @noImplicitToString: true

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