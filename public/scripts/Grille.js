export class Grille {
    constructor(config) {
        this._canvas = config.canvas;
        this._ctx = config.canvas.getContext("2d");
        this._data = config.data;
        this._nbColonnes = config.data[0].length;
        this._nbLignes = config.data.length;
        this.blockStyles = config.blockStyles;
        this.couleurFond = config.couleurFond;
        this.couleurGrille = config.couleurGrille;
        this._blockHeight = Math.round(this._canvas.height / this.data.length);
        this._blockWidth = Math.round(this._canvas.width / this.data[0].length);
        this.angleRayons = config.angleRayons;
    }
    dessine() {
        this.dessineGrille();
        this.dessineBlocks();
    }
    dessineBlocks() {
    }
    dessineGrille() {
    }
}
//# sourceMappingURL=Grille.js.map