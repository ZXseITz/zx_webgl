// /**
//  * Created by Claudio on 29.03.2017.
//  */
//
// function GeoPyramid(gl, vBuf, a, b, c, d, h) {
//     this.drawCurvedSurfaceArea = function () {
//         vBuf.setNormalVector(a.subtract(h).cross(h.subtract(b)));
//         vBuf.putVector(a);
//         vBuf.putVector(b);
//         vBuf.putVector(h);
//
//         vBuf.setNormalVector(b.subtract(h).cross(h.subtract(c)));
//         vBuf.putVector(b);
//         vBuf.putVector(c);
//         vBuf.putVector(h);
//
//         vBuf.setNormalVector(c.subtract(h).cross(h.subtract(d)));
//         vBuf.putVector(c);
//         vBuf.putVector(d);
//         vBuf.putVector(h);
//
//         vBuf.setNormalVector(d.subtract(h).cross(h.subtract(a)));
//         vBuf.putVector(d);
//         vBuf.putVector(a);
//         vBuf.putVector(h);
//
//         vBuf.drawArray(gl.TRIANGLES);
//     };
//
//     this.drawGrid = function () {
//         vBuf.putVector(a);
//         vBuf.putVector(b);
//
//         vBuf.putVector(b);
//         vBuf.putVector(c);
//
//         vBuf.putVector(c);
//         vBuf.putVector(d);
//
//         vBuf.putVector(d);
//         vBuf.putVector(a);
//
//         vBuf.putVector(a);
//         vBuf.putVector(h);
//
//         vBuf.putVector(b);
//         vBuf.putVector(h);
//
//         vBuf.putVector(c);
//         vBuf.putVector(h);
//
//         vBuf.putVector(d);
//         vBuf.putVector(h);
//
//         vBuf.drawArray(gl.LINES);
//     };
// }
