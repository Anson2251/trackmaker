const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-BpNn89BU.js","./index-Db1PxEEp.js","./index-D5akWEw-.css","./Card-llegvRlo.js","./sketch-store-DRbWeEy8.js","./light-eald8gc7.js","./text-DtFQJ910.js","./storage-Mt3fl_aw.js","./Warning-BAiJKtgg.js","./fade-in-scale-up.cssr-DqtQ2WDM.js","./light-CzHUwcUk.js","./light-E2J33dPM.js","./use-locale-xapa4rQS.js","./Suffix-DoQO-l1U.js","./vue-i18n-BBv8G3Ae.js","./Image-DDO2cSOV.js","./light-d25tDSlx.js","./Tooltip-D7e1lUg_.js","./fade-in-height-expand.cssr-DiGbxTa6.js","./light-CFB9RRtD.js","./light-YwAwnhvB.js","./light-DTKs5Wh5.js","./light-C_54_GBX.js","./light-dIz2fjBC.js","./platform-UW8oy33Z.js","./light-BXI22-1K.js","./use-theme-vars-5rOFVdag.js","./Space-C0XxpAwB.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-BFMH3pdL.css","./SketchCentreView-DpEyklr2.js","./FileText-BXmuLnAt.js","./interface-Csj8uU6_.js","./core-BInkI3au.js","./Switch-CmUA1RUj.js","./attribute-BpQw8moq.js","./ListItem-C5GpsiNL.js","./SketchCentreView-D0BfIJOK.css","./AboutView-71Vt_752.js","./AnchorAdapter-CZeaIfUQ.js","./Divider-C52DywVr.js","./AboutView-BGOn7na1.css","./SettingsView-V3ftgRT-.js","./PerformantEllipsis-DwkwJGf4.js","./vue-router-DURWp_Xq.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-CEU4cHT2.js","./Alert-BZn_NyBD.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-DkgMuHcL.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-DRbWeEy8.js";
import "./light-eald8gc7.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-Db1PxEEp.js";
import { i as n, r } from "./vue-router-DURWp_Xq.js";
import "./storage-Mt3fl_aw.js";
import "./platform-UW8oy33Z.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-BpNn89BU.js";
import a from "./SketchCentreView-DpEyklr2.js";
import o from "./AboutView-71Vt_752.js";
import s from "./SettingsView-V3ftgRT-.js";
import c from "./ApiDetectionView-CEU4cHT2.js";
import l from "./SensorTestView-DkgMuHcL.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-BpNn89BU.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-DpEyklr2.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-71Vt_752.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-V3ftgRT-.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-CEU4cHT2.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-DkgMuHcL.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([50,1,2,3,14,48,8,18,20,25,29,51]), import.meta.url)
      }
    ]
  });
});
export {
  __tla,
  u as default
};
