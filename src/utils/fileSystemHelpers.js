
export const findNodeById = (root, id) => {
    if (root.id === id) return root;
    if (root.children) {
        for (const child of root.children) {
            const found = findNodeById(child, id);
            if (found) return found;
        }
    }
    return null;
};

export const findPathToNode = (root, targetId, path = []) => {
    const newPath = [...path, root];
    if (root.id === targetId) return newPath;
    if (root.children) {
        for (const child of root.children) {
            const result = findPathToNode(child, targetId, newPath);
            if (result) return result;
        }
    }
    return null;
};

// Convert URL path segments to node path
// e.g. ['foundations', 'number-theory'] -> [Node(root), Node(foundations), Node(number-theory)]
export const resolvePath = (root, pathSegments) => {
    let currentNode = root;
    const path = [root];

    for (const segment of pathSegments) {
        if (!currentNode.children) return null;
        const nextNode = currentNode.children.find(c => c.id === segment);
        if (!nextNode) return null;
        currentNode = nextNode;
        path.push(currentNode);
    }

    return path;
};

// Recursive search
export const searchFileSystem = (node, query) => {
    let results = [];
    const lowerQuery = query.toLowerCase();

    // Check current node (if it's a file or folder matching the query)
    // We generally want to search for files, but folders can match too.
    // Excluding root and drive from results usually makes sense unless requested otherwise,
    // but let's include them if they match.
    if (node.name.toLowerCase().includes(lowerQuery) && node.id !== 'root') {
        results.push(node);
    }

    // Recurse
    if (node.children) {
        for (const child of node.children) {
            results = results.concat(searchFileSystem(child, query));
        }
    }

    return results;
};
