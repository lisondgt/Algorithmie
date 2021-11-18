export interface IGrilleConfig {
    readonly canvas: HTMLCanvasElement
    readonly data: Array<Array<number>>
    readonly blockStyles: { [ blockValue: number]: string }
    readonly couleurFond: string
    readonly couleurGrille: string
    readonly nbRayons: number
    readonly angleRayons: number
    readonly vue: IView3D
}

export interface IGrille {
    data: Array<Array<number>>
    readonly nbColonnes: number
    readonly nbLignes: number
    blockStyles: { [ blockValue: number]: string }
    couleurFond: string
    couleurGrille: string
    readonly blockHeight: number
    readonly blockWidth: number
    //rayons: Array<{x1: number, y1: number, x2: number, y2: number}>
    //intersections: Array<IIntersection>
    dessineGrille (): void
    dessineBlocks (): void
    //dessineRayons (): void
    dessine (): void
    //lanceRayons (x: number, y: number, angle: number): void
}

export class Grille implements IGrille {
    private readonly _canvas: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;
    _blockHeight: number;
    blockStyles: { [p: number]: string };
    _blockWidth: number;
    couleurFond: string;
    couleurGrille: string;
    _data: Array<Array<number>>;
    _nbColonnes: number;
    _nbLignes: number;
    angleRayons: number;

    constructor(config: IGrilleConfig) {
        this._canvas = config.canvas
        this._ctx = config.canvas.getContext("2d") as CanvasRenderingContext2D
        this._data = config.data
        this._nbColonnes = config.data[0].length
        this._nbLignes = config.data.length
        this.blockStyles = config.blockStyles
        this.couleurFond = config.couleurFond
        this.couleurGrille = config.couleurGrille
        this._blockHeight = Math.round(this._canvas.height / this.data.length)
        this._blockWidth = Math.round(this._canvas.width / this.data[0].length)
        this.angleRayons = config.angleRayons
    }

    dessine(): void {
        this.dessineGrille()
        this.dessineBlocks()
    }

    dessineBlocks(): void {
    }

    dessineGrille(): void {
    }

}