/**
 * Vector 3 class
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @constructor
 */
function Vec3(x, y, z) {
    Object.defineProperty(this, 'x', {value: x, writable: false});
    Object.defineProperty(this, 'y', {value: y, writable: false});
    Object.defineProperty(this, 'z', {value: z, writable: false});

    /**
     * Calculates the norm
     * @returns {number}
     */
    this.norm = () => Math.sqrt(x * x + y * y + z * z);

    /**
     * Returns the addition by v
     * @param {Vec3} v - addend
     * @returns {Vec3}
     */
    this.add = (v) => new Vec3(x + v.x, y + v.y, z + v.z);

    /**
     * Returns the subtraction by v
     * @param {Vec3} v - subtrahend
     * @returns {Vec3}
     */
    this.subtract = (v) => new Vec3(x - v.x, y - v.y, z - v.z);

    /**
     * Returns the component-wise multiplication by v
     * @param {Vec3} v - factor
     * @returns {Vec3}
     */
    this.multiply = (v) => new Vec3(x * v.x, y * v.y, z * v.z);

    /**
     * Returns the component-wise division by v
     * @param {Vec3} v - denominator
     * @returns {Vec3}
     */
    this.divide = (v) => new Vec3(x / v.x, y / v.y, z / v.z);

    /**
     * Returns the multiplication of each component by s
     * @param {number} s - factor
     * @returns {Vec3}
     */
    this.scale = (s) => new Vec3(s * x, s * y, s * z);

    /**
     * Returns the normalized vector
     * @returns {Vec3}
     */
    this.normalize = () => {
        const d = 1 / this.norm();
        return new Vec3(d * x, d * y, d * z);
    };

    /**
     * Returns the dot (inner) product by v
     * @param {Vec3} v - other vector
     * @returns {number}
     */
    this.dot = (v) => x * v.x + y * v.y + z * v.z;

    /**
     * Returns the cross (outer) product by v
     * @param {Vec3} v - other vector
     * @returns {Vec3}
     */
    this.cross = (v) => new Vec3(y * v.z - z * v.y, z * v.x - x * v.z, x * v.y - y * v.x);

    /**
     * Returns this as vec4, w = 1
     * @returns {Vec4}
     */
    this.toVec4 = () => new Vec4(x, y, z, 1);
    /**
     * Returns this as vec4, w = 0
     * @returns {Vec4}
     */
    this.toVec4Zero = () => new Vec4(x, y, z, 0);

    /**
     * Returns this as array
     * @returns {number[]}
     */
    this.toArray = () => [x, y, z];

    /**
     * Returns this as string
     * @returns {string}
     */
    this.toString = () => `[${x}, ${y}, ${z}]`;
}

/**
 * Creates a vector from an array
 * @param array {number[]}
 * @returns {Vec3}
 */
Vec3.fromArray = (array) => new Vec3(array[0], array[1], array[2]);
