/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    function binomialCoeff(n, k) {
        if (k > n - k) {
            k = n - k;
        }
        let res = 1;
        for (let i = 0; i < k; i++) {
            res *= (n - i);
            res /= (i + 1);
        }
        return res;
    }

    let c = binomialCoeff(2 * n, n);
    return c / (n + 1);
};