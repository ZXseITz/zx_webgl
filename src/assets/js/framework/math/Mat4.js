/**
 * Matrix 4x4 class
 * @param a11 value row 1 column 1
 * @param a12 value row 1 column 2
 * @param a13 value row 1 column 3
 * @param a14 value row 1 column 4
 * @param a21 value row 2 column 1
 * @param a22 value row 2 column 2
 * @param a23 value row 2 column 3
 * @param a24 value row 2 column 4
 * @param a31 value row 3 column 1
 * @param a32 value row 3 column 2
 * @param a33 value row 3 column 3
 * @param a34 value row 3 column 4
 * @param a41 value row 4 column 1
 * @param a42 value row 4 column 2
 * @param a43 value row 4 column 3
 * @param a44 value row 4 column 4
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

    this.add = (M) => new Mat4(
        a11 + M.a11, a12 + M.a12, a13 + M.a13, a14 + M.a14,
        a21 + M.a21, a22 + M.a22, a23 + M.a23, a24 + M.a24,
        a31 + M.a31, a32 + M.a32, a33 + M.a33, a34 + M.a34,
        a41 + M.a41, a42 + M.a42, a43 + M.a43, a44 + M.a44
    );

    this.subtract = (M) => new Mat4(
        a11 - M.a11, a12 - M.a12, a13 - M.a13, a14 - M.a14,
        a21 - M.a21, a22 - M.a22, a23 - M.a23, a24 - M.a24,
        a31 - M.a31, a32 - M.a32, a33 - M.a33, a34 - M.a34,
        a41 - M.a41, a42 - M.a42, a43 - M.a43, a44 - M.a44
    );

    this.scale = (s) => new Mat4(
        s * a11, s * a12, s * a13, s * a14,
        s * a21, s * a22, s * a23, s * a24,
        s * a31, s * a32, s * a33, s * a34,
        s * a41, s * a42, s * a43, s * a44
    );

    this.multiplyMat4 = (M) => new Mat4(
        a11 * M.a11 + a21 * M.a12 + a31 * M.a13 + a41 * M.a14,
        a12 * M.a11 + a22 * M.a12 + a32 * M.a13 + a42 * M.a14,
        a13 * M.a11 + a23 * M.a12 + a33 * M.a13 + a43 * M.a14,
        a14 * M.a11 + a24 * M.a12 + a34 * M.a13 + a44 * M.a14,
        a11 * M.a21 + a21 * M.a22 + a31 * M.a23 + a41 * M.a24,
        a12 * M.a21 + a22 * M.a22 + a32 * M.a23 + a42 * M.a24,
        a13 * M.a21 + a23 * M.a22 + a33 * M.a23 + a43 * M.a24,
        a14 * M.a21 + a24 * M.a22 + a34 * M.a23 + a44 * M.a24,
        a11 * M.a31 + a21 * M.a32 + a31 * M.a33 + a41 * M.a34,
        a12 * M.a31 + a22 * M.a32 + a32 * M.a33 + a42 * M.a34,
        a13 * M.a31 + a23 * M.a32 + a33 * M.a33 + a43 * M.a34,
        a14 * M.a31 + a24 * M.a32 + a34 * M.a33 + a44 * M.a34,
        a11 * M.a41 + a21 * M.a42 + a31 * M.a43 + a41 * M.a44,
        a12 * M.a41 + a22 * M.a42 + a32 * M.a43 + a42 * M.a44,
        a13 * M.a41 + a23 * M.a42 + a33 * M.a43 + a43 * M.a44,
        a14 * M.a41 + a24 * M.a42 + a34 * M.a43 + a44 * M.a44
    );

    this.multiplyVec4 = (v) => new Vec4(
        a11 * v.x + a21 * v.y + a31 * v.z + a41 * v.w,
        a12 * v.x + a22 * v.y + a32 * v.z + a42 * v.w,
        a13 * v.x + a23 * v.y + a33 * v.z + a43 * v.w,
        a14 * v.x + a24 * v.y + a34 * v.z + a44 * v.w
    );

    this.transpose = () => new Mat4(
        a11, a21, a31, a41,
        a12, a22, a32, a42,
        a13, a23, a33, a43,
        a14, a24, a34, a44
    );

    this.determinant = () =>
        a14 * a23 * a32 * a41 - a13 * a24 * a32 * a41 - a14 * a22 * a33 * a41
      + a12 * a24 * a33 * a41 + a13 * a22 * a34 * a41 - a12 * a23 * a34 * a41
      - a14 * a23 * a31 * a42 + a13 * a24 * a31 * a42 + a14 * a21 * a33 * a42
      - a11 * a24 * a33 * a42 - a13 * a21 * a34 * a42 + a11 * a23 * a34 * a42
      + a14 * a22 * a31 * a43 - a12 * a24 * a31 * a43 - a14 * a21 * a32 * a43
      + a11 * a24 * a32 * a43 + a12 * a21 * a34 * a43 - a11 * a22 * a34 * a43
      - a13 * a22 * a31 * a44 + a12 * a23 * a31 * a44 + a13 * a21 * a32 * a44
      - a11 * a23 * a32 * a44 - a12 * a21 * a33 * a44 + a11 * a22 * a33 * a44;

    this.inverse = () => {
        let d = this.determinant();
        if (d === 0)
            return undefined;
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

    this.toArray = () => [
        a11, a12, a13, a14,
        a21, a22, a23, a24,
        a31, a32, a33, a34,
        a41, a42, a43, a44];

    this.toString = () => `[${a11}, ${a12}, ${a13}, ${a14}\n ${a21}, ${a22}, ${a23}, ${a24}\n ${a31}, ${a32}, ${a33}, ${a34}\n ${a41}, ${a42}, ${a43}, ${a44}`;
}

Mat4.ZERO = new Mat4(
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0);
Mat4.ID = new Mat4(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1);
Mat4.ONE = new Mat4(
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1);

Mat4.createTranslate = (x, y, z) => new Mat4(
    1, 0, 0, x,
    0, 1, 0, y,
    0, 0, 1, z,
    0, 0, 0, 1);

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
    const a12 = xy * ic + zs;
    const a13 = xz * ic - ys;
    const a21 = xy * ic - zs;
    const a22 = y * y * ic + c;
    const a23 = yz * ic + xs;
    const a31 = xz * ic + ys;
    const a32 = yz * ic - xs;
    const a33 = z * z * ic + c;

    return new Mat4(
        a11, a12, a13, 0,
        a21, a22, a23, 0,
        a31, a32, a33, 0,
        0, 0, 0, 1);
};

Mat4.createRotationX = (phi) => new Mat4(
    1, 0, 0, 0,
    0, Math.cos(phi), -Math.sin(phi), 0,
    0, Math.sin(phi), Math.cos(phi), 0,
    0, 0, 0, 1);

Mat4.createRotationY = (phi) => new Mat4(
    Math.cos(phi), 0, Math.sin(phi), 0,
    0, 1, 0, 0,
    -Math.sin(phi), 0, Math.cos(phi), 0,
    0, 0, 0, 1);

Mat4.createRotationZ = (phi) => new Mat4(
    Math.cos(phi), -Math.sin(phi), 0, 0,
    Math.sin(phi), Math.cos(phi), 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1);

Mat4.createScale = (x, y, z) => new Mat4(
    x, 0, 0, 0,
    0, y, 0, 0,
    0, 0, z, 0,
    0, 0, 0, 1);

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

Mat4.createOrthogonalView = (left, right, bottom, top, near, far) => {
    const drl = 1 / (right - left);
    const dtb = 1 / (top - bottom);
    const dfn = 1 / (far - near);
    const a41 = -(right + left) * drl;
    const a42 = -(top + bottom) * dtb;
    const a43 = -(far + near) * dfn;
    const a11 = 2 * drl;
    const a22 = 2 * dtb;
    const a33 = -2 * dfn;
    return new Mat4(
        a11, 0, 0, 0,
        0, a22, 0, 0,
        0, 0, a33, 0,
        a41, a42, a43, 1);
};

Mat4.createPerspectiveView = (left, right, bottom, top, near, far) => {
    const drl = 1 / (right - left);
    const dtb = 1 / (top - bottom);
    const dfn = 1 / (far - near);
    const a11 = drl * 2 * near;
    const a22 = dtb * 2 * near;
    const a31 = drl * (right + left);
    const a32 = dtb * (top + bottom);
    const a33 = -(far + near) * dfn;
    const a43 = -2 * far * near * dfn;
    return new Mat4(
        a11, 0, 0, 0,
        0, a22, 0, 0,
        a31, a32, a33, -1,
        0, 0, a43, 0);
};