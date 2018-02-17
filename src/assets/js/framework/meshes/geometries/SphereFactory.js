// /**
//  * Created by Claudio on 27.03.2017.
//  */
//
// function RotBall(gl, p, radius, n1, n2) {
//     const a = 2 * Math.PI / n1;
//     const e = Math.PI / n2;
//     const points = [];
//     for (let i = 0; i < n1; i++) {
//         const ic = Math.cos(i * a);
//         const is = Math.sin(i * a);
//         points.push([]);
//         for (let j = 0; j <= n2; j++) {
//             points[i].push([]);
//
//             const xz = radius * Math.sin(j * e);
//
//             points[i][j].push(xz * ic);                    //x
//             points[i][j].push(radius * Math.cos(j * e));  //y
//             points[i][j].push(xz * is);                    //z
//
//             points[i][j].push(points[i][j][0]);                         //nx
//             points[i][j].push(points[i][j][1]);                         //ny
//             points[i][j].push(points[i][j][2]);                         //nz
//         }
//     }
//
//     this.drawArea = function () {
//         for (var i = 0; i < n1; i++) {
//             for (var j = 0; j <= n2; j++) {
//                 vBuf.setNormal(points[i][j][3], points[i][j][4], points[i][j][5]);
//                 vBuf.putVertex(points[i][j][0], points[i][j][1], points[i][j][2]);
//                 var i2 = (i + 1) % n1;
//                 vBuf.setNormal(points[i2][j][3], points[i2][j][4], points[i2][j][5]);
//                 vBuf.putVertex(points[i2][j][0], points[i2][j][1], points[i2][j][2]);
//             }
//             vBuf.drawArray(gl.TRIANGLE_STRIP);
//         }
//     };
//
//     this.drawGrid = function () {
//         // n1 altitudes
//         for (var i = 0; i < n1; i++) {
//             for (var j = 0; j <= n2; j++) {
//                 vBuf.setNormal(points[i][j][3], points[i][j][4], points[i][j][5]);
//                 vBuf.putVertex(points[i][j][0], points[i][j][1], points[i][j][2]);
//             }
//             vBuf.drawArray(gl.LINE_STRIP);
//         }
//         // n2 longitudes
//         for (j = 1; j < n2; j++) {
//             for (i = 0; i < n1; i++) {
//                 vBuf.setNormal(points[i][j][3], points[i][j][4], points[i][j][5]);
//                 vBuf.putVertex(points[i][j][0], points[i][j][1], points[i][j][2]);
//             }
//             vBuf.drawArray(gl.LINE_LOOP);
//         }
//     };
// }
