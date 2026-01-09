const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-BHnGikX9.js","./index-upUQvnWP.js","./index-D5akWEw-.css","./Card-BMn0DEsU.js","./sketch-store-CKZSW1ZL.js","./light-LIQTTSW0.js","./text-CZYt6vIU.js","./storage-Cqqyke_s.js","./Warning-CaO3vn2y.js","./fade-in-scale-up.cssr-DAx3tvLU.js","./light-DRmdkD69.js","./light-E2J33dPM.js","./use-locale-BBYNPbX1.js","./Suffix-DMexg-aT.js","./vue-i18n-q00Kp9VY.js","./Image-BkSAOWOb.js","./light-Bgnek_u8.js","./Tooltip-BU3BcRQH.js","./fade-in-height-expand.cssr-B-hiW5Nm.js","./light-D0KPKVuu.js","./light-2tWNa-l1.js","./light-CPSj9lDr.js","./light-BDIJqgSV.js","./light-Ow7COvWQ.js","./platform-IPMV8cHy.js","./light-DR5XtmH0.js","./use-theme-vars-DPr6lOsj.js","./Space-6b0PMdkx.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-DJANHger.css","./SketchCentreView-Bus41Y4v.js","./FileText-Bknyks2g.js","./interface-BR-9RgvV.js","./core-BOVpb-DN.js","./Switch-DLsxxuzo.js","./attribute-CB8NJU4g.js","./ListItem-CZQExHQK.js","./SketchCentreView-D0BfIJOK.css","./AboutView-Bx8kIExc.js","./AnchorAdapter-1x1GFCd_.js","./Divider-Cysv5E-f.js","./AboutView-BGOn7na1.css","./SettingsView-VK_vHjo_.js","./PerformantEllipsis-By7bBTGJ.js","./vue-router-CtNjyKWk.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-BnlrL6_D.js","./Alert-CE7zBgen.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-3S_TO04f.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-CKZSW1ZL.js";
import "./light-LIQTTSW0.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-upUQvnWP.js";
import { i as n, r } from "./vue-router-CtNjyKWk.js";
import "./storage-Cqqyke_s.js";
import "./platform-IPMV8cHy.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-BHnGikX9.js";
import a from "./SketchCentreView-Bus41Y4v.js";
import o from "./AboutView-Bx8kIExc.js";
import s from "./SettingsView-VK_vHjo_.js";
import c from "./ApiDetectionView-BnlrL6_D.js";
import l from "./SensorTestView-3S_TO04f.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-BHnGikX9.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-Bus41Y4v.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-Bx8kIExc.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-VK_vHjo_.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-BnlrL6_D.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-3S_TO04f.js").then(async (m) => {
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
