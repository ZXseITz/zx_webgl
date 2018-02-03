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
function Mesh(gl, hProgram, types) {
    let hBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, hBuffer);
    let buf = null;
    let _mode;
    let _size;

    const l = types.length - 1;
    const pointers = [0];
    for (let i = 0; i < l; i++) {
        pointers.push(types[i].size * 4 + pointers[i]);
    }
    const vertexSize = pointers[l] + types[l].size * 4;
    const vertexFloats = vertexSize * 0.25;
    for (let i = 0; i < types.length; i++) {
        const attr = types[i];
        const h = gl.getAttribLocation(hProgram, attr.name);
        gl.enableVertexAttribArray(h);
        gl.vertexAttribPointer(h, attr.size, gl.FLOAT, false, vertexSize, pointers[i]);
    }

    /**
     * Adds all vertices
     * @param {*[]} vertices - vertex array
     * @param {number} mode - how to interpret vertices
     */
    this.addAllVertices = (vertices, mode) => {
        _mode = mode;
        _size = vertices.length;
        hBuffer = gl.createBuffer();
        buf = new Float32Array(_size * vertexFloats);
        for (let i = 0; i < _size; i++) {
            const vertex = vertices[i];
            const a = [];
            for (let key in vertex) {
                if (vertex.hasOwnProperty(key)){
                    vertex[key].forEach(value => a.push(value))
                }
            }
            buf.set(a, i * vertexFloats);
        }
    };

    /**
     * Adds all vertices as arrays
     * @param {[][]} arrays - data array
     * @param {number} mode - how to interpret vertices
     */
    this.addAllArrays = (arrays, mode) => {
        _mode = mode;
        _size = arrays.length;
        buf = new Float32Array(_size * vertexFloats);
        for (let i = 0; i < _size; i++) {
            buf.set(arrays[i], i * vertexFloats);
        }
    };

    /**
     * Draws the mesh
     */
    this.render = () => {
        if (buf === null) throw new Error('No vertices are defined in this mesh');
        gl.bindBuffer(gl.ARRAY_BUFFER, hBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, buf, gl.STATIC_DRAW);
        gl.drawArrays(_mode, 0, _size);
    }
}