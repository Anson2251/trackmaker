const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-fKmG2w4Y.js","./index-B3zrdieg.js","./index-D5akWEw-.css","./Card-si5vg09e.js","./SelectorDrawer-uWLExQg2.js","./vue-i18n-fVWvo4VS.js","./light-vCAUZQBo.js","./sketch-store-0UlX_Om1.js","./core-DK6esZb9.js","./Warning-CbFR0hvs.js","./fade-in-scale-up.cssr-CYELJgTx.js","./light-pmwQlqWA.js","./light-BROUb78j.js","./use-locale-LngY8peC.js","./Suffix-3TQ7bzck.js","./ListItem-B2BWOod3.js","./SelectorDrawer-Bbrjv1sE.css","./Image-DnxhMzZs.js","./light-DkbBkgRs.js","./fade-in-height-expand.cssr-CwawVn5s.js","./light-RYhyxykk.js","./light-C4uSS5qq.js","./light-ZK5sc_G-.js","./light-81Iv9spZ.js","./light-BxXl2CsJ.js","./platform-BkisLGwT.js","./light-ahMCNaH3.js","./use-theme-vars-idXkaA5S.js","./Space-5HFypEUa.js","./imu-DKY0j8mh.js","./TrackerView-I0_gNIhT.css","./SketchCentreView-BpuvJRo8.js","./FileText-CTxZqmX5.js","./interface-CA9ZGYvZ.js","./Switch-haU9_pcF.js","./attribute-BiY2_3Rt.js","./src-BnD3quNW.js","./PerformantEllipsis-CV1342RN.js","./SketchCentreView-CK9pnWUf.css","./AboutView-B9UFdiKo.js","./AnchorAdapter-yuyx0X50.js","./Divider-Dxz9wmvq.js","./AboutView-D9FIFBOv.css","./SettingsView-DcnLVgOb.js","./vue-router-BUf3CDWI.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-5_X1esnE.js","./Alert-Hdg9x_HH.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-w7Sgyso2.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-uWLExQg2.js";
import "./light-vCAUZQBo.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-B3zrdieg.js";
import { i as n, r } from "./vue-router-BUf3CDWI.js";
import "./sketch-store-0UlX_Om1.js";
import "./core-DK6esZb9.js";
import "./platform-BkisLGwT.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-fKmG2w4Y.js";
import a from "./SketchCentreView-BpuvJRo8.js";
import o from "./AboutView-B9UFdiKo.js";
import s from "./SettingsView-DcnLVgOb.js";
import c from "./ApiDetectionView-5_X1esnE.js";
import l from "./SensorTestView-w7Sgyso2.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-fKmG2w4Y.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-BpuvJRo8.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-B9UFdiKo.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-DcnLVgOb.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-5_X1esnE.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-w7Sgyso2.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([49,1,2,3,5,47,9,19,21,26,29,50]), import.meta.url)
      }
    ]
  });
});
export {
  __tla,
  u as default
};
