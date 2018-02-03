/**
 * Vector 3 class
 * @param x value
 * @param y value
 * @param z value
 * @constructor
 */
function Vec3(x, y, z) {
    Object.defineProperty(this, 'x', {value: x, writable: false});
    Object.defineProperty(this, 'y', {value: y, writable: false});
    Object.defineProperty(this, 'z', {value: z, writable: false});

    this.length = () => Math.sqrt(x * x + y * y + z * z);

    this.add = (v) => new Vec3(x + v.x, y + v.y, z + v.z);

    this.subtract = (v) => new Vec3(x - v.x, y - v.y, z - v.z);

    this.multiply = (v) => new Vec3(x * v.x, y * v.y, z * v.z);

    this.divide = (v) => new Vec3(x / v.x, y / v.y, z / v.z);

    this.scale = (s) => new Vec3(s * x, s * y, s * z);

    this.normalize = () => {
        const d = 1 / this.length();
        return new Vec3(d * x, d * y, d * z);
    };

    this.dot = (v) => x * v.x + y * v.y + z * v.z;

    this.cross = (v) => new Vec3(y * v.z - z * v.y, z * v.x - x * v.z, x * v.y - y * v.x);

    this.toVec4 = () => new Vec4(x, y, z, 1);
    this.toVec4Zero = () => new Vec4(x, y, z, 0);

    this.toArray = () => [x, y, z];

    this.toString = () => `[${x}, ${y}, ${z}]`;
}

Vec3.fromArray = (a) => new Vec3(a[0], a[1], a[2]);
