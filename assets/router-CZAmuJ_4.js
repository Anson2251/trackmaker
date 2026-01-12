const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-s68Z0dj6.js","./index-zj8mBsKa.js","./index-D5akWEw-.css","./Card-TUuyJ86w.js","./SelectorDrawer-vXuGlAoX.js","./vue-i18n-DOxhPgO8.js","./light-B-yticdj.js","./sketch-store-DE36AHv2.js","./core-WOLazZJr.js","./Warning-BUcsFlCf.js","./fade-in-scale-up.cssr-DeoODjuK.js","./light-BmehlYBi.js","./light-BROUb78j.js","./use-locale-DmrF-mcc.js","./Suffix-EyhApkvS.js","./ListItem-DZOPMbBG.js","./SelectorDrawer-Bbrjv1sE.css","./Image-DnTLOzUu.js","./light-CYFdJHxq.js","./fade-in-height-expand.cssr-Cu5YViox.js","./light-BQrh0ZQl.js","./light-B_4DqQra.js","./light-xrMG9qnC.js","./light-DPZEdcWH.js","./light-B5lgLExf.js","./platform-QnxV4mui.js","./light-6C5o40GQ.js","./use-theme-vars-ByRLpWjA.js","./Space-D-J9jp5d.js","./imu-DKY0j8mh.js","./TrackerView-DP1Oi9Tk.css","./SketchCentreView-D3pzISxg.js","./FileText-uD5bOYxG.js","./interface-DdOdgxjc.js","./Switch-D7CZd_hn.js","./attribute-Q_J4RyVW.js","./src-Dj5KJsHr.js","./PerformantEllipsis-9fWZQi80.js","./SketchCentreView-CK9pnWUf.css","./AboutView-CceTL2py.js","./AnchorAdapter-T2XU0bvH.js","./Divider-BCxlFcsy.js","./AboutView-D9FIFBOv.css","./SettingsView-C4C216g7.js","./vue-router-Cc1bOkST.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-DBTaVpGQ.js","./Alert-BDPmWnoD.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-DgOeiL3h.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-vXuGlAoX.js";
import "./light-B-yticdj.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-zj8mBsKa.js";
import { i as n, r } from "./vue-router-Cc1bOkST.js";
import "./sketch-store-DE36AHv2.js";
import "./core-WOLazZJr.js";
import "./platform-QnxV4mui.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-s68Z0dj6.js";
import a from "./SketchCentreView-D3pzISxg.js";
import o from "./AboutView-CceTL2py.js";
import s from "./SettingsView-C4C216g7.js";
import c from "./ApiDetectionView-DBTaVpGQ.js";
import l from "./SensorTestView-DgOeiL3h.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-s68Z0dj6.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-D3pzISxg.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-CceTL2py.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-C4C216g7.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-DBTaVpGQ.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-DgOeiL3h.js").then(async (m) => {
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
