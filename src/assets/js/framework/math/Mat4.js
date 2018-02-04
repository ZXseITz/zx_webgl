/**
 * Matrix 4x4 class
 * @param {number} a11 - value row 1 column 1
 * @param {number} a12 - value row 1 column 2
 * @param {number} a13 - value row 1 column 3
 * @param {number} a14 - value row 1 column 4
 * @param {number} a21 - value row 2 column 1
 * @param {number} a22 - value row 2 column 2
 * @param {number} a23 - value row 2 column 3
 * @param {number} a24 - value row 2 column 4
 * @param {number} a31 - value row 3 column 1
 * @param {number} a32 - value row 3 column 2
 * @param {number} a33 - value row 3 column 3
 * @param {number} a34 - value row 3 column 4
 * @param {number} a41 - value row 4 column 1
 * @param {number} a42 - value row 4 column 2
 * @param {number} a43 - value row 4 column 3
 * @param {number} a44 - value row 4 column 4
 * @constructor
 */
function Mat4(a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44) {
    /*
    structure:
    a11, a12, a13, a14
    a21, a22, a23, a24
    a31, a32, a33, a34
    a41, a42, a43, a44
     */
    Object.defineProperty(this, 'a11', {value: a11, writable: false});
    Object.defineProperty(this, 'a12', {value: a12, writable: false});
    Object.defineProperty(this, 'a13', {value: a13, writable: false});
    Object.defineProperty(this, 'a14', {value: a14, writable: false});

    Object.defineProperty(this, 'a21', {value: a21, writable: false});
    Object.defineProperty(this, 'a22', {value: a22, writable: false});
    Object.defineProperty(this, 'a23', {value: a23, writable: false});
    Object.defineProperty(this, 'a24', {value: a24, writable: false});

    Object.defineProperty(this, 'a31', {value: a31, writable: false});
    Object.defineProperty(this, 'a32', {value: a32, writable: false});
    Object.defineProperty(this, 'a33', {value: a33, writable: false});
    Object.defineProperty(this, 'a34', {value: a34, writable: false});

    Object.defineProperty(this, 'a41', {value: a41, writable: false});
    Object.defineProperty(this, 'a42', {value: a42, writable: false});
    Object.defineProperty(this, 'a43', {value: a43, writable: false});
    Object.defineProperty(this, 'a44', {value: a44, writable: false});

    /**
     * Returns the addition by M
     * @param {Mat4} M - addend
     * @returns {Mat4}
     */
    this.add = (M) => new Mat4(
        a11 + M.a11, a12 + M.a12, a13 + M.a13, a14 + M.a14,
        a21 + M.a21, a22 + M.a22, a23 + M.a23, a24 + M.a24,
        a31 + M.a31, a32 + M.a32, a33 + M.a33, a34 + M.a34,
        a41 + M.a41, a42 + M.a42, a43 + M.a43, a44 + M.a44
    );

    /**
     * Returns the subtraction by M
     * @param {Mat4} M - subtrahend
     * @returns {Mat4}
     */
    this.subtract = (M) => new Mat4(
        a11 - M.a11, a12 - M.a12, a13 - M.a13, a14 - M.a14,
        a21 - M.a21, a22 - M.a22, a23 - M.a23, a24 - M.a24,
        a31 - M.a31, a32 - M.a32, a33 - M.a33, a34 - M.a34,
        a41 - M.a41, a42 - M.a42, a43 - M.a43, a44 - M.a44
    );

    /**
     * Returns the multiplication of each component by s
     * @param {number} s - factor
     * @returns {Mat4}
     */
    this.scale = (s) => new Mat4(
        s * a11, s * a12, s * a13, s * a14,
        s * a21, s * a22, s * a23, s * a24,
        s * a31, s * a32, s * a33, s * a34,
        s * a41, s * a42, s * a43, s * a44
    );

    /**
     * Returns the multiplication by M
     * @param {Mat4} M - factor
     * @returns {Mat4}
     */
    this.multiplyMat4 = (M) => new Mat4(
        a11 * M.a11 + a12 * M.a21 + a13 * M.a31 + a14 * M.a41,
        a11 * M.a12 + a12 * M.a22 + a13 * M.a32 + a14 * M.a42,
        a11 * M.a13 + a12 * M.a23 + a13 * M.a33 + a14 * M.a43,
        a11 * M.a14 + a12 * M.a24 + a13 * M.a34 + a14 * M.a44,

        a21 * M.a11 + a22 * M.a21 + a23 * M.a31 + a24 * M.a41,
        a21 * M.a12 + a22 * M.a22 + a23 * M.a32 + a24 * M.a42,
        a21 * M.a13 + a22 * M.a23 + a23 * M.a33 + a24 * M.a43,
        a21 * M.a14 + a22 * M.a24 + a23 * M.a34 + a24 * M.a44,

        a31 * M.a11 + a32 * M.a21 + a33 * M.a31 + a34 * M.a41,
        a31 * M.a12 + a32 * M.a22 + a33 * M.a32 + a34 * M.a42,
        a31 * M.a13 + a32 * M.a23 + a33 * M.a33 + a34 * M.a43,
        a31 * M.a14 + a32 * M.a24 + a33 * M.a34 + a34 * M.a44,

        a41 * M.a11 + a42 * M.a21 + a43 * M.a31 + a44 * M.a41,
        a41 * M.a12 + a42 * M.a22 + a43 * M.a32 + a44 * M.a42,
        a41 * M.a13 + a42 * M.a23 + a43 * M.a33 + a44 * M.a43,
        a41 * M.a14 + a42 * M.a24 + a43 * M.a34 + a44 * M.a44,
    );

    /**
     * Returns the multiplication by v
     * @param {Vec4} v - factor
     * @returns {Vec4}
     */
    this.multiplyVec4 = (v) => new Vec4(
        a11 * v.x + a12 * v.y + a13 * v.z + a14 * v.w,
        a21 * v.x + a22 * v.y + a23 * v.z + a24 * v.w,
        a31 * v.x + a32 * v.y + a33 * v.z + a34 * v.w,
        a41 * v.x + a42 * v.y + a43 * v.z + a44 * v.w,
    );

    /**
     * Returns the transposed matrix
     * @returns {Mat4}
     */
    this.transpose = () => new Mat4(
        a11, a21, a31, a41,
        a12, a22, a32, a42,
        a13, a23, a33, a43,
        a14, a24, a34, a44
    );

    /**
     * Calculates the determinant
     * @returns {number}
     */
    this.determinant = () =>
        a14 * a23 * a32 * a41 - a13 * a24 * a32 * a41 - a14 * a22 * a33 * a41
      + a12 * a24 * a33 * a41 + a13 * a22 * a34 * a41 - a12 * a23 * a34 * a41
      - a14 * a23 * a31 * a42 + a13 * a24 * a31 * a42 + a14 * a21 * a33 * a42
      - a11 * a24 * a33 * a42 - a13 * a21 * a34 * a42 + a11 * a23 * a34 * a42
      + a14 * a22 * a31 * a43 - a12 * a24 * a31 * a43 - a14 * a21 * a32 * a43
      + a11 * a24 * a32 * a43 + a12 * a21 * a34 * a43 - a11 * a22 * a34 * a43
      - a13 * a22 * a31 * a44 + a12 * a23 * a31 * a44 + a13 * a21 * a32 * a44
      - a11 * a23 * a32 * a44 - a12 * a21 * a33 * a44 + a11 * a22 * a33 * a44;

    /**
     * Returns the inverse matrix
     * @returns {Mat4 | null}
     */
    this.inverse = () => {
        let d = this.determinant();
        if (d === 0)
            return null;
        d = 1 / d;

        return new Mat4(
            (a32 * a43 * a24 - a42 * a33 * a24 + a42 * a23 * a34 - a22 * a43 * a34 - a32 * a23 * a44 + a22 * a33 * a44) * d,
            (a42 * a33 * a14 - a32 * a43 * a14 - a42 * a13 * a34 + a12 * a43 * a34 + a32 * a13 * a44 - a12 * a33 * a44) * d,
            (a22 * a43 * a14 - a42 * a23 * a14 + a42 * a13 * a24 - a12 * a43 * a24 - a22 * a13 * a44 + a12 * a23 * a44) * d,
            (a32 * a23 * a14 - a22 * a33 * a14 - a32 * a13 * a24 + a12 * a33 * a24 + a22 * a13 * a34 - a12 * a23 * a34) * d,
            (a41 * a33 * a24 - a31 * a43 * a24 - a41 * a23 * a34 + a21 * a43 * a34 + a31 * a23 * a44 - a21 * a33 * a44) * d,
            (a31 * a43 * a14 - a41 * a33 * a14 + a41 * a13 * a34 - a11 * a43 * a34 - a31 * a13 * a44 + a11 * a33 * a44) * d,
            (a41 * a23 * a14 - a21 * a43 * a14 - a41 * a13 * a24 + a11 * a43 * a24 + a21 * a13 * a44 - a11 * a23 * a44) * d,
            (a21 * a33 * a14 - a31 * a23 * a14 + a31 * a13 * a24 - a11 * a33 * a24 - a21 * a13 * a34 + a11 * a23 * a34) * d,
            (a31 * a42 * a24 - a41 * a32 * a24 + a41 * a22 * a34 - a21 * a42 * a34 - a31 * a22 * a44 + a21 * a32 * a44) * d,
            (a41 * a32 * a14 - a31 * a42 * a14 - a41 * a12 * a34 + a11 * a42 * a34 + a31 * a12 * a44 - a11 * a32 * a44) * d,
            (a21 * a42 * a14 - a41 * a22 * a14 + a41 * a12 * a24 - a11 * a42 * a24 - a21 * a12 * a44 + a11 * a22 * a44) * d,
            (a31 * a22 * a14 - a21 * a32 * a14 - a31 * a12 * a24 + a11 * a32 * a24 + a21 * a12 * a34 - a11 * a22 * a34) * d,
            (a41 * a32 * a23 - a31 * a42 * a23 - a41 * a22 * a33 + a21 * a42 * a33 + a31 * a22 * a43 - a21 * a32 * a43) * d,
            (a31 * a42 * a13 - a41 * a32 * a13 + a41 * a12 * a33 - a11 * a42 * a33 - a31 * a12 * a43 + a11 * a32 * a43) * d,
            (a41 * a22 * a13 - a21 * a42 * a13 - a41 * a12 * a23 + a11 * a42 * a23 + a21 * a12 * a43 - a11 * a22 * a43) * d,
            (a21 * a32 * a13 - a31 * a22 * a13 + a31 * a12 * a23 - a11 * a32 * a23 - a21 * a12 * a33 + a11 * a22 * a33) * d);
    };

    /**
     * Returns matrix as array
     * @returns {number[]}
     */
    this.toArray = () => [
        a11, a12, a13, a14,
        a21, a22, a23, a24,
        a31, a32, a33, a34,
        a41, a42, a43, a44];

    /**
     * Returns transposed matrix as array
     * @returns {number[]}
     */
    this.toTransposedArray = () => [
        a11, a21, a31, a41,
        a12, a22, a32, a42,
        a13, a23, a33, a43,
        a14, a24, a34, a44];

    /**
     * Returns matrix as string
     * @returns {string}
     */
    this.toString = () => `[${a11}, ${a12}, ${a13}, ${a14}\n ${a21}, ${a22}, ${a23}, ${a24}\n ${a31}, ${a32}, ${a33}, ${a34}\n ${a41}, ${a42}, ${a43}, ${a44}]`;
}

