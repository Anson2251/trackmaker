const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-BY5sYkCc.js","./index-D7kpbl1J.js","./index-D5akWEw-.css","./Card-BA4l61KH.js","./SelectorDrawer-DiEwKsL_.js","./vue-i18n-Ddst7wjP.js","./light-CFE1kGCy.js","./sketch-store-CJvH1gS9.js","./core-BvwjdX_m.js","./Warning-DY5qBwEW.js","./fade-in-scale-up.cssr-Dnas9Klr.js","./light-DPZ_v60a.js","./light-BROUb78j.js","./use-locale-C1-t0Ubv.js","./Suffix-9LHwnJVt.js","./ListItem-D6vI6I2G.js","./SelectorDrawer-Bbrjv1sE.css","./Image-DtbCvgcm.js","./light-Cpp1rfJa.js","./fade-in-height-expand.cssr-DchkSigq.js","./light-BlF884y5.js","./light-Cwo9uSlQ.js","./light-BW8AsLVK.js","./light-ClVSLWhX.js","./light-C-aOXpAM.js","./platform-CN67XqqK.js","./light-D16PZEnO.js","./use-theme-vars-C85WJSp1.js","./Space-gLUX_c4O.js","./imu-DKY0j8mh.js","./TrackerView-7CsFF-GD.css","./SketchCentreView-DVYJdy47.js","./FileText-DJ5Hpies.js","./interface-BsA76h9Z.js","./Switch-Bsx1lDBe.js","./attribute-DiIVGOGm.js","./src-BWprU6YF.js","./PerformantEllipsis-BFKpe3_3.js","./SketchCentreView-CK9pnWUf.css","./AboutView-BSq9HKPW.js","./AnchorAdapter-Dw6229z4.js","./Divider-DpjpFsWd.js","./AboutView-D9FIFBOv.css","./SettingsView-DxUcPc45.js","./vue-router-CLME1LmM.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-Bjlmm2G8.js","./Alert-DxKDW_IQ.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-HL0kjKat.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-DiEwKsL_.js";
import "./light-CFE1kGCy.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-D7kpbl1J.js";
import { i as n, r } from "./vue-router-CLME1LmM.js";
import "./sketch-store-CJvH1gS9.js";
import "./core-BvwjdX_m.js";
import "./platform-CN67XqqK.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-BY5sYkCc.js";
import a from "./SketchCentreView-DVYJdy47.js";
import o from "./AboutView-BSq9HKPW.js";
import s from "./SettingsView-DxUcPc45.js";
import c from "./ApiDetectionView-Bjlmm2G8.js";
import l from "./SensorTestView-HL0kjKat.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-BY5sYkCc.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-DVYJdy47.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-BSq9HKPW.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-DxUcPc45.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-Bjlmm2G8.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-HL0kjKat.js").then(async (m) => {
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
