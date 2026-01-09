const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-1HnBrF18.js","./index-O8NpUPpF.js","./index-D5akWEw-.css","./Card-Dr9B_uZL.js","./sketch-store-CZHL7Aaw.js","./light-NB7Mgshm.js","./text-BtGAgITY.js","./storage-DubEvtUa.js","./Warning-DEq4YYfc.js","./fade-in-scale-up.cssr-BPiguz3v.js","./light-BZOsm7EX.js","./light-E2J33dPM.js","./use-locale-B6ooBjxk.js","./Suffix-86m65VmN.js","./vue-i18n-BPB4_Zx2.js","./Image-DpJUNwqA.js","./light-BiNb71rV.js","./Tooltip-DPdCyf_J.js","./fade-in-height-expand.cssr-C_8JNsVz.js","./light-C1l-29bX.js","./light-CVngR0F7.js","./light-B_chz4uo.js","./light-DkKiBPg6.js","./light-CyyYQOeE.js","./platform-RPBHoXDP.js","./light-Dr8IRREV.js","./use-theme-vars-C0fq9q5T.js","./Space-CkZejPM7.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-DrlS7tGF.css","./SketchCentreView-BMphXSMY.js","./FileText-C6pdNWA_.js","./interface-BV1hQmMI.js","./core-Btp6Mj4H.js","./Switch-CPE2XswT.js","./attribute-DBS2Uy1K.js","./ListItem-uXnQaezC.js","./SketchCentreView-D0BfIJOK.css","./AboutView-CvW1fMmG.js","./AnchorAdapter-C5yU_Z-R.js","./Divider-BPI15Mys.js","./AboutView-BGOn7na1.css","./SettingsView-n-JWwTis.js","./PerformantEllipsis-BFegoaVA.js","./vue-router-I2A_HsaJ.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-THKAKZI0.js","./Alert-S6XZLu-A.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-D5PIzvRx.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-CZHL7Aaw.js";
import "./light-NB7Mgshm.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-O8NpUPpF.js";
import { i as n, r } from "./vue-router-I2A_HsaJ.js";
import "./storage-DubEvtUa.js";
import "./platform-RPBHoXDP.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-1HnBrF18.js";
import a from "./SketchCentreView-BMphXSMY.js";
import o from "./AboutView-CvW1fMmG.js";
import s from "./SettingsView-n-JWwTis.js";
import c from "./ApiDetectionView-THKAKZI0.js";
import l from "./SensorTestView-D5PIzvRx.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-1HnBrF18.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-BMphXSMY.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-CvW1fMmG.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-n-JWwTis.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-THKAKZI0.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-D5PIzvRx.js").then(async (m) => {
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
