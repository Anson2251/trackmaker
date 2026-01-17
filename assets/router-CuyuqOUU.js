const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-D1vBoyw4.js","./index-DB7o9cHn.js","./index-D5akWEw-.css","./Card-D143Lfk4.js","./SelectorDrawer-nKMYbvBJ.js","./vue-i18n-CCs_3k63.js","./light-DwF4oYuH.js","./sketch-store-DqJARFZt.js","./core-D1D99Wf6.js","./Warning-r2P7tydT.js","./fade-in-scale-up.cssr-CTmxZa7V.js","./light-CvpDDIJJ.js","./light-BROUb78j.js","./use-locale-ounaKjEE.js","./Suffix-BbRNyFkB.js","./ListItem-BKbo-nXp.js","./SelectorDrawer-Bbrjv1sE.css","./Image-PtRSDGwm.js","./light-DRGk5TVb.js","./fade-in-height-expand.cssr-DyR_RKds.js","./light-lnHs8LnC.js","./light-Bd0BNIZi.js","./light-CZ9BzmNz.js","./light-CC6P0vz_.js","./light-DIHnpgsO.js","./platform-CkNr5NGL.js","./light-U4YS7jFg.js","./use-theme-vars-BKzvFGVC.js","./Space-B53i5IGA.js","./imu-DKY0j8mh.js","./TrackerView-I0_gNIhT.css","./SketchCentreView-BRqttZsz.js","./FileText-CKYK_0fI.js","./interface-FmwLMQWo.js","./Switch-C9nTyohH.js","./attribute-D0SPblMn.js","./src-BZRJXk7C.js","./PerformantEllipsis-BS-dAXHD.js","./SketchCentreView-CK9pnWUf.css","./AboutView-x_UzT348.js","./AnchorAdapter-rWFJftSY.js","./Divider-C7YPbWTs.js","./AboutView-D9FIFBOv.css","./SettingsView-Cu4fb148.js","./vue-router-CsA8pD0Y.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-I45nwavc.js","./Alert-I9EOWz9G.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-COJ1Eg6o.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-nKMYbvBJ.js";
import "./light-DwF4oYuH.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-DB7o9cHn.js";
import { i as n, r } from "./vue-router-CsA8pD0Y.js";
import "./sketch-store-DqJARFZt.js";
import "./core-D1D99Wf6.js";
import "./platform-CkNr5NGL.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-D1vBoyw4.js";
import a from "./SketchCentreView-BRqttZsz.js";
import o from "./AboutView-x_UzT348.js";
import s from "./SettingsView-Cu4fb148.js";
import c from "./ApiDetectionView-I45nwavc.js";
import l from "./SensorTestView-COJ1Eg6o.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-D1vBoyw4.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-BRqttZsz.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-x_UzT348.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-Cu4fb148.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-I45nwavc.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-COJ1Eg6o.js").then(async (m) => {
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
