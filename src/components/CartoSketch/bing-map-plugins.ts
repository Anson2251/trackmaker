import BingMapPlugin_PushPins from '@/libs/map-backends/bing-maps/plugins/pushpin';
import BingMapPlugin_CustomizedTouchpadBehavior from '@/libs/map-backends/bing-maps/plugins/customized-touchpad-behavior';
import BingMapPlugin_LiteModeHiDPI from '@/libs/map-backends/bing-maps/plugins/lite-mode-hidpi';
import BingMapPlugin_Drawing from '@/libs/map-backends/bing-maps/plugins/drawing-map';

export const plugins = [
	BingMapPlugin_Drawing,
	BingMapPlugin_PushPins,
	BingMapPlugin_CustomizedTouchpadBehavior,
	BingMapPlugin_LiteModeHiDPI
];

export type MapWithPlugins = {
    plugins: {
        drawingTools: BingMapPlugin_Drawing,
        pushPinLayer: BingMapPlugin_PushPins,
    };
}

