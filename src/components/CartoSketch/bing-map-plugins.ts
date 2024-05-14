import bingMapsPushPins from '@/components/BingMap/plugins/pushpin';
import bingMapCustomizedTouchpadBehavior from '@/components/BingMap/plugins/customized-touchpad-behavior';
import bingMapsLiteModeHiDpi from '@/components/BingMap/plugins/lite-mode-hidpi';
import bingMapsDrawing from '@/components/BingMap/plugins/drawingm-map';

export const plugins = [
	bingMapsDrawing,
	bingMapsPushPins,
	bingMapCustomizedTouchpadBehavior,
	bingMapsLiteModeHiDpi
]

export type MapWithPlugins = {
    plugins: {
        drawingTools: bingMapsDrawing,
        pushPinLayer: bingMapsPushPins,
    };
}

