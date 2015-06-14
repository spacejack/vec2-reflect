module.exports = reflect

/**
 * Computes 2D vector v reflected off a line whose normal is n.
 * Note: n must be normalized!
 * Written to work with gl-matrix conventions.
 *
 * @param {vec2} out The receiving vector.
 * @param {vec2} v The vector to reflect.
 * @param {vec2} n The normal (normalized) of the line to reflect off of.
 * @returns {vec2} out
 */
function reflect(out, v, n) {
	var d = v[0] * n[0] + v[1] * n[1] //dot(v, n)
	out[0] = v[0] - 2.0 * d * n[0]
	out[1] = v[1] - 2.0 * d * n[1]
	return out
}
