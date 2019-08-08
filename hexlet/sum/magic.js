const magic = (...xs) => {
    function f(...ys) {
        f.sum += ys.reduce((acc, n) => acc + n, 0);        
        return f;
    }
    f.sum = 0;
    f.valueOf = () => f.sum;
    return f(...xs);
};

export default magic;
