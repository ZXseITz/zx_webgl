/**
 * @author Claudio
 * @date 02.02.2018
 * @version 1.0
 */

function SceneGraph(program, transformName = "M") {
    const nodes = [];
    Object.defineProperty(this, 'nodes', {value: nodes, writable: false});

    this.render = () => {
        const mat = Mat4.ID;
        nodes.forEach(n => {
            renderNode(n, mat);
        })
    };

    let renderNode = (node, mat) => {
        const transform = node.mat * mat; //transformation order
        if (node.hasOwnProperty('mesh') && node.mesh !== undefined) {
            program.writeMat4(transformName, transform);
            node.mesh.render();
        }
        if (node.hasOwnProperty('children') && node.children !== undefined) {
            node.children.forEach(n => {
                renderNode(n, transform);
            });
        }
    }
}

SceneGraph.createNode = (mat, mesh) => ({mat: mat, mesh: mesh, children: []});
SceneGraph.createLeaf = (mat, mesh) => ({mat: mat, mesh: mesh});