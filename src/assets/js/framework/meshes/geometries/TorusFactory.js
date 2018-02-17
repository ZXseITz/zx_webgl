// /**
//  * Created by Claudio on 27.03.2017.
//  */
//
// function RotTorus(gl, vBuf, R, r, n1, n2) {
//     var a = 2 * Math.PI / n1;
//     var e = 2 * Math.PI / n2;
//     var points = [];
//     for (var i = 0; i < n1; i++) {
//         points.push([]);
//         for (var j = 0; j < n2; j++) {
//             points[i].push([]);
//
//             var xz = r * Math.sin(j * e);
//             var Rxz = R + xz;
//
//             points[i][j].push(Rxz * Math.cos(i * a));                    //x
//             points[i][j].push(r * Math.cos(j * e));  //y
//             points[i][j].push(Rxz * Math.sin(i * a));
//
//             points[i][j].push(xz * Math.cos(i * a));                         //nx
//             points[i][j].push(points[i][j][1]);                         //ny
//             points[i][j].push(xz * Math.sin(i * a));                         //nz
//         }
//     }
//
//     this.drawArea = function () {
//         for (var i = 0; i < n1; i++) {
//             for (var j = 0; j < n2; j++) {
//                 vBuf.setNormal(points[i][j][3], points[i][j][4], points[i][j][5]);
//                 vBuf.putVertex(points[i][j][0], points[i][j][1], points[i][j][2]);
//                 var i2 = (i + 1) % n1;
//                 vBuf.setNormal(points[i2][j][3], points[i2][j][4], points[i2][j][5]);
//                 vBuf.putVertex(points[i2][j][0], points[i2][j][1], points[i2][j][2]);
//             }
//             j = 0;
//             vBuf.setNormal(points[i][j][3], points[i][j][4], points[i][j][5]);
//             vBuf.putVertex(points[i][j][0], points[i][j][1], points[i][j][2]);
//             i2 = (i + 1) % n1;
//             vBuf.setNormal(points[i2][j][3], points[i2][j][4], points[i2][j][5]);
//             vBuf.putVertex(points[i2][j][0], points[i2][j][1], points[i2][j][2]);
//
//             vBuf.drawArray(gl.TRIANGLE_STRIP);
//         }
//     };
//
//     this.drawGrid = function () {
//         // n1 altitudes
//         for (var i = 0; i < n1; i++) {
//             for (var j = 0; j < n2; j++) {
//                 vBuf.setNormal(points[i][j][3], points[i][j][4], points[i][j][5]);
//                 vBuf.putVertex(points[i][j][0], points[i][j][1], points[i][j][2]);
//             }
//             vBuf.drawArray(gl.LINE_LOOP);
//         }
//         // n2 longitudes
//         for (j = 0; j < n2; j++) {
//             for (i = 0; i < n1; i++) {
//                 vBuf.setNormal(points[i][j][3], points[i][j][4], points[i][j][5]);
//                 vBuf.putVertex(points[i][j][0], points[i][j][1], points[i][j][2]);
//             }
//             vBuf.drawArray(gl.LINE_LOOP);
//         }
//     };
// }
