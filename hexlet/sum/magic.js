const magic = (...xs) => {
    function f(...ys) {
        f.sum = f.sum ? f.sum : 0;
        f.sum += ys.reduce((acc, n) => acc + n, 0);        
        return f;
    }
    f.valueOf = () => f.sum;
    return f(...xs);
};

export default magic;
