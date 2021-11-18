"use strict";
const problemesFaciles = {
    "": ['bla', "bl", "a"],
    "abcdef": ["ab", "abc", "cd", "def", "abcd"],
    "skateboard": ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
    "enterapotentpot": ["a", "p", "ent", "enter", "ot", "o", "t"], //true
};
const problemeDifficile = {
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef": [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee"
    ] //false
};
function constructionPossible(objectif, // Mon objectif courant
alphabet, // Mon alphabet
memo = {} // Mon cache mémoire
) {
    /**
     * Si j'ai déjà un résultat pour <objectif> dans mon cache,
     * Je renvoie ce résultat
     */
    if (objectif in memo)
        return memo[objectif];
    /**
     * Si mon objectif est une chaine de caractères vide,
     * Alors la fonction renvoie toujours vrai
     */
    if (objectif === "")
        return true;
    /**
     * Pour les objectifs "normaux", qui ne sont pas déjà dans le cache,
     * pour chaque element de l'alphabet ...
     */
    for (let element of alphabet) {
        /**
         * ... est ce que mon objectif commence par cet element ?
         */
        if (objectif.indexOf(element) === 0) {
            /**
             * Je reconstruit un sous-objectifs "reste" qui est l'objectif initial
             * moins l'élément
             */
            const reste = objectif.slice(element.length);
            /**
             * Et j'appelle récursivement la fonction avec le sous-objectif
             */
            if (constructionPossible(reste, alphabet, memo)) {
                /**
                 * Si le sous-objectif est constructible, alors je mémorise VRAI
                 * dans le cache et je renvoie le résultat
                 */
                memo[objectif] = true;
                return true;
            }
        }
    }
    memo[objectif] = false;
    return false;
}
// function bench(problemes: { [p: string]: Array<string> }) {
//     for (const objectif in problemes) {
//         const alphabet = problemes[objectif]
//         console.log(`"${objectif}" -> ${constructionPossible(objectif, alphabet)}`)
//     }
// }
// bench(problemesFaciles);
//# sourceMappingURL=stringConstruction.js.map