/**
 * Created by Claudio on 27.03.2017.
 */

function SphereFactory(gl, radius, n1, n2, colorShape, colorFrame) {
    const d1 = 1 / n1;
    const d2 = 1 / n2;
    const a = 2 * Math.PI * d1;
    const e = Math.PI * d2;
    const data = {};
    data.pos = [];
    data.normals = [];
    data.color = [
        [colorShape.r, colorShape.g, colorShape.b, colorShape.a],
        [colorFrame.r, colorFrame.g, colorFrame.b, colorFrame.a],
    ];
    data.uvs = [];
    const shapeIndices = [];
    const frameIndices = [];

    for (let u = 0; u <= n1; u++) {
        const a0 = u * n2;
        const ic = -Math.cos(u * a);
        const is = -Math.sin(u * a);
        for (let v = 0; v <= n2; v++) {
            const js = Math.sin(v * e);
            const jc = Math.cos(v * e);
            const xz = radius * js;
            //vertices
            data.pos.push([
                xz * ic,
                radius * jc,
                xz * is
            ]);
            data.normals.push([
                js * ic,
                jc,
                js * is,
            ]);
            data.uvs.push([
                u * d1,
                v * d2,
            ]);

            if (u === n1 || v === n2) continue;
            const a = a0 + v;
            const b = a + 1;
            const c = b + n2;
            //indices
            shapeIndices.push(
                {pos: a, normal: a, color: 0, uv: a},
                {pos: b, normal: b, color: 0, uv: b},
                {pos: c, normal: c, color: 0, uv: c},
            );
            frameIndices.push(
                {pos: a, color: 1},
                {pos: b, color: 1},
            );
            if (v === 0) continue;
            frameIndices.push(
                {pos: a, color: 1},
                {pos: c, color: 1},
            );
        }
    }

    this.createShape = (program) => {
        if (!program.useShapeFactory) throw new Error(`Program ${program.hProgram} doesn't support ShapeFactories`);
        const mesh = new Mesh(gl, program.hProgram);

        const vertices = [];
        shapeIndices.forEach(index => {
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
        frameIndices.forEach(index => {
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
