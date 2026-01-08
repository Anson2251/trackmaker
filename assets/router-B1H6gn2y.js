const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-DDpVWYNd.js","./index-CYjE8tga.js","./index-DJu8CCCW.css","./Card-DdZpYuN6.js","./sketch-store-CsThFmYm.js","./light-DrGL0wr2.js","./text-C0BRCUgW.js","./storage-NmD7R8iW.js","./Warning-CBMoWy9C.js","./fade-in-scale-up.cssr-iY787dxP.js","./light-D6cozbbN.js","./light-E2J33dPM.js","./use-locale-D2Cm_9Ox.js","./Suffix-DZZ_9rly.js","./vue-i18n-Ci3j_veG.js","./Image-D_P1BE-G.js","./light-SjfTOyiq.js","./Tooltip--t1QtYmk.js","./fade-in-height-expand.cssr-DB7nifgT.js","./light-D0qmV8Gi.js","./light-Bn8N3kXO.js","./light-Cm6xnBWo.js","./light-XJd-_nOX.js","./light-DZwQtCqP.js","./platform-CX8yJSaT.js","./light-wGlINGd_.js","./use-theme-vars-Ua1P-HD_.js","./Space-BmZdSGRe.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-D_1vzbMh.css","./SketchCentreView-euHM1Oal.js","./FileText-BBPxwLio.js","./interface-By_sO4mL.js","./core-CnaEy2ER.js","./Switch-B_EDCUsi.js","./attribute-DEczkePJ.js","./ListItem-CQyygcrU.js","./SketchCentreView-D0BfIJOK.css","./AboutView-Ds4WQDS5.js","./AnchorAdapter-BjzFO7MB.js","./Divider-BaQRafxX.js","./AboutView-BGOn7na1.css","./SettingsView-CTX2uuNg.js","./PerformantEllipsis-C8tFxaZN.js","./vue-router-D5jS1txC.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-CYEeVvfn.js","./Alert-kcJwJqda.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-OXc5bMPs.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-CsThFmYm.js";
import "./light-DrGL0wr2.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-CYjE8tga.js";
import { i as n, r } from "./vue-router-D5jS1txC.js";
import "./storage-NmD7R8iW.js";
import "./platform-CX8yJSaT.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-DDpVWYNd.js";
import a from "./SketchCentreView-euHM1Oal.js";
import o from "./AboutView-Ds4WQDS5.js";
import s from "./SettingsView-CTX2uuNg.js";
import c from "./ApiDetectionView-CYEeVvfn.js";
import l from "./SensorTestView-OXc5bMPs.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-DDpVWYNd.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-euHM1Oal.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-Ds4WQDS5.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-CTX2uuNg.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-CYEeVvfn.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-OXc5bMPs.js").then(async (m) => {
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
