/**
 * Vector 4 class
 * @param x value
 * @param y value
 * @param z value
 * @param w value
 * @constructor
 */
function Vec4(x, y, z, w) {
    Object.defineProperty(this, 'x', {value: x, writable: false});
    Object.defineProperty(this, 'y', {value: y, writable: false});
    Object.defineProperty(this, 'z', {value: z, writable: false});
    Object.defineProperty(this, 'w', {value: w, writable: false});

    this.persDiv = () => {
        const d = 1 / w;
        return new Vec3(d * x , d * y, d * z);
    };

    this.add = (v) => new Vec4(x + v.x, y + v.y, z + v.z, w + v.w);

    this.subtract = (v) => new Vec4(x - v.x, y - v.y, z - v.z, w - v.w);

    this.multiply = (v) => new Vec4(x * v.x, y * v.y, z * v.z, w * v.w);

    this.divide = (v) => new Vec4(x / v.x, y / v.y, z / v.z, w / v.w);

    this.scale = (s) => new Vec4(s * x, s * y, s * z, s * w);

    this.toVec3 = () => new Vec3(x, y, z);

    this.toArray = () => [x, y, z, w];

    this.toString = () => `[${x}, ${y}, ${z}, ${w}]`;
}

Vec4.fromArray = (a) => new Vec4(a[0], a[1], a[2], a[3]);
