var reflect = require('./index');

var v = new Float32Array([1,1])
var n = new Float32Array([0,-1])
var out = new Float32Array(2)

reflect(out, v, n)

console.log("vector:", v, "reflected:", out)
