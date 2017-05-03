function miFuncionSumadora(arrayA, arrayB) {
    var arraySum = [];
    for (var i = 0; i < arrayA.length; i++) {
        arraySum[i] = arrayA[i] + arrayB[i];
    }
    return arraySum;
}

function miSumadoraTotal(arrayA, arrayB) {
    var total = 0;
    var arraySum = miFuncionSumadora(arrayA, arrayB);
    for (var i = 0; i < arraySum.length; i++) {
        total += arraySum[i];
    }
    return total;
}

function ejecutarApp() {
    arrA = [1, 2, 3, 4];
    arrE = [5, 6, 7, 8];
    console.log("miFuncionSumadora = " + miFuncionSumadora(arrA, arrE));
    console.log("miSumadoraTotal = " + miSumadoraTotal(arrA, arrE));
    return miSumadoraTotal(arrA, arrE);
}
module.exports.miFuncionSumadora = miFuncionSumadora;
module.exports.miSumadoraTotal = miSumadoraTotal;
module.exports.ejecutarApp = ejecutarApp;

ejecutarApp();