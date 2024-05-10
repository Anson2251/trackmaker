import { UAParser } from 'ua-parser-js'; 
let onchangeCallback: {id: number, callback: (type: string) => void}[] = [];

function doCallbacks(){
    onchangeCallback.forEach((item) => item.callback(inputDevicePreferences.device));
}

export namespace inputDevicePreferences {
    export type DeviceType = "mouse" | "touchpad"
    export let device: DeviceType = "touchpad";
    export const browserEngine = new UAParser(navigator.userAgent).getEngine().name || "";

    document.addEventListener("mousewheel", updateDeivceType);
    document.addEventListener("DOMMouseScroll", updateDeivceType);

    let touchpadCount = 0;
    let mouseCount = 0;

    export function updateDeivceType(e: any) {
        if (!inputDevicePreferences.isTouchpad(e)) {
            mouseCount += 1;
        } else {
            touchpadCount += 1;
        }
        if (mouseCount > 3) {
            touchpadCount = 0;
            mouseCount = 0;
            if(device !== "mouse") {
                device = "mouse";
                doCallbacks();
            }
        }
        if (touchpadCount > 3) {
            touchpadCount = 0;
            mouseCount = 0;
            if(device !== "touchpad") {
                device = "touchpad";
                doCallbacks();
            }
        }
    }

    export function addChangeListener(callback: (type: string) => void) {
        const id = onchangeCallback.length > 0 ? onchangeCallback[onchangeCallback.length - 1].id + 1 : 0;
        onchangeCallback.push({id: id, callback: callback});
    }

    export function removeChangeListener(id: number) {
        onchangeCallback = onchangeCallback.filter((item) => item.id !== id);
    }

    export function isTouchpad(e: any) {
        /// inspired by: https://stackoverflow.com/a/56948026, 
        /// the wheelDeltaY is greater than 120 in chrome, and mainly is the multiple of the 48 in firefox
        /// wheelDeltaY is the multiple of 12 in safari
        if(!e.wheelDeltaY) return e.deltaMode === 0;

        let usingTouchpad = false;
        switch (browserEngine) {
            case "Blink": { //chrome
                usingTouchpad = Math.abs(e.wheelDeltaY) < 120 && e.deltaX !== 0
                break;
            }
            case "WebKit": { // safari
                usingTouchpad = Math.abs(e.wheelDeltaY) % 12 !== 0 && e.deltaX !== 0
                break;
            }
            case "Gecko": { // firefox
                usingTouchpad = Math.abs(e.wheelDeltaY) % 48 !== 0 && e.deltaX !== 0
            }
        }
        return usingTouchpad;
    }
}

export default inputDevicePreferences;

(window as any).inputDevicePreferences = inputDevicePreferences;



