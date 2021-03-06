// @noImplicitToString: true
// @strictNullChecks: true

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

