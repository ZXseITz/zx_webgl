/**
 * @author Claudio
 * @date 02.02.2018
 * @version 1.0
 */
CameraHelper = function() {
    let createTranslation = (v) => Mat4.CreateTranslationXYZ(v.x, v.y, v.z);
    let createTranslationXYZ = (x, y, z) => Mat4.CreateTranslation(-x, -y, -z);
    let createRotationX = (phi) => Mat4.CreateRotationX(-phi);
    let createRotationY = (phi) => Mat4.CreateRotationY(-phi);
    let createRotationZ = (phi) => Mat4.CreateRotationZ(-phi);
    let createRotation = (phi, axis) => Mat4.CreateRotation(-phi, axis);
};

