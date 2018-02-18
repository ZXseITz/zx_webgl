/**
 * @author Claudio
 * @date 17.02.2018
 * @version 1.0
 */

function CubeFactory(gl, x, y, z, colorShape, colorFrame) {
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
    data.normal = CubeFactory.normals;
    data.color = [
        [colorShape.r, colorShape.g, colorShape.b, colorShape.a],
        [colorFrame.r, colorFrame.g, colorFrame.b, colorFrame.a],
    ];
    data.uv = CubeFactory.uvs;

    this.createShape = (program) => {
        if (!program.useShapeFactory) throw new Error(`Program ${program.hProgram} doesn't support ShapeFactories`);
        const mesh = new Mesh(gl, program.hProgram);

        const vertices = [];
        CubeFactory.shapeIndices.forEach(index => {
            let vertex = [];
            program.types.forEach(attr => {
                const name = attr.name;
                vertex = vertex.concat(data[name][index[name]]);
            });
            vertices.push(vertex);
        });

        mesh.addAll(program.types, vertices, gl.TRIANGLES);
        return mesh;
    };

    this.createFrame = (program) => {
        if (!program.useFrameFactory) throw new Error(`Program ${program.hProgram} doesn't support FrameFactories`);
        const mesh = new Mesh(gl, program.hProgram);

        const vertices = [];
        CubeFactory.frameIndices.forEach(index => {
            let vertex = [];
            program.types.forEach(attr => {
                const name = attr.name;
                vertex = vertex.concat(data[name][index[name]]);
            });
            vertices.push(vertex);
        });

        mesh.addAll(program.types, vertices, gl.LINES);
        return mesh;
    }
}

CubeFactory.normals = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
];

CubeFactory.uvs = [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
];

CubeFactory.shapeIndices = [
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

CubeFactory.frameIndices = [
    {pos: 0, color: 1},
    {pos: 1, color: 1},
    {pos: 1, color: 1},
    {pos: 2, color: 1},
    {pos: 2, color: 1},
    {pos: 3, color: 1},
    {pos: 3, color: 1},
    {pos: 0, color: 1},
    {pos: 4, color: 1},
    {pos: 5, color: 1},
    {pos: 5, color: 1},
    {pos: 6, color: 1},
    {pos: 6, color: 1},
    {pos: 7, color: 1},
    {pos: 7, color: 1},
    {pos: 4, color: 1},
    {pos: 0, color: 1},
    {pos: 4, color: 1},
    {pos: 1, color: 1},
    {pos: 5, color: 1},
    {pos: 2, color: 1},
    {pos: 6, color: 1},
    {pos: 3, color: 1},
    {pos: 7, color: 1},
];