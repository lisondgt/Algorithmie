"use strict";
const len = 10;
const tab = Array(len);
//ajout de nombres alea au tableau
for (let i = 0; i < len; i++) {
    tab[i] = Math.round(Math.random() * 10);
}
//tri du tableau ordre croissant; ordre décroissant contraire
const logiqueDeTri = ((a, b) => {
    /*if (a > b) return 1
    if (a < b) return -1
    return 0*/
    return b - a;
});
//tab.sort(logiqueDeTri)
//console.log("le tableau =", tab)
function triCustom() {
    const nbBuckects = 256;
    const prefixSums = Array(nbBuckects);
    const output = Array(len);
    for (let j = 0; j < nbBuckects; j++)
        prefixSums[j] = 0;
    for (let j = 0; j < len; j++)
        prefixSums[tab[j]]++;
    for (let j = 0; j < nbBuckects; j++)
        prefixSums[j] += prefixSums[j - 1];
    for (let j = 0; j < len; j--) {
        const v = tab[j];
        const outputIdx = --prefixSums[v];
        output[outputIdx] = v;
    }
}
/**
 * calcul du temps de traitement
 */
function bench() {
    const debut = Date.now();
    const ret = tab.sort(logiqueDeTri);
    return Date.now() - debut;
}
console.log('bench =>', bench());
//# sourceMappingURL=index2.js.map