const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-2dqnWOzw.js","./index-DF07uw2w.js","./index-D5akWEw-.css","./Card-C7XzVXYg.js","./SelectorDrawer-ByH050IL.js","./vue-i18n-B0hSU3-P.js","./light-BQJCVLMw.js","./sketch-store-DGrpVfSw.js","./core-CJwgjWoY.js","./Warning-lWBj9CZT.js","./fade-in-scale-up.cssr-BEUfe6bv.js","./light-BUaLKs2f.js","./light-BROUb78j.js","./use-locale-CqlLKeg2.js","./Suffix-BYDMOHFZ.js","./ListItem-B12HPmRF.js","./SelectorDrawer-Bbrjv1sE.css","./Image-CW5uBb5l.js","./light-BVZIahh5.js","./fade-in-height-expand.cssr-EgGsB0E-.js","./light-DxYlZ2_T.js","./light-WHKSBks5.js","./light-BcineaOm.js","./light-wX2Jp7xE.js","./light-DI9Mk-Bc.js","./platform-COQLbCwX.js","./light-EsN9_zfT.js","./use-theme-vars-DbgrP9JF.js","./Space-Bt6EzRyA.js","./imu-DKY0j8mh.js","./TrackerView-I0_gNIhT.css","./SketchCentreView-Dm2TKXEN.js","./FileText-CJ1JH8DR.js","./interface-BsDnUa_D.js","./Switch-CWhfj3Y3.js","./attribute-DCx6V3Rz.js","./src-Ddhxrlv4.js","./PerformantEllipsis-BC3WOMcY.js","./SketchCentreView-CK9pnWUf.css","./AboutView-C4PpECqA.js","./AnchorAdapter-B4KYZ1qr.js","./Divider-BhDtzUG5.js","./AboutView-D9FIFBOv.css","./SettingsView-DpwB5ar1.js","./vue-router-Ck2LvjX1.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-BdUm59S2.js","./Alert-D9QC0QPK.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-B6IkiASS.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-ByH050IL.js";
import "./light-BQJCVLMw.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-DF07uw2w.js";
import { i as n, r } from "./vue-router-Ck2LvjX1.js";
import "./sketch-store-DGrpVfSw.js";
import "./core-CJwgjWoY.js";
import "./platform-COQLbCwX.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-2dqnWOzw.js";
import a from "./SketchCentreView-Dm2TKXEN.js";
import o from "./AboutView-C4PpECqA.js";
import s from "./SettingsView-DpwB5ar1.js";
import c from "./ApiDetectionView-BdUm59S2.js";
import l from "./SensorTestView-B6IkiASS.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-2dqnWOzw.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-Dm2TKXEN.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-C4PpECqA.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-DpwB5ar1.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-BdUm59S2.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-B6IkiASS.js").then(async (m) => {
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
