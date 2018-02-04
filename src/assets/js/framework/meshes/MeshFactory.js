/**
 * @author Claudio
 * @date 02.02.2018
 * @version 1.0
 */

/**
 * Mesh Factory
 * @param {WebGLRenderingContext} gl - WebGL object
 * @param {Program} program - used program
 * @constructor
 */
function MeshFactory(gl, program) {
    let createVertexPosColor = (pos, color) => [pos.x, pos.y, pos.z, color.r, color.g, color.b, color.a];
    let createVertexPosColorUV = (pos, normal, color, uv) => [pos.x, pos.y, pos.z, color.r, color.g, color.b, color.a, uv.u, uv.v];
    let createVertexPosNormalColor = (pos, normal, color) => [pos.x, pos.y, pos.z, normal.x, normal.y, normal.z, color.r, color.g, color.b, color.a];
    let createVertexPosNormalColorUV = (pos, normal, color, uv) => [pos.x, pos.y, pos.z, normal.x, normal.y, normal.z, color.r, color.g, color.b, color.a, uv.u, uv.v];

    /**
     * Creates a centered cube based on program's settings
     * @param {number} x - width
     * @param {number} y - height
     * @param {number} z - depth
     * @param {Object} color
     * @param {number} color.r
     * @param {number} color.g
     * @param {number} color.b
     * @param {number} color.a
     * @returns {Mesh} cube
     * @constructor
     */
    this.CreateCube = (x, y, z, color) => {
        const x2 = x * 0.5;
        const y2 = y * 0.5;
        const z2 = z * 0.5;

        const pos = [
            {x: -x2, y: -y2, z: z2},
            {x: x2, y: -y2, z: z2},
            {x: x2, y: -y2, z: -z2},
            {x: -x2, y: -y2, z: -z2},
            {x: -x2, y: y2, z: z2},
            {x: x2, y: y2, z: z2},
            {x: x2, y: y2, z: -z2},
            {x: -x2, y: y2, z: -z2}
        ];
        const normals = [
            {x: 1, y: 0, z: 0},
            {x: -1, y: 0, z: 0},
            {x: 0, y: 1, z: 0},
            {x: 0, y: -1, z: 0},
            {x: 0, y: 0, z: 1},
            {x: 0, y: 0, z: -1},
        ];
        const uvs = [
            {u: 0, v: 0},
            {u: 1, v: 0},
            {u: 0, v: 1},
            {u: 1, v: 1},
        ];

        const mesh = new Mesh(gl, program.hProgram, program.type.attr);
        let vertices;
        switch (program.type.h) {
            case Program.TYPES.POS_COLOR.h:
                vertices = [
                    createVertexPosColor(pos[0], color),
                    createVertexPosColor(pos[1], color),
                    createVertexPosColor(pos[2], color),
                    createVertexPosColor(pos[0], color),
                    createVertexPosColor(pos[2], color),
                    createVertexPosColor(pos[3], color),

                    createVertexPosColor(pos[0], color),
                    createVertexPosColor(pos[1], color),
                    createVertexPosColor(pos[5], color),
                    createVertexPosColor(pos[0], color),
                    createVertexPosColor(pos[5], color),
                    createVertexPosColor(pos[4], color),

                    createVertexPosColor(pos[1], color),
                    createVertexPosColor(pos[2], color),
                    createVertexPosColor(pos[6], color),
                    createVertexPosColor(pos[1], color),
                    createVertexPosColor(pos[6], color),
                    createVertexPosColor(pos[5], color),

                    createVertexPosColor(pos[2], color),
                    createVertexPosColor(pos[3], color),
                    createVertexPosColor(pos[7], color),
                    createVertexPosColor(pos[2], color),
                    createVertexPosColor(pos[7], color),
                    createVertexPosColor(pos[6], color),

                    createVertexPosColor(pos[3], color),
                    createVertexPosColor(pos[0], color),
                    createVertexPosColor(pos[4], color),
                    createVertexPosColor(pos[3], color),
                    createVertexPosColor(pos[4], color),
                    createVertexPosColor(pos[7], color),

                    createVertexPosColor(pos[4], color),
                    createVertexPosColor(pos[5], color),
                    createVertexPosColor(pos[6], color),
                    createVertexPosColor(pos[4], color),
                    createVertexPosColor(pos[6], color),
                    createVertexPosColor(pos[7], color),
                ];
                break;
            case Program.TYPES.POS_COLOR_UV.h:
                vertices = [
                    createVertexPosColorUV(pos[0], color, uvs[0]),
                    createVertexPosColorUV(pos[1], color, uvs[2]),
                    createVertexPosColorUV(pos[2], color, uvs[3]),
                    createVertexPosColorUV(pos[0], color, uvs[0]),
                    createVertexPosColorUV(pos[2], color, uvs[3]),
                    createVertexPosColorUV(pos[3], color, uvs[1]),

                    createVertexPosColorUV(pos[0], color, uvs[0]),
                    createVertexPosColorUV(pos[1], color, uvs[2]),
                    createVertexPosColorUV(pos[5], color, uvs[3]),
                    createVertexPosColorUV(pos[0], color, uvs[0]),
                    createVertexPosColorUV(pos[5], color, uvs[3]),
                    createVertexPosColorUV(pos[4], color, uvs[1]),

                    createVertexPosColorUV(pos[1], color, uvs[0]),
                    createVertexPosColorUV(pos[2], color, uvs[2]),
                    createVertexPosColorUV(pos[6], color, uvs[3]),
                    createVertexPosColorUV(pos[1], color, uvs[0]),
                    createVertexPosColorUV(pos[6], color, uvs[3]),
                    createVertexPosColorUV(pos[5], color, uvs[1]),

                    createVertexPosColorUV(pos[2], color, uvs[0]),
                    createVertexPosColorUV(pos[3], color, uvs[2]),
                    createVertexPosColorUV(pos[7], color, uvs[3]),
                    createVertexPosColorUV(pos[2], color, uvs[0]),
                    createVertexPosColorUV(pos[7], color, uvs[3]),
                    createVertexPosColorUV(pos[6], color, uvs[1]),

                    createVertexPosColorUV(pos[3], color, uvs[0]),
                    createVertexPosColorUV(pos[0], color, uvs[2]),
                    createVertexPosColorUV(pos[4], color, uvs[3]),
                    createVertexPosColorUV(pos[3], color, uvs[0]),
                    createVertexPosColorUV(pos[4], color, uvs[3]),
                    createVertexPosColorUV(pos[7], color, uvs[1]),

                    createVertexPosColorUV(pos[4], color, uvs[0]),
                    createVertexPosColorUV(pos[5], color, uvs[2]),
                    createVertexPosColorUV(pos[6], color, uvs[3]),
                    createVertexPosColorUV(pos[4], color, uvs[0]),
                    createVertexPosColorUV(pos[6], color, uvs[3]),
                    createVertexPosColorUV(pos[7], color, uvs[1]),
                ];
                break;
            case Program.TYPES.POS_NORMAL_COLOR.h:
                vertices = [
                    createVertexPosNormalColor(pos[0], normals[3], color),
                    createVertexPosNormalColor(pos[1], normals[3], color),
                    createVertexPosNormalColor(pos[2], normals[3], color),
                    createVertexPosNormalColor(pos[0], normals[3], color),
                    createVertexPosNormalColor(pos[2], normals[3], color),
                    createVertexPosNormalColor(pos[3], normals[3], color),

                    createVertexPosNormalColor(pos[0], normals[4], color),
                    createVertexPosNormalColor(pos[1], normals[4], color),
                    createVertexPosNormalColor(pos[5], normals[4], color),
                    createVertexPosNormalColor(pos[0], normals[4], color),
                    createVertexPosNormalColor(pos[5], normals[4], color),
                    createVertexPosNormalColor(pos[4], normals[4], color),

                    createVertexPosNormalColor(pos[1], normals[0], color),
                    createVertexPosNormalColor(pos[2], normals[0], color),
                    createVertexPosNormalColor(pos[6], normals[0], color),
                    createVertexPosNormalColor(pos[1], normals[0], color),
                    createVertexPosNormalColor(pos[6], normals[0], color),
                    createVertexPosNormalColor(pos[5], normals[0], color),

                    createVertexPosNormalColor(pos[2], normals[5], color),
                    createVertexPosNormalColor(pos[3], normals[5], color),
                    createVertexPosNormalColor(pos[7], normals[5], color),
                    createVertexPosNormalColor(pos[2], normals[5], color),
                    createVertexPosNormalColor(pos[7], normals[5], color),
                    createVertexPosNormalColor(pos[6], normals[5], color),

                    createVertexPosNormalColor(pos[3], normals[1], color),
                    createVertexPosNormalColor(pos[0], normals[1], color),
                    createVertexPosNormalColor(pos[4], normals[1], color),
                    createVertexPosNormalColor(pos[3], normals[1], color),
                    createVertexPosNormalColor(pos[4], normals[1], color),
                    createVertexPosNormalColor(pos[7], normals[1], color),

                    createVertexPosNormalColor(pos[4], normals[2], color),
                    createVertexPosNormalColor(pos[5], normals[2], color),
                    createVertexPosNormalColor(pos[6], normals[2], color),
                    createVertexPosNormalColor(pos[4], normals[2], color),
                    createVertexPosNormalColor(pos[6], normals[2], color),
                    createVertexPosNormalColor(pos[7], normals[2], color),
                ];
                break;
            case Program.TYPES.POS_NORMAL_COLOR_UV.h:
                vertices = [
                    createVertexPosNormalColorUV(pos[0], normals[3], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[1], normals[3], color, uvs[2]),
                    createVertexPosNormalColorUV(pos[2], normals[3], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[0], normals[3], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[2], normals[3], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[3], normals[3], color, uvs[1]),

                    createVertexPosNormalColorUV(pos[0], normals[4], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[1], normals[4], color, uvs[2]),
                    createVertexPosNormalColorUV(pos[5], normals[4], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[0], normals[4], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[5], normals[4], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[4], normals[4], color, uvs[1]),

                    createVertexPosNormalColorUV(pos[1], normals[0], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[2], normals[0], color, uvs[2]),
                    createVertexPosNormalColorUV(pos[6], normals[0], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[1], normals[0], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[6], normals[0], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[5], normals[0], color, uvs[1]),

                    createVertexPosNormalColorUV(pos[2], normals[5], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[3], normals[5], color, uvs[2]),
                    createVertexPosNormalColorUV(pos[7], normals[5], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[2], normals[5], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[7], normals[5], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[6], normals[5], color, uvs[1]),

                    createVertexPosNormalColorUV(pos[3], normals[1], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[0], normals[1], color, uvs[2]),
                    createVertexPosNormalColorUV(pos[4], normals[1], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[3], normals[1], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[4], normals[1], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[7], normals[1], color, uvs[1]),

                    createVertexPosNormalColorUV(pos[4], normals[2], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[5], normals[2], color, uvs[2]),
                    createVertexPosNormalColorUV(pos[6], normals[2], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[4], normals[2], color, uvs[0]),
                    createVertexPosNormalColorUV(pos[6], normals[2], color, uvs[3]),
                    createVertexPosNormalColorUV(pos[7], normals[2], color, uvs[1]),
                ];
                break;
        }
        mesh.addAllArrays(vertices, gl.TRIANGLES);
        return mesh;
    };
}