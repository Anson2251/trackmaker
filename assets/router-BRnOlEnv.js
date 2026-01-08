const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-E5JQkg1j.js","./index-Dp5QXTAC.js","./index-DJu8CCCW.css","./Card-ClR_k1CL.js","./sketch-store-DPBacnuP.js","./light-C7QIC2jc.js","./text-C2VTd_If.js","./storage-CA2iFEnv.js","./Warning-DFQOiZkO.js","./fade-in-scale-up.cssr-Dqyq0C78.js","./light-Dr9BohuC.js","./light-E2J33dPM.js","./use-locale-BgdwVIoL.js","./Suffix-D5qi-ahW.js","./vue-i18n-BER_FdgO.js","./Image-CMzy5SLb.js","./light-CmrK63a1.js","./Tooltip-CPE_pTPu.js","./fade-in-height-expand.cssr-a-4T_jlH.js","./light-BrferyD6.js","./light-sEykqS0h.js","./light-DONdxKe5.js","./light-wGZg_oQ_.js","./light-Cwo6e2Vx.js","./platform-xij7wad6.js","./light-C2530CDc.js","./use-theme-vars-CgkJSE4D.js","./Space-CF5CNqFm.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-D011XRhI.css","./SketchCentreView-BHzkDVt1.js","./FileText-a2R-fkEf.js","./interface-roJECRNt.js","./core-BhO7Tkso.js","./Switch-BXh-A60H.js","./attribute-CCrSi1Fk.js","./ListItem-DTHZ6SuJ.js","./SketchCentreView-D0BfIJOK.css","./AboutView-LLwSYE_7.js","./AnchorAdapter-DLhLnCiD.js","./Divider-DtexilfC.js","./AboutView-BGOn7na1.css","./SettingsView-CwOjUZwD.js","./PerformantEllipsis-Dg8CkpQf.js","./vue-router-DCBmQpd-.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-0G9P-CBU.js","./Alert-COAyyQvq.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-dfqhB0oo.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-DPBacnuP.js";
import "./light-C7QIC2jc.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-Dp5QXTAC.js";
import { i as n, r } from "./vue-router-DCBmQpd-.js";
import "./storage-CA2iFEnv.js";
import "./platform-xij7wad6.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-E5JQkg1j.js";
import a from "./SketchCentreView-BHzkDVt1.js";
import o from "./AboutView-LLwSYE_7.js";
import s from "./SettingsView-CwOjUZwD.js";
import c from "./ApiDetectionView-0G9P-CBU.js";
import l from "./SensorTestView-dfqhB0oo.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-E5JQkg1j.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-BHzkDVt1.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-LLwSYE_7.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-CwOjUZwD.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-0G9P-CBU.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-dfqhB0oo.js").then(async (m) => {
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
