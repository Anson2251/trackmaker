const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-DCnEOOSZ.js","./index-Vl7drdoJ.js","./index-D5akWEw-.css","./Card-kwg1fWHx.js","./SelectorDrawer-HO0-utCd.js","./vue-i18n-ClQBsBIw.js","./light-30G_vb0E.js","./sketch-store-gafBJLAu.js","./core-XYwh2dOT.js","./Warning-CBTwW-Xt.js","./fade-in-scale-up.cssr-C6QwAgwZ.js","./light-KOOiTng8.js","./light-BROUb78j.js","./use-locale-BZ9gy2BI.js","./Suffix-CSB21wPW.js","./ListItem-B1kvIxTU.js","./use-theme-vars-BGBDxiQr.js","./Space-DQST00ZU.js","./SelectorDrawer-CWDVuOZq.css","./Image-DjFNkhKI.js","./light-347vIPeP.js","./fade-in-height-expand.cssr-dAahcbnl.js","./light-kwR68aXG.js","./light-BapJ2ha6.js","./light-Dw7Q2po3.js","./light-DrjSAaMq.js","./light-C_S2Qr3H.js","./platform-C_BDY56S.js","./light-DKm4T4M3.js","./imu-DKY0j8mh.js","./TrackerView-t6DCmmja.css","./SketchCentreView-_m4NOdRP.js","./FileText-C2CBKbCu.js","./interface-DgoKw-6K.js","./Switch-3HZCVjvX.js","./attribute-CYcHpVst.js","./src-4_15Jflu.js","./PerformantEllipsis-BwEc1Kyu.js","./SketchCentreView-DquswPYW.css","./AboutView-T5YrYk5L.js","./AnchorAdapter-CerI_fx6.js","./Divider-CRxl8LRC.js","./AboutView-D9FIFBOv.css","./SettingsView-BqnbrhZs.js","./vue-router-BfnrIQQU.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-D_w4dS1Z.js","./Alert-CM9wB-Ap.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-B4eC3Gdv.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-HO0-utCd.js";
import "./light-30G_vb0E.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-Vl7drdoJ.js";
import { i as n, r } from "./vue-router-BfnrIQQU.js";
import "./sketch-store-gafBJLAu.js";
import "./core-XYwh2dOT.js";
import "./platform-C_BDY56S.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-DCnEOOSZ.js";
import a from "./SketchCentreView-_m4NOdRP.js";
import o from "./AboutView-T5YrYk5L.js";
import s from "./SettingsView-BqnbrhZs.js";
import c from "./ApiDetectionView-D_w4dS1Z.js";
import l from "./SensorTestView-B4eC3Gdv.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-DCnEOOSZ.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-_m4NOdRP.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,32,33,34,35,36,37,26,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-T5YrYk5L.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,19,13,20,10,21,15,40,35,24,16,41,25,11,17,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-BqnbrhZs.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,24,37,26,27,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-D_w4dS1Z.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,21,23,41,25,37,26,17,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-B4eC3Gdv.js").then(async (m) => {
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
