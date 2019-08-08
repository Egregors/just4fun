function argSum(args) {
    return Object.keys(args)
        .map(Number)
        .reduce((acc, i) => acc + args[i], 0);
}

function fn() {
    let sum = argSum(arguments);

    function f() {
        sum += argSum(arguments);
        return f;
    }

    f.valueOf = function() {
        return sum;
    };

    return f;
}

export default fn;