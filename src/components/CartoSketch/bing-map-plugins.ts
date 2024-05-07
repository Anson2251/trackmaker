import bingMapsPushPins from '@/components/BingMap/plugins/pushPin';
import bingMapCustomizedTouchpadBehavior from '@/components/BingMap/plugins/customizedTouchpadBehavior';
import bingMapsLiteModeHiDpi from '@/components/BingMap/plugins/liteModeHiDpi';
import bingMapsDrawing from '@/components/BingMap/plugins/drawingMap';

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