/**
 * Zero matrix
 * @type {Mat4}
 */
Mat4.ZERO = new Mat4(
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0);
/**
 * Identity matrix
 * @type {Mat4}
 */
Mat4.ID = new Mat4(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1);
/**
 * One matrix
 * @type {Mat4}
 */
Mat4.ONE = new Mat4(
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1);
/**
 * Creates translation matrix
 * @param {number} x - translation in x direction
 * @param {number} y - translation in y direction
 * @param {number} z - translation in z direction
 * @returns {Mat4}
 */
Mat4.createTranslation = (x, y, z) => new Mat4(
    1, 0, 0, x,
    0, 1, 0, y,
    0, 0, 1, z,
    0, 0, 0, 1);
/**
 * Creates a rotation matrix
 * @param {number} phi - angle counterclockwise in radian
 * @param {Vec3} axis - axis direction
 * @returns {Mat4}
 */
Mat4.createRotation = (phi, axis) => {
    axis = axis.normalize();
    const x = axis.x;
    const y = axis.y;
    const z = axis.z;
    const c = Math.cos(phi);
    const ic = 1 - c;
    const s = Math.sin(phi);
    const xy = x * y;
    const xz = x * z;
    const xs = x * s;
    const ys = y * s;
    const yz = y * z;
    const zs = z * s;

    const a11 = x * x * ic + c;
    const a12 = xy * ic - zs;
    const a13 = xz * ic + ys;
    const a21 = xy * ic + zs;
    const a22 = y * y * ic + c;
    const a23 = yz * ic - xs;
    const a31 = xz * ic - ys;
    const a32 = yz * ic + xs;
    const a33 = z * z * ic + c;

    return new Mat4(
        a11, a12, a13, 0,
        a21, a22, a23, 0,
        a31, a32, a33, 0,
        0, 0, 0, 1);
};
/**
 * Creates a rotation matrix around x axis
 * @param {number} phi - angle counterclockwise in radian
 * @returns {Mat4}
 */
