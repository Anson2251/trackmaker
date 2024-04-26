import type { moduleItem } from "./script/loadModules"
import { initMapScript as initBingMaps } from './components/BingMap/map'
import { initBingMapsDrawingModule } from './components/BingMap/plugins/drawingMap'

export const modules: moduleItem[] = [
    {
        name: "trackmaker",
        moduleInit: () => new Promise(resolve => resolve()),
        dependencies: ["bingMaps", "bingMapsDrawing"]
    },
    {
        name: "bingMaps",
        moduleInit: initBingMaps
    },
    {
        name: "bingMapsDrawing",
        moduleInit: initBingMapsDrawingModule,
        dependencies: ["bingMaps"]
    }
]