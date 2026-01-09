const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-3sg8R2Cx.js","./index-BKmvGcPh.js","./index-D5akWEw-.css","./Card-D60iqeq5.js","./sketch-store-DD5mnTkW.js","./light-BMk8WVBh.js","./text-4TXyaCAA.js","./storage-V9xFiAD0.js","./Warning-ClvuPkDC.js","./fade-in-scale-up.cssr-BsmsoH4k.js","./light-D7uoZOAv.js","./light-E2J33dPM.js","./use-locale-BlbY2BSv.js","./Suffix-B282v8rl.js","./vue-i18n-DHAY1egt.js","./Image-CGIg-bQh.js","./light-sjacYQTD.js","./Tooltip-CSsbgG0a.js","./fade-in-height-expand.cssr-C80qYg3D.js","./light-D18AYc4M.js","./light-kjjpjI2c.js","./light-CnB0GTIk.js","./light-DD-U-ruY.js","./light-CpC5x5cn.js","./platform-gMXK0SRr.js","./light-BcQ2yIOU.js","./use-theme-vars-7Z-QG9O5.js","./Space--AwuZ-MT.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-BkylvLaa.css","./SketchCentreView-DnB9VoVP.js","./FileText-DxvrsJen.js","./interface-CIMQ1nPs.js","./core-mJed2MS8.js","./Switch-BLAno_Pq.js","./attribute-DAJSg53s.js","./ListItem-BxFkz237.js","./SketchCentreView-D0BfIJOK.css","./AboutView-BDkfqxDm.js","./AnchorAdapter-Bk5ZPJyq.js","./Divider-dAAqa5Rw.js","./AboutView-BGOn7na1.css","./SettingsView-72-ra6t0.js","./PerformantEllipsis-BJ6MkXvT.js","./vue-router-BzEIeKkE.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-Dwz9Yn47.js","./Alert-Csdl9028.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-BRJCBman.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-DD5mnTkW.js";
import "./light-BMk8WVBh.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-BKmvGcPh.js";
import { i as n, r } from "./vue-router-BzEIeKkE.js";
import "./storage-V9xFiAD0.js";
import "./platform-gMXK0SRr.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-3sg8R2Cx.js";
import a from "./SketchCentreView-DnB9VoVP.js";
import o from "./AboutView-BDkfqxDm.js";
import s from "./SettingsView-72-ra6t0.js";
import c from "./ApiDetectionView-Dwz9Yn47.js";
import l from "./SensorTestView-BRJCBman.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-3sg8R2Cx.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-DnB9VoVP.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-BDkfqxDm.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-72-ra6t0.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-Dwz9Yn47.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-BRJCBman.js").then(async (m) => {
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