Mat4.createRotationX = (phi) => new Mat4(
    1, 0, 0, 0,
    0, Math.cos(phi), -Math.sin(phi), 0,
    0, Math.sin(phi), Math.cos(phi), 0,
    0, 0, 0, 1);
/**
 * Creates a rotation matrix around y axis
 * @param {number} phi - angle counterclockwise in radian
 * @returns {Mat4}
 */
Mat4.createRotationY = (phi) => new Mat4(
    Math.cos(phi), 0, Math.sin(phi), 0,
    0, 1, 0, 0,
    -Math.sin(phi), 0, Math.cos(phi), 0,
    0, 0, 0, 1);
/**
 * Creates a rotation matrix around z axis
 * @param {number} phi - angle counterclockwise in radian
 * @returns {Mat4}
 */
Mat4.createRotationZ = (phi) => new Mat4(
    Math.cos(phi), -Math.sin(phi), 0, 0,
    Math.sin(phi), Math.cos(phi), 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1);
/**
 * Creates a scaling matrix
 * @param {number} x - scaling factor in x direction
 * @param {number} y - scaling factor in y direction
 * @param {number} z - scaling factor in z direction
 * @returns {Mat4}
 */
Mat4.createScale = (x, y, z) => new Mat4(
    x, 0, 0, 0,
    0, y, 0, 0,
    0, 0, z, 0,
    0, 0, 0, 1);
