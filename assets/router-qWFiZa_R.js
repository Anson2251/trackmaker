const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-De-9tQRU.js","./index-BQuUBdbi.js","./index-DJu8CCCW.css","./Card-CcG1RIrm.js","./sketch-store-CFW_Wr_p.js","./light-DZfyTys9.js","./text-DeGNZC_w.js","./storage-C1F1uPZc.js","./Warning-CMYkCL83.js","./fade-in-scale-up.cssr-B-perurL.js","./light-oCqRXeBt.js","./light-E2J33dPM.js","./use-locale-2hH6lwre.js","./Suffix-D9mw52dN.js","./vue-i18n-g1rfMM6q.js","./Image-C4rtaHi2.js","./light-BIdME75G.js","./Tooltip-q9ouPHGY.js","./fade-in-height-expand.cssr-CCRBakur.js","./light-BTFWgVwW.js","./light-C-B7VC4j.js","./light-PANTypLj.js","./light-DgZ55oJk.js","./light-BjM3MGQW.js","./platform-B9i3G92X.js","./light-bUNpSpEP.js","./use-theme-vars-CPvANAdZ.js","./Space-Tb6DBcxT.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-BaE7LsQv.css","./SketchCentreView-60aJQN5k.js","./FileText-E6smyngk.js","./interface-mUgTIU7J.js","./core-ChxmgnzX.js","./Switch-COSNkL2f.js","./attribute-DinnHV_v.js","./ListItem-fkRE_M_z.js","./SketchCentreView-D0BfIJOK.css","./AboutView-DfXTwc7D.js","./AnchorAdapter-D8g7DyvB.js","./Divider-NDM-2Evm.js","./AboutView-BGOn7na1.css","./SettingsView-is4zdSMR.js","./PerformantEllipsis-Y9BWrfzR.js","./vue-router-QSI6Ph6K.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-D0Fs-uhW.js","./Alert-C2xtr8W7.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-D5zL-EYT.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-CFW_Wr_p.js";
import "./light-DZfyTys9.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-BQuUBdbi.js";
import { i as n, r } from "./vue-router-QSI6Ph6K.js";
import "./storage-C1F1uPZc.js";
import "./platform-B9i3G92X.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-De-9tQRU.js";
import a from "./SketchCentreView-60aJQN5k.js";
import o from "./AboutView-DfXTwc7D.js";
import s from "./SettingsView-is4zdSMR.js";
import c from "./ApiDetectionView-D0Fs-uhW.js";
import l from "./SensorTestView-D5zL-EYT.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-De-9tQRU.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-60aJQN5k.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-DfXTwc7D.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-is4zdSMR.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-D0Fs-uhW.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-D5zL-EYT.js").then(async (m) => {
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
