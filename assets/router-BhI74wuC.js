const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-Cy4E8AhG.js","./index-FNEkF6XC.js","./index-D5akWEw-.css","./Card-CH6uHjvc.js","./SelectorDrawer-BN48VBqi.js","./vue-i18n-u4_zRWQ2.js","./light-BZsC2aSB.js","./sketch-store-BrUjIzEV.js","./core-8-WIQw0z.js","./Warning-BcKZOo5J.js","./fade-in-scale-up.cssr-BEKQT_KF.js","./light-C8HzqphU.js","./light-BROUb78j.js","./use-locale-B1YtxxCK.js","./Suffix-C_-8e7mQ.js","./ListItem-Djxi4AtB.js","./SelectorDrawer-Bbrjv1sE.css","./Image-3K1Uk2Pv.js","./light-D72Wp178.js","./fade-in-height-expand.cssr-nQ2j47AO.js","./light-DBIg5bug.js","./light-BwGMtT4y.js","./light-B44saW8Z.js","./light-kBAPCrde.js","./light-Cc3bzYA7.js","./platform-DmLNIlhY.js","./light-BPWI4Y1w.js","./use-theme-vars-ifF5svhZ.js","./Space-BZJUzyPc.js","./imu-DKY0j8mh.js","./TrackerView-xqlPg7-7.css","./SketchCentreView-CBeEiX0X.js","./FileText-CCg6D_o9.js","./interface-BoXIKNbL.js","./Switch-ZtUwI39F.js","./attribute-Df9gSFac.js","./src-DYwFEjOq.js","./PerformantEllipsis-hxMkVLhC.js","./SketchCentreView-CK9pnWUf.css","./AboutView-BNlTIkX9.js","./AnchorAdapter-DjNH4yN_.js","./Divider-BUKULf8l.js","./AboutView-D9FIFBOv.css","./SettingsView-BNsBGb2D.js","./vue-router-Dj8SnXqN.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-mYDDbBzQ.js","./Alert-iivxMKaC.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-D5Ey19gD.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-BN48VBqi.js";
import "./light-BZsC2aSB.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-FNEkF6XC.js";
import { i as n, r } from "./vue-router-Dj8SnXqN.js";
import "./sketch-store-BrUjIzEV.js";
import "./core-8-WIQw0z.js";
import "./platform-DmLNIlhY.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-Cy4E8AhG.js";
import a from "./SketchCentreView-CBeEiX0X.js";
import o from "./AboutView-BNlTIkX9.js";
import s from "./SettingsView-BNsBGb2D.js";
import c from "./ApiDetectionView-mYDDbBzQ.js";
import l from "./SensorTestView-D5Ey19gD.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-Cy4E8AhG.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-CBeEiX0X.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-BNlTIkX9.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-BNsBGb2D.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-mYDDbBzQ.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-D5Ey19gD.js").then(async (m) => {
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
