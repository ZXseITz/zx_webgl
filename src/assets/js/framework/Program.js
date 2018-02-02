/**
 * Created by Claudio on 22.02.2017.
 */

/**
 * Program class
 * @param gl WebGL
 * @param shaders shader array, containing vertex and fragment shader
 * @constructor
 */
function Program(gl, shaders) {
    const hProgram = gl.createProgram();
    Object.defineProperty(this, 'hProgram', {value: hProgram, writable: false});

    let loadShader = (path, type) => {
        let source;

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                source = xhr.responseText;
            }
        };
        xhr.open("GET", path, false);
        xhr.send();

        if (source === undefined) {
            throw new Error();
        }
        const hShader = gl.createShader(type);
        gl.shaderSource(hShader, source);
        gl.compileShader(hShader);
        if (!gl.getShaderParameter(hShader, gl.COMPILE_STATUS)) {
            throw new Error(`Shader ${path} failed to compile.\nError: ${gl.getShaderInfoLog(hShader)}`);
        }
        return hShader;
    };

    shaders.forEach(s => {
        const hShader = loadShader(s.path, s.type);
        gl.attachShader(hProgram, hShader);
    });

    gl.linkProgram(hProgram);
    if (!gl.getProgramParameter(hProgram, gl.LINK_STATUS)) {
        throw new Error(`Program failed.\nError: ${gl.getProgramInfoLog(hProgram)}`);
    }

    let getLocation = (name) => gl.getUniformLocation(hProgram, name);

    this.use = () => gl.useProgram(hProgram);

    this.writeNumber = (name, num) => gl.uniform1f(getLocation(name), num);
    this.writeVec3 = (name, vec) => gl.uniform3fv(getLocation(name), vec.toArray());
    this.writeVec4 = (name, vec) => gl.uniform4fv(getLocation(name), vec.toArray());
    this.writeMat4 = (name, mat) => gl.uniformMatrix4fv(getLocation(name), false, mat.toArray());
}