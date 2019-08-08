class Tree {
    constructor(key, meta, parent) {
        this.parent = parent;
        this.key = key;
        this.meta = meta;
        this.children = new Map();
    }

    getKey() {
        return this.key;
    }

    getMeta() {
        return this.meta;
    }

    addChild(key, meta) {
        const child = new Tree(key, meta, this);
        this.children.set(key, child);

        return child;
    }

    getChild(key) {
        return this.children.get(key);
    }

    // BEGIN (write your solution here)
    hasChildren() {
        return !!this.children.size;
        
    }

    hasChild(key) {
        return this.children.has(key);
    }

    getParent() {
        return this.parent;
    }

    getChildren() {
        return [...this.children.values()];
    }

    getDeepChild(keys) {
        if (!keys.length) return undefined;
        const child = this.getChild(keys[0]);
        return child !== undefined
            ? keys.length === 1
                ? child
                : child.getDeepChild(keys.slice(1))
            : undefined;
    }

    removeChild(key) {
        return this.children.delete(key);
    }
    // END
}

export default Tree;
