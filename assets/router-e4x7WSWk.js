const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-B5rVSDml.js","./index-BXOrb7c0.js","./index-D5akWEw-.css","./Card-Bg4yt5PU.js","./sketch-store-BjIwiDXn.js","./light-D-u69n34.js","./text-F0WiKyQb.js","./storage-CF9DA9_n.js","./Warning-a4xGF97v.js","./fade-in-scale-up.cssr-B_Z8jf_c.js","./light-Bg_EABBB.js","./light-E2J33dPM.js","./use-locale-CjFwo8gM.js","./Suffix-BaxZ-rtu.js","./vue-i18n-nZMmpqz8.js","./Image-By0K-wUK.js","./light-BeU7yaA4.js","./Tooltip-ukJ_2waB.js","./fade-in-height-expand.cssr-X-dH37ux.js","./light-BPc53kQU.js","./light-D7ai8lFO.js","./light-BfgMpwAB.js","./light-Crmj-6Bg.js","./light-DP93VZwF.js","./platform-B1hdrP4E.js","./light-ENI3ynpu.js","./use-theme-vars-DoDH7hiT.js","./Space-CJdaBYm8.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-BkylvLaa.css","./SketchCentreView-CeZcWcA6.js","./FileText-DDCo41bb.js","./interface-DAujj-vR.js","./core-CRBwsMsl.js","./Switch-BLlAG3i3.js","./attribute-tb1yskaK.js","./ListItem-B44sMDkR.js","./SketchCentreView-D0BfIJOK.css","./AboutView-EH6V3ltY.js","./AnchorAdapter-B09E9nGj.js","./Divider-DikR0V4m.js","./AboutView-BGOn7na1.css","./SettingsView-_b94nHzA.js","./PerformantEllipsis-BOi0fzT2.js","./vue-router-C-aMDzT-.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-CQixnmDW.js","./Alert-BnLHTXm-.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-DLPryLEf.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-BjIwiDXn.js";
import "./light-D-u69n34.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-BXOrb7c0.js";
import { i as n, r } from "./vue-router-C-aMDzT-.js";
import "./storage-CF9DA9_n.js";
import "./platform-B1hdrP4E.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-B5rVSDml.js";
import a from "./SketchCentreView-CeZcWcA6.js";
import o from "./AboutView-EH6V3ltY.js";
import s from "./SettingsView-_b94nHzA.js";
import c from "./ApiDetectionView-CQixnmDW.js";
import l from "./SensorTestView-DLPryLEf.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-B5rVSDml.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-CeZcWcA6.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-EH6V3ltY.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-_b94nHzA.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-CQixnmDW.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-DLPryLEf.js").then(async (m) => {
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
