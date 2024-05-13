/// <reference path="../../types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import bingMaps from "../BingMap/map";
import bingMapsDrawing from "../BingMap/plugins/drawingMap";

import { v4 as uuidV4 } from "uuid";

export class CartoSketchPrimitivesManager {
    private primitives: Microsoft.Maps.IPrimitive[] = [];
    private drawingMap: bingMapsDrawing;
    private componentProperties: any = {};

    constructor(drawingMap: bingMapsDrawing) {
        this.drawingMap = drawingMap;
    }
}