/**
 * @author Claudio Seitz
 * @date 02.02.2018
 * @version 1.0
 */

/**
 * Mesh class
 * @param {WebGLRenderingContext} gl - webGL object
 * @param {number} hProgram - program id
 * @param {{name: string, size: number}[]} types - array of shader attributes
 * @constructor
 */
function Mesh(gl, hProgram) {
    let hBuffer = undefined;
    let buf = null;
    let _mode;
    let _size;

    let createBuffer = (attributes, stride) => {
        const hBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, hBuffer);

        attributes.forEach(attr => {
            const h = gl.getAttribLocation(hProgram, attr.name);
            gl.enableVertexAttribArray(h);
            gl.vertexAttribPointer(h, attr.size, gl.FLOAT, false, stride, attr.pointer);
        });
        return hBuffer;
    };

    /**
     *
     * @param {Object[]} types - shader types
     * @param {string} types[].name - shader type name
     * @param {number} types[].size - shader type size
     * @param {number[][]} vertices - vertex array
     * @param mode - how to interpret the vertices
     */
    this.addAll = (types, vertices, mode) => {
        _mode = mode;
        _size = vertices.length;
        let pointer = 0;
        let vFloats = 0;

        //create buffer
        const attributes = [];
        types.forEach(type => {
            const s = type.size;
            attributes.push({name: type.name, size: s, pointer: pointer});
            pointer += s * 4;
            vFloats += s;
        });
        hBuffer = createBuffer(attributes, pointer);

        //set data
        buf = new Float32Array(_size * vFloats);
        for (let i = 0; i < _size; i++) {
            buf.set(vertices[i], i * vFloats);
        }
    };

    /**
     * Draws the mesh
     */
    this.render = () => {
        if (hBuffer === undefined) throw new Error('No vertices are defined in this mesh');
        gl.bindBuffer(gl.ARRAY_BUFFER, hBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, buf, gl.STATIC_DRAW);
        gl.drawArrays(_mode, 0, _size);
    }
}