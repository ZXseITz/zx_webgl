/**
 * Created by Claudio on 22.02.2017.
 */

/**
 * Program class
 * @param {WebGLRenderingContext} gl - WebGL object
 * @param {{file: string, type: number}[]} shaders - shader meta array, defining vertex and fragment shader
 * @param {{h: number, attr: {name: string, size: number}[]}} type - defines used shader in variables
 * @constructor
 */
function Program(gl, shaders, type) {
    const hProgram = gl.createProgram();
    Object.defineProperty(this, 'hProgram', {value: hProgram, writable: false});
    Object.defineProperty(this, 'type', {value: type, writable: false});

    let loadShader = (path, type) => {
        let source;

        //load shader from file
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                source = xhr.responseText;
            }
        };
        xhr.open("GET", path, false);
        xhr.send();
        if (source === undefined) {
            throw new Error('Failed to get shader');
        }

        //compile shader
        const hShader = gl.createShader(type);
        gl.shaderSource(hShader, source);
        gl.compileShader(hShader);
        if (!gl.getShaderParameter(hShader, gl.COMPILE_STATUS)) {
            throw new Error(`Shader ${path} failed to compile.\n${gl.getShaderInfoLog(hShader)}`);
        }
        return hShader;
    };

    //attach shaders
    shaders.forEach(s => {
        const hShader = loadShader(`./assets/shaders/${s.file}`, s.type);
        gl.attachShader(hProgram, hShader);
    });

    //init program
    gl.linkProgram(hProgram);
    if (!gl.getProgramParameter(hProgram, gl.LINK_STATUS)) {
        throw new Error(`Program failed.\n${gl.getProgramInfoLog(hProgram)}`);
    }

    let getLocation = (name) => gl.getUniformLocation(hProgram, name);

    /**
     * Use program
     */
    this.use = () => gl.useProgram(hProgram);

    /**
     * Sets an uniform shader number
     * @param {string} name - variable name
     * @param {number} num - variable value
     */
    this.writeNumber = (name, num) => gl.uniform1f(getLocation(name), num);
    /**
     * Sets an uniform shader vec3
     * @param {string} name - variable name
     * @param {Vec3} vec - variable value
     */
    this.writeVec3 = (name, vec) => gl.uniform3fv(getLocation(name), vec.toArray());
    /**
     * Sets an uniform shader vec4
     * @param {string} name - variable name
     * @param {Vec4} vec - variable value
     */
    this.writeVec4 = (name, vec) => gl.uniform4fv(getLocation(name), vec.toArray());
    /**
     * Sets an uniform shader mat4
     * @param {string} name - variable name
     * @param {Mat4} mat - variable value
     */
    this.writeMat4 = (name, mat) => gl.uniformMatrix4fv(getLocation(name), false, mat.toArray());
}

Program.ATTR = {
    POS: {name: 'pos', size: 3},
    NORMAL: {name: 'normal', size: 3},
    COLOR: {name: 'color', size: 4},
    UV: {name: 'uv', size: 2}
};

Program.TYPES = {
    POS_COLOR: {h: 10, attr: [Program.ATTR.POS, Program.ATTR.COLOR]},
    POS_COLOR_UV: {h: 15, attr: [Program.ATTR.POS, Program.ATTR.COLOR, Program.ATTR.UV]},
    POS_NORMAL_COLOR: {h: 20, attr: [Program.ATTR.POS, Program.ATTR.NORMAL, Program.ATTR.COLOR]},
    POS_NORMAL_COLOR_UV: {h: 25, attr: [Program.ATTR.POS, Program.ATTR.NORMAL, Program.ATTR.COLOR, Program.ATTR.UV]},
};