const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-BeHz-d_X.js","./index-GZymRP-4.js","./index-D5akWEw-.css","./Card-frUv3Ayy.js","./SelectorDrawer-Ceveo2__.js","./vue-i18n-CQKaeG0c.js","./light-CGnuygd_.js","./sketch-store-D80MIhTY.js","./core-MDQjsoCY.js","./Warning-BNHWZ2yM.js","./fade-in-scale-up.cssr-XFSbhwAV.js","./light-B8gmz6jJ.js","./light-BROUb78j.js","./use-locale-Bra7yZA7.js","./Suffix-CYQ8E8QJ.js","./ListItem-4MiBfZkV.js","./SelectorDrawer-Bbrjv1sE.css","./Image-BMBiHiwC.js","./light-C0K8jlTc.js","./fade-in-height-expand.cssr-4xvgV-JG.js","./light-BIBjreiN.js","./light-PnB4o6Sj.js","./light-DUCyAUqE.js","./light-ZEnKBaOi.js","./light-CWq0WqIP.js","./platform-BLTqp31A.js","./light-GJSlRpcH.js","./use-theme-vars-DzMmt315.js","./Space-eHGkmnJE.js","./imu-DKY0j8mh.js","./TrackerView-I0_gNIhT.css","./SketchCentreView-D2bCIQQM.js","./FileText-Bed7QKJR.js","./interface-BbRk9gPF.js","./Switch-CIX31qZg.js","./attribute-Crmh6DoJ.js","./src-ChM_Rkty.js","./PerformantEllipsis-Gi2o0zjs.js","./SketchCentreView-CK9pnWUf.css","./AboutView-DRrqgOGk.js","./AnchorAdapter-D-4MpQ7S.js","./Divider-ByDTANnR.js","./AboutView-D9FIFBOv.css","./SettingsView-C5FlWIjd.js","./vue-router-jLAfvIJH.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-B3UUaSn3.js","./Alert-BDKyQ8gP.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-CnR9np4Q.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-Ceveo2__.js";
import "./light-CGnuygd_.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-GZymRP-4.js";
import { i as n, r } from "./vue-router-jLAfvIJH.js";
import "./sketch-store-D80MIhTY.js";
import "./core-MDQjsoCY.js";
import "./platform-BLTqp31A.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-BeHz-d_X.js";
import a from "./SketchCentreView-D2bCIQQM.js";
import o from "./AboutView-DRrqgOGk.js";
import s from "./SettingsView-C5FlWIjd.js";
import c from "./ApiDetectionView-B3UUaSn3.js";
import l from "./SensorTestView-CnR9np4Q.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-BeHz-d_X.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-D2bCIQQM.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-DRrqgOGk.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-C5FlWIjd.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-B3UUaSn3.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-CnR9np4Q.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([49,1,2,3,5,47,9,19,21,26,29,50]), import.meta.url)
      }
    ]
  });
});
export {
  __tla,
  u as default
};
