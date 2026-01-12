const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-BA6OSXzs.js","./index-C57mZnh3.js","./index-D5akWEw-.css","./Card-CWMqfBGT.js","./SelectorDrawer-DE8Fw0ad.js","./vue-i18n-Bm-kk62j.js","./light-ByoFy5cz.js","./sketch-store-DSDq88LI.js","./core-DZnL_1Th.js","./Warning-CRcobcpO.js","./fade-in-scale-up.cssr-Bbn30dlN.js","./light-D1X0x42x.js","./light-BROUb78j.js","./use-locale-UJF4kyxA.js","./Suffix-DUuQibcX.js","./ListItem-0_uyJSD1.js","./use-theme-vars-DLk79qG5.js","./Space-DZu9_qcN.js","./SelectorDrawer-CWDVuOZq.css","./Image-DiZcehic.js","./light-d1Y9myZh.js","./fade-in-height-expand.cssr-l0OyU0OR.js","./light-Co9qcx_O.js","./light-ByECxHt6.js","./light-CxlJjzVl.js","./light-CuxEGtn-.js","./light-BmkUSK_s.js","./platform-DF4B6bNi.js","./light-Cj15CboS.js","./imu-DKY0j8mh.js","./TrackerView-t6DCmmja.css","./SketchCentreView-BpqYIe8s.js","./FileText-Bls7ktxD.js","./interface-Dl9Gxh0y.js","./Switch-B1TpCUbE.js","./attribute-CYcHpVst.js","./src-XJPYWInt.js","./PerformantEllipsis-Cc4dP-g0.js","./SketchCentreView-DquswPYW.css","./AboutView-DjItQNVW.js","./AnchorAdapter-BlyKBIci.js","./Divider-BDnvpStP.js","./AboutView-D9FIFBOv.css","./SettingsView-B4atcujG.js","./vue-router-DO1Dwp9e.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-BZgcf3zZ.js","./Alert-2QRzJEqN.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-DqgjPX1y.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-DE8Fw0ad.js";
import "./light-ByoFy5cz.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-C57mZnh3.js";
import { i as n, r } from "./vue-router-DO1Dwp9e.js";
import "./sketch-store-DSDq88LI.js";
import "./core-DZnL_1Th.js";
import "./platform-DF4B6bNi.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-BA6OSXzs.js";
import a from "./SketchCentreView-BpqYIe8s.js";
import o from "./AboutView-DjItQNVW.js";
import s from "./SettingsView-B4atcujG.js";
import c from "./ApiDetectionView-BZgcf3zZ.js";
import l from "./SensorTestView-DqgjPX1y.js";
let u;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  u = n({
    history: r(`./`),
    routes: [
      {
        path: `/`,
        redirect: `/tracker`
      },
      {
        path: `/tracker`,
        name: `Tracker`,
        component: e() ? i : () => t(() => import("./TrackerView-BA6OSXzs.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), import.meta.url),
        meta: {
          timeout: 5e3
        }
      },
      {
        path: `/sketch-centre`,
        name: `sketchCentre`,
        component: e() ? a : () => t(() => import("./SketchCentreView-BpqYIe8s.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,32,33,34,35,36,37,26,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-DjItQNVW.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,19,13,20,10,21,15,40,35,24,16,41,25,11,17,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-B4atcujG.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,24,37,26,27,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-BZgcf3zZ.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,21,23,41,25,37,26,17,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-DqgjPX1y.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([49,1,2,3,5,47,9,21,23,28,29,50]), import.meta.url)
      }
    ]
  });
});
export {
  __tla,
  u as default
};
