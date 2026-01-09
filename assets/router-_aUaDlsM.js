const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-BAsz6kv8.js","./index-CUxSoUWF.js","./index-D5akWEw-.css","./Card-bZRU5_dU.js","./sketch-store-CYoYzZ0i.js","./light-D_ALVt-Q.js","./text-CYcJjwNn.js","./storage-BvOi6SEb.js","./Warning-BjtCx2_J.js","./fade-in-scale-up.cssr-Cry6SdAY.js","./light-CM8iIc7G.js","./light-E2J33dPM.js","./use-locale-SVRhztN4.js","./Suffix-DSN4asCg.js","./vue-i18n-BtzQh6_6.js","./Image-BJ9n3l-g.js","./light-DCmVWH0s.js","./Tooltip-CykCQjoz.js","./fade-in-height-expand.cssr-D265MkAM.js","./light-CSQCClQ1.js","./light-CBUQ_0Vu.js","./light-WB-21AGI.js","./light-B4Czxd-W.js","./light-B7SSE7ZN.js","./platform-DAcN5MiP.js","./light-RKbcBR8I.js","./use-theme-vars-CqyhXyr1.js","./Space-CfPGOt1p.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-Dt-tzQGP.css","./SketchCentreView-BrKfObFk.js","./FileText-CSJKyqgv.js","./interface-r6WX6bJv.js","./core-CRm4dJjp.js","./Switch-BgLoCphz.js","./attribute-BjRHbRSg.js","./ListItem-DUy-uA9z.js","./SketchCentreView-D0BfIJOK.css","./AboutView-G1srqQzB.js","./AnchorAdapter-BSKDQmFd.js","./Divider-DO5p3x0N.js","./AboutView-BGOn7na1.css","./SettingsView-bsUA5sBr.js","./PerformantEllipsis-DRxbcQZs.js","./vue-router-Dv7iGBvj.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-CIvykRqk.js","./Alert-C05542QE.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-CDPrHeG-.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-CYoYzZ0i.js";
import "./light-D_ALVt-Q.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-CUxSoUWF.js";
import { i as n, r } from "./vue-router-Dv7iGBvj.js";
import "./storage-BvOi6SEb.js";
import "./platform-DAcN5MiP.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-BAsz6kv8.js";
import a from "./SketchCentreView-BrKfObFk.js";
import o from "./AboutView-G1srqQzB.js";
import s from "./SettingsView-bsUA5sBr.js";
import c from "./ApiDetectionView-CIvykRqk.js";
import l from "./SensorTestView-CDPrHeG-.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-BAsz6kv8.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-BrKfObFk.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-G1srqQzB.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-bsUA5sBr.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-CIvykRqk.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-CDPrHeG-.js").then(async (m) => {
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
