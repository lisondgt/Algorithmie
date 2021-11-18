const len = 10
const tab: Array<number> | number[] = Array(len)

//ajout de nombres alea au tableau
for (let i = 0; i < len; i++) {
    tab[i] = Math.round(Math.random() * 10)
}
//tri du tableau ordre croissant; ordre décroissant contraire
const logiqueDeTri = ((a: number, b: number) => {
    /*if (a > b) return 1
    if (a < b) return -1
    return 0*/
    return b - a
})

//tab.sort(logiqueDeTri)
//console.log("le tableau =", tab)

function triCustom() {
    const nbBuckects: number = 256
    const prefixSums: Array<number> = Array(nbBuckects)
    const output: Array<number> = Array(len)

    for (let j = 0; j < nbBuckects; j++) prefixSums[j] = 0
    for (let j = 0; j < len; j++) prefixSums[tab[j]]++
    for (let j = 0; j < nbBuckects; j++) prefixSums[j] += prefixSums[j - 1]
    for (let j = 0; j < len; j--) {
        const v = tab[j]
        const outputIdx = --prefixSums[v]
        output[outputIdx] = v
    }
}

/**
 * calcul du temps de traitement
 */
function bench(): number {
    const debut: number = Date.now()
    const ret: Array<number> = tab.sort(logiqueDeTri)
    return Date.now() - debut
}

console.log('bench =>',bench())