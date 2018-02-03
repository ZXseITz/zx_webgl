/**
 * Initializes WebGL
 * @param {Element} canvas - canvas element
 * @param {*} [opt_attribs] - optional attributes
 * @returns {WebGLRenderingContext} WebGL object
 */
initWebGL = function (canvas, opt_attribs) {
    const names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    let context = null;
    for (let i = 0; i < names.length; i++) {
        context = canvas.getContext(names[i], opt_attribs);
        if (context) {
            return context;
        }
    }
    throw new Error("WebGL is not supported");
};

/**
 * Provides requestAnimationFrame in a cross browser way.
 */
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        ((callback) => window.setTimeout(callback, 1000 / 60));
});