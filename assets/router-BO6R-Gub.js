const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-C09AGp91.js","./index-lIAgGLuV.js","./index-D5akWEw-.css","./Card-D_DaNXyK.js","./SelectorDrawer-BD1VErIm.js","./vue-i18n-DzCIHuIs.js","./light-DStk_u6n.js","./sketch-store-CvJqFvPU.js","./core-B0GgJVIi.js","./Warning-BT_cbo8R.js","./fade-in-scale-up.cssr-Cs4gy4Y4.js","./light-DgETFGvr.js","./light-BROUb78j.js","./use-locale-Ce8mSbNB.js","./Suffix-DSvOJTsR.js","./ListItem-DARmD-J-.js","./SelectorDrawer-Bbrjv1sE.css","./Image-CvIFwyRS.js","./light-BDtLuh-e.js","./fade-in-height-expand.cssr-Cr-ZYPZ4.js","./light-fWr8Cf-Q.js","./light-BJXQrmam.js","./light-BIvIrq1F.js","./light-BYbobzkO.js","./light-BxmLB9Jh.js","./platform-C6DHBMb6.js","./light-ABmKt_Qw.js","./use-theme-vars-BphERCET.js","./Space-BFhK259j.js","./imu-DKY0j8mh.js","./TrackerView-I0_gNIhT.css","./SketchCentreView-dsD2tWgT.js","./FileText-Dxk7UWFJ.js","./interface-CmukCGeL.js","./Switch-DIsYg-Ts.js","./attribute-Dtv4f1Yd.js","./src-BjIPQQyN.js","./PerformantEllipsis-ChHd4Jr0.js","./SketchCentreView-CK9pnWUf.css","./AboutView-DX8ti6TS.js","./AnchorAdapter-DrquVJzJ.js","./Divider-CCjzvOeW.js","./AboutView-BYA3zqAp.css","./SettingsView-DM8BcbTX.js","./vue-router-D837kSN1.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-C14-uNkw.js","./Alert-Ba22hNQ-.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-CvtIzxf3.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-BD1VErIm.js";
import "./light-DStk_u6n.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-lIAgGLuV.js";
import { i as n, r } from "./vue-router-D837kSN1.js";
import "./sketch-store-CvJqFvPU.js";
import "./core-B0GgJVIi.js";
import "./platform-C6DHBMb6.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-C09AGp91.js";
import a from "./SketchCentreView-dsD2tWgT.js";
import o from "./AboutView-DX8ti6TS.js";
import s from "./SettingsView-DM8BcbTX.js";
import c from "./ApiDetectionView-C14-uNkw.js";
import l from "./SensorTestView-CvtIzxf3.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-C09AGp91.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-dsD2tWgT.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-DX8ti6TS.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-DM8BcbTX.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-C14-uNkw.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-CvtIzxf3.js").then(async (m) => {
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
