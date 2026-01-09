const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-D-xS39I4.js","./index-02CySuUY.js","./index-D5akWEw-.css","./Card-BPo-afCF.js","./sketch-store-D04V3t-2.js","./light-CFnnQ0GY.js","./text-BkNNk586.js","./storage-BIngOumF.js","./Warning-M3QZR7FD.js","./fade-in-scale-up.cssr-CsEaajSt.js","./light-DMI1HoCO.js","./light-E2J33dPM.js","./use-locale-BOj1UADG.js","./Suffix-J62ENC71.js","./vue-i18n-DRooztuU.js","./Image-B1YWuMS2.js","./light-4k8YH5Ji.js","./Tooltip-DtAJZU2c.js","./fade-in-height-expand.cssr-CsN1lqIP.js","./light-Cl9kxzr6.js","./light-DHlUI3iS.js","./light-BvLQkzIN.js","./light-hGdgCp1o.js","./light-j-Q-wSOK.js","./platform-kionGoc_.js","./light-CR8Tm7PC.js","./use-theme-vars-Bc2yBCgP.js","./Space-VSqa0dSJ.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-BkylvLaa.css","./SketchCentreView-Jvu1-K_Z.js","./FileText-DCMaq37B.js","./interface-CqkPbqpI.js","./core-B_Ij4RRG.js","./Switch-Gien4--2.js","./attribute-B5iA8Fl5.js","./ListItem-Buk_HEyK.js","./SketchCentreView-D0BfIJOK.css","./AboutView-DbznK68m.js","./AnchorAdapter-bqbDUfM4.js","./Divider-BrVjzEO4.js","./AboutView-BGOn7na1.css","./SettingsView-B0hbXLWr.js","./PerformantEllipsis-D3mNzTqu.js","./vue-router-BEK7XWOP.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-5KmuL2-q.js","./Alert-DMdB-REe.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-DE6hdLu2.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-D04V3t-2.js";
import "./light-CFnnQ0GY.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-02CySuUY.js";
import { i as n, r } from "./vue-router-BEK7XWOP.js";
import "./storage-BIngOumF.js";
import "./platform-kionGoc_.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-D-xS39I4.js";
import a from "./SketchCentreView-Jvu1-K_Z.js";
import o from "./AboutView-DbznK68m.js";
import s from "./SettingsView-B0hbXLWr.js";
import c from "./ApiDetectionView-5KmuL2-q.js";
import l from "./SensorTestView-DE6hdLu2.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-D-xS39I4.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-Jvu1-K_Z.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-DbznK68m.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-B0hbXLWr.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-5KmuL2-q.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-DE6hdLu2.js").then(async (m) => {
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