/**
 * Creates a lookAt matrix
 * @param {Vec3} eye - camera position
 * @param {Vec3} target - camera focus
 * @param {Vec3} up - up vector
 * @returns {Mat4}
 */
Mat4.createLookAt = (eye, target, up) => {
    up = up.normalize();
    const d = target.subtract(eye).normalize();
    const x = d.cross(up);
    const y = x.cross(d);
    const t = eye.scale(-1);
    const a11 = x.x;
    const a12 = y.x;
    const a13 = -d.x;
    const a21 = x.y;
    const a22 = y.y;
    const a23 = -d.y;
    const a31 = x.z;
    const a32 = y.z;
    const a33 = -d.z;
    const a41 = x.x * t.x + x.y * t.y + x.z * t.z;
    const a42 = y.x * t.x + y.y * t.y + y.z * t.z;
    const a43 = -d.x * t.x - d.y * t.y - d.z * t.z;
    return new Mat4(
        a11, a12, a13, 0,
        a21, a22, a23, 0,
        a31, a32, a33, 0,
        a41, a42, a43, 1);
};
/**
 * Creates an orthogonal projection matrix
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 * @returns {Mat4}
 */
Mat4.createOrthogonalProjection = (left, right, bottom, top, near, far) => {
    const drl = 1 / (right - left);
    const dtb = 1 / (top - bottom);
    const dfn = 1 / (far - near);
    const a11 = 2 * drl;
    const a22 = 2 * dtb;
    const a33 = -2 * dfn;
    const a14 = -(right + left) * drl;
    const a24 = -(top + bottom) * dtb;
    const a34 = -(far + near) * dfn;
    return new Mat4(
        a11, 0, 0, a14,
        0, a22, 0, a24,
        0, 0, a33, a34,
        0, 0, 0, 1);
};
/**
 * Creates a perspective projection matrix
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 * @returns {Mat4}
 */
Mat4.createPerspectiveProjection = (left, right, bottom, top, near, far) => {
    const drl = 1 / (right - left);
    const dtb = 1 / (top - bottom);
    const dfn = 1 / (far - near);
    const a11 = drl * 2 * near;
    const a22 = dtb * 2 * near;
    const a13 = drl * (right + left);
    const a23 = dtb * (top + bottom);
    const a33 = -(far + near) * dfn;
    const a34 = -2 * far * near * dfn;
    return new Mat4(
        a11, 0, a13, 0,
        0, a22, a23, 0,
        0, 0, a33, a34,
        0, 0, -1, 0);
};