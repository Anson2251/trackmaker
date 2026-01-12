const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-DagtA8ri.js","./index-r0C5oGDu.js","./index-D5akWEw-.css","./Card-D6Faxnud.js","./SelectorDrawer-D1Xgz0qV.js","./vue-i18n-CL3y7GhZ.js","./light-C_7nxyFk.js","./sketch-store-NwWycm13.js","./core-BYCRoZon.js","./Warning-CKM6oBd4.js","./fade-in-scale-up.cssr-1n_XXikj.js","./light-D5ySVJOn.js","./light-BROUb78j.js","./use-locale-D1ny-Nf5.js","./Suffix-C4B9lp4T.js","./ListItem-CYtXp1aq.js","./SelectorDrawer-Bbrjv1sE.css","./Image-mPNAWpbP.js","./light-BD6g2gnm.js","./fade-in-height-expand.cssr-BlSR261r.js","./light-CeJqoxyR.js","./light-C_H4MXJN.js","./light-Ds5C7VtC.js","./light-zERhDY3n.js","./light-CJq0TRTz.js","./platform-hbQjlH8S.js","./light-CGI1Uf7-.js","./use-theme-vars-YhCgDWwi.js","./Space-CDmTOO2Q.js","./imu-DKY0j8mh.js","./TrackerView-BLBU1EJU.css","./SketchCentreView-nc2Nyg9_.js","./FileText-D2_tJSAg.js","./interface-v-FdJ1yR.js","./Switch-D-AleTtY.js","./attribute-Bkcd5rOc.js","./src-B26Er_-7.js","./PerformantEllipsis-Co1869nz.js","./SketchCentreView-CK9pnWUf.css","./AboutView-D54PW9QM.js","./AnchorAdapter-CaEqSqoY.js","./Divider-B27QDb3_.js","./AboutView-D9FIFBOv.css","./SettingsView-Cmg4yD76.js","./vue-router-LFrCRHvG.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-BxnboTsB.js","./Alert-BqQYDk68.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-B5eY6CbF.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-D1Xgz0qV.js";
import "./light-C_7nxyFk.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-r0C5oGDu.js";
import { i as n, r } from "./vue-router-LFrCRHvG.js";
import "./sketch-store-NwWycm13.js";
import "./core-BYCRoZon.js";
import "./platform-hbQjlH8S.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-DagtA8ri.js";
import a from "./SketchCentreView-nc2Nyg9_.js";
import o from "./AboutView-D54PW9QM.js";
import s from "./SettingsView-Cmg4yD76.js";
import c from "./ApiDetectionView-BxnboTsB.js";
import l from "./SensorTestView-B5eY6CbF.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-DagtA8ri.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-nc2Nyg9_.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-D54PW9QM.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-Cmg4yD76.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-BxnboTsB.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-B5eY6CbF.js").then(async (m) => {
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
