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
    let defineAttributes = (types) => {
        const attributes = [];
        types.forEach(type => {
            switch (type.name) {
                case 'pos':
                    if (type.size === 3) {
                        attributes.push('pos');
                    }
                    break;
                case 'normal':
                    if (type.size === 3) {
                        attributes.push('normal');
                    }
                    break;
                case 'color':
                    if (type.size === 4) {
                        attributes.push('color');
                    }
                    break;
                case 'uv':
                    if (type.size === 2) {
                        attributes.push('uv');
                    }
                    break;
            }
        });
        return attributes;
    };

    const attributes = defineAttributes(program.types);


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
    this.createCube = (x, y, z, color) => {
        const x2 = x * 0.5;
        const y2 = y * 0.5;
        const z2 = z * 0.5;

        const data = {};
        data.pos = [
            [-x2, -y2, z2],
            [x2, -y2, z2],
            [x2, -y2, -z2],
            [-x2, -y2, -z2],
            [-x2, y2, z2],
            [x2, y2, z2],
            [x2, y2, -z2],
            [-x2, y2, -z2]
        ];
        data.normal = [
            [1, 0, 0],
            [-1, 0, 0],
            [0, 1, 0],
            [0, -1, 0],
            [0, 0, 1],
            [0, 0, -1],
        ];
        data.color = [
            [color.r, color.g, color.b, color.a]
        ];
        data.uv = [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
        ];

        const mesh = new Mesh(gl, program.hProgram);

        const indices = [
            {pos: 0, normal: 3, color: 0, uv: 0},
            {pos: 1, normal: 3, color: 0, uv: 2},
            {pos: 2, normal: 3, color: 0, uv: 3},
            {pos: 0, normal: 3, color: 0, uv: 0},
            {pos: 2, normal: 3, color: 0, uv: 3},
            {pos: 3, normal: 3, color: 0, uv: 1},
            {pos: 0, normal: 4, color: 0, uv: 0},
            {pos: 1, normal: 4, color: 0, uv: 2},
            {pos: 5, normal: 4, color: 0, uv: 3},
            {pos: 0, normal: 4, color: 0, uv: 0},
            {pos: 5, normal: 4, color: 0, uv: 3},
            {pos: 4, normal: 4, color: 0, uv: 1},
            {pos: 1, normal: 0, color: 0, uv: 0},
            {pos: 2, normal: 0, color: 0, uv: 2},
            {pos: 6, normal: 0, color: 0, uv: 3},
            {pos: 1, normal: 0, color: 0, uv: 0},
            {pos: 6, normal: 0, color: 0, uv: 3},
            {pos: 5, normal: 0, color: 0, uv: 1},
            {pos: 2, normal: 5, color: 0, uv: 0},
            {pos: 3, normal: 5, color: 0, uv: 2},
            {pos: 7, normal: 5, color: 0, uv: 3},
            {pos: 2, normal: 5, color: 0, uv: 0},
            {pos: 7, normal: 5, color: 0, uv: 3},
            {pos: 6, normal: 5, color: 0, uv: 1},
            {pos: 3, normal: 1, color: 0, uv: 0},
            {pos: 0, normal: 1, color: 0, uv: 2},
            {pos: 4, normal: 1, color: 0, uv: 3},
            {pos: 3, normal: 1, color: 0, uv: 0},
            {pos: 4, normal: 1, color: 0, uv: 3},
            {pos: 7, normal: 1, color: 0, uv: 1},
            {pos: 4, normal: 2, color: 0, uv: 0},
            {pos: 5, normal: 2, color: 0, uv: 2},
            {pos: 6, normal: 2, color: 0, uv: 3},
            {pos: 4, normal: 2, color: 0, uv: 0},
            {pos: 6, normal: 2, color: 0, uv: 3},
            {pos: 7, normal: 2, color: 0, uv: 1},
        ];

        const vertices = [];
        indices.forEach(index => {
            let vertex = [];
            attributes.forEach(attr => {
                vertex = vertex.concat(data[attr][index[attr]]);
            });
            vertices.push(vertex);
        });

        mesh.addAll(program.types, vertices, gl.TRIANGLES);
        return mesh;
    };
}