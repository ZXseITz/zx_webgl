/**
 * @author Claudio
 * @date 02.02.2018
 * @version 1.0
 */

function SceneGraph(program, transformName = "M") {
    /**
     * Node list
     * @type {Object[]} nodes - node list
     * @type {Mat4} nodes.mat - node transformation matrix
     * @type {Mat4} [nodes.mesh] - node mesh
     * @type {Object[]} nodes.children - sub nodes
     */
    const nodes = [];
    Object.defineProperty(this, 'nodes', {value: nodes, writable: false});

    /**
     * Renders the scene graph
     */
    this.render = () => {
        const mat = Mat4.ID;
        nodes.forEach(n => {
            renderNode(n, mat);
        })
    };

    /**
     * Recursive function to render nodes
     * @param {Object} node - node
     * @param {Mat4} node.mat - node transition
     * @param {Mesh} [node.mesh] - mesh
     * @param {Mat4} [node.children] - sub nodes
     * @param {Mat4} mat - previous transformation matrix
     */
    let renderNode = (node, mat) => {
        const transform = node.mat.multiplyMat4(mat); //transformation order
        if (node.hasOwnProperty('mesh') && node.mesh !== undefined) {
            program.writeMat4(transformName, transform, true);
            node.mesh.render();
        }
        if (node.children.length > 0) {
            node.children.forEach(n => {
                renderNode(n, transform);
            });
        }
    }
}

/**
 * Create a new node
 * @param {Mat4} mat - transformation matrix
 * @param {Mesh} [mesh] - mesh
 * @returns {{mat: Mat4, mesh: Mesh, children: Object}}
 */
SceneGraph.createNode = (mat, mesh) => ({mat: mat, mesh: mesh, children: []});