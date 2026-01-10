const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-Dc5A52M_.js","./index-CkQURd6u.js","./index-D5akWEw-.css","./Card-BhZanKs1.js","./SelectorDrawer-Dv5HC3Dk.js","./vue-i18n-BYbps15T.js","./light-12JaccNJ.js","./sketch-store-Bha6CkhO.js","./core-BTtElCLw.js","./Warning-tkiNib90.js","./fade-in-scale-up.cssr-ySHzELCR.js","./light-DZth_yTO.js","./light-BROUb78j.js","./use-locale-B6QMoks9.js","./Suffix-DfVMbljg.js","./ListItem-D3yTvuQP.js","./SelectorDrawer-Bbrjv1sE.css","./Image-BZRDhrmH.js","./light-BtIaxdiU.js","./fade-in-height-expand.cssr-r0MAyqsD.js","./light-CFDlTceh.js","./light-SBaRhhSy.js","./light-D0CHWkZT.js","./light-CzAhMXMy.js","./light-REOcfY_9.js","./platform-IOVQPiPE.js","./light-DdJfGkwG.js","./use-theme-vars-3-ijFaqK.js","./Space-BAxJs4qy.js","./imu-DKY0j8mh.js","./TrackerView-I0_gNIhT.css","./SketchCentreView-CRMPv65C.js","./FileText-Cx5iALmI.js","./interface-BYu-giUL.js","./Switch-BQxfV-LD.js","./attribute-CdVL_oFh.js","./src-C9-jK4YE.js","./PerformantEllipsis-Bo2d63qA.js","./SketchCentreView-CK9pnWUf.css","./AboutView-DBOPfb-1.js","./AnchorAdapter-Bv8oUql8.js","./Divider-DRLGN3Mw.js","./AboutView-DW8uOlEv.css","./SettingsView-BnFy8WAb.js","./vue-router-DTH91L82.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-DFsRvB2m.js","./Alert-DRlwD163.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-DdhavH5E.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-Dv5HC3Dk.js";
import "./light-12JaccNJ.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-CkQURd6u.js";
import { i as n, r } from "./vue-router-DTH91L82.js";
import "./sketch-store-Bha6CkhO.js";
import "./core-BTtElCLw.js";
import "./platform-IOVQPiPE.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-Dc5A52M_.js";
import a from "./SketchCentreView-CRMPv65C.js";
import o from "./AboutView-DBOPfb-1.js";
import s from "./SettingsView-BnFy8WAb.js";
import c from "./ApiDetectionView-DFsRvB2m.js";
import l from "./SensorTestView-DdhavH5E.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-Dc5A52M_.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-CRMPv65C.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-DBOPfb-1.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-BnFy8WAb.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-DFsRvB2m.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-DdhavH5E.js").then(async (m) => {
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
