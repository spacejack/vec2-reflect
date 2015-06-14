# vec2-reflect

Calculates a vector reflected off a line defined by its normal.

Normal should be normalized (length 1.)

### Usage:

    var reflect = require('vec2-reflect');

    var v = new Float32Array([1, 1]);
    var n = new Float32Array([0,-1]);
    var result = new Float32Array(2);

    reflect(result, v, n);
