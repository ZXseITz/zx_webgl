/**
 * @author Claudio
 * @date 02.02.2018
 * @version 1.0
 */
CameraHelper = function() {
    let createTranslation = (v) => Mat4.createTranslation(v.x, v.y, v.z);
    let createTranslationXYZ = (x, y, z) => Mat4.createTranslation(-x, -y, -z);
    let createRotationX = (phi) => Mat4.createRotationX(-phi);
    let createRotationY = (phi) => Mat4.createRotationY(-phi);
    let createRotationZ = (phi) => Mat4.createRotationZ(-phi);
    let createRotation = (phi, axis) => Mat4.createRotation(-phi, axis);
};

