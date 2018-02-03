/**
 * Vector 4 class
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @constructor
 */
function Vec4(x, y, z, w) {
    Object.defineProperty(this, 'x', {value: x, writable: false});
    Object.defineProperty(this, 'y', {value: y, writable: false});
    Object.defineProperty(this, 'z', {value: z, writable: false});
    Object.defineProperty(this, 'w', {value: w, writable: false});

    /**
     * Returns the perspective division
     * @returns {Vec3}
     */
    this.persDiv = () => {
        const d = 1 / w;
        return new Vec3(d * x , d * y, d * z);
    };

    /**
     * Returns the addition by v
     * @param {Vec4} v - addend
     * @returns {Vec4}
     */
    this.add = (v) => new Vec4(x + v.x, y + v.y, z + v.z, w + v.w);

    /**
     * Returns the subtraction by v
     * @param {Vec4} v - subtrahend
     * @returns {Vec4}
     */
    this.subtract = (v) => new Vec4(x - v.x, y - v.y, z - v.z, w - v.w);

    /**
     * Returns the component-wise multiplication by v
     * @param {Vec4} v - factor
     * @returns {Vec4}
     */
    this.multiply = (v) => new Vec4(x * v.x, y * v.y, z * v.z, w * v.w);

    /**
     * Returns the component-wise division by v
     * @param {Vec4} v - denominator
     * @returns {Vec4}
     */
    this.divide = (v) => new Vec4(x / v.x, y / v.y, z / v.z, w / v.w);

    /**
     * Returns the multiplication of each component by s
     * @param {number} s - factor
     * @returns {Vec4}
     */
    this.scale = (s) => new Vec4(s * x, s * y, s * z, s * w);

    /**
     * Returns this as vec3, discards w component
     * @returns {Vec3}
     */
    this.toVec3 = () => new Vec3(x, y, z);

    /**
     * Returns this as array
     * @returns {number[]}
     */
    this.toArray = () => [x, y, z, w];

    /**
     * Returns this as string
     * @returns {string}
     */
    this.toString = () => `[${x}, ${y}, ${z}, ${w}]`;
}

/**
 * Creates a vector from an array
 * @param array {number[]}
 * @returns {Vec4}
 */
Vec4.fromArray = (array) => new Vec4(array[0], array[1], array[2], array[3]);
