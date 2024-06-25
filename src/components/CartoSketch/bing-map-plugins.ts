import bingMapsPushPins from '@/components/BingMap/plugins/pushpin';
import BingMapPlugin_CustomizedTouchpadBehavior from '@/components/BingMap/plugins/customized-touchpad-behavior';
import BingMapPlugin_LiteModeHiDPI from '@/components/BingMap/plugins/lite-mode-hidpi';
import BingMapPlugin_Drawing from '@/components/BingMap/plugins/drawing-map';

export const plugins = [
	BingMapPlugin_Drawing,
	bingMapsPushPins,
	BingMapPlugin_CustomizedTouchpadBehavior,
	BingMapPlugin_LiteModeHiDPI
]

export type MapWithPlugins = {
    plugins: {
        drawingTools: BingMapPlugin_Drawing,
        pushPinLayer: bingMapsPushPins,
    };
}

