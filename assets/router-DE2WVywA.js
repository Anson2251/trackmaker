const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-CN2KTw4A.js","./index-BS29D1DG.js","./index-DJu8CCCW.css","./Card-CfqFSU60.js","./sketch-store-D1H4eMIG.js","./light-D7l_EYRp.js","./text-_nbSDoT0.js","./storage-DOGmZhnH.js","./Warning-DSXDuHq5.js","./fade-in-scale-up.cssr-Dj5hCC64.js","./light-BDYeDyNz.js","./light-E2J33dPM.js","./use-locale-jwlfXO6E.js","./Suffix-BwYCecYf.js","./vue-i18n-BNUrasmw.js","./Image-Hyi-bcdZ.js","./light-BgP18l4Y.js","./Tooltip-CfZT1Ddw.js","./fade-in-height-expand.cssr-Bp44Xfe4.js","./light-BQxqghI0.js","./light-BQaaoUhl.js","./light-Dw6CJAuq.js","./light-DYeZ8uck.js","./light-DGRYuaYR.js","./platform-Bq-UXwUZ.js","./light-CM76U9Rl.js","./use-theme-vars-B8ixSXGm.js","./Space-9zLD1yWW.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-D011XRhI.css","./SketchCentreView-CEFikYG0.js","./FileText-R3wir4Qy.js","./omit-Bi1z4VdF.js","./core-CjRjcW9P.js","./Switch--r7fCO5n.js","./attribute-WIWhL5KW.js","./ListItem-CRqp1C3j.js","./SketchCentreView-Dzpv30jJ.css","./AboutView-Cy6V74rt.js","./AnchorAdapter-DVkhM7rm.js","./Divider-Dbq83uWE.js","./AboutView-BGOn7na1.css","./SettingsView-CBwnntnn.js","./PerformantEllipsis-DdPGxGnD.js","./vue-router-DIM0RbJL.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-DSNkfiOT.js","./Alert-rIGbLY_z.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-IkFWBiA5.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-D1H4eMIG.js";
import "./light-D7l_EYRp.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-BS29D1DG.js";
import { i as n, r } from "./vue-router-DIM0RbJL.js";
import "./storage-DOGmZhnH.js";
import "./platform-Bq-UXwUZ.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-CN2KTw4A.js";
import a from "./SketchCentreView-CEFikYG0.js";
import o from "./AboutView-Cy6V74rt.js";
import s from "./SettingsView-CBwnntnn.js";
import c from "./ApiDetectionView-DSNkfiOT.js";
import l from "./SensorTestView-IkFWBiA5.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-CN2KTw4A.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-CEFikYG0.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-Cy6V74rt.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-CBwnntnn.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-DSNkfiOT.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-IkFWBiA5.js").then(async (m) => {
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
