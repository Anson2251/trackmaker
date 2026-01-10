const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-gp2ZU1WX.js","./index-XWtbsHgt.js","./index-D5akWEw-.css","./Card-DEA6VsPG.js","./SelectorDrawer-W45Mc--e.js","./vue-i18n-Dmf_laBx.js","./light-Blg-TFP8.js","./sketch-store-DmjMUJDN.js","./core-D149hgw2.js","./Warning-CSLW0KiX.js","./fade-in-scale-up.cssr-D7GUXDWn.js","./light-B5D05_GN.js","./light-BROUb78j.js","./use-locale-DhdwVdz7.js","./Suffix-Dof6sFx5.js","./ListItem-ChgPIOyH.js","./SelectorDrawer-Bbrjv1sE.css","./Image-Bp2aBk-n.js","./light-Btt596Zv.js","./fade-in-height-expand.cssr-Blv-DwdX.js","./light-BVdu4vbY.js","./light-NILPku1N.js","./light-DF8glz5U.js","./light-CVsVTb_O.js","./light-Bn8K_xZg.js","./platform-DRgp5i1N.js","./light-CIjBX1Es.js","./use-theme-vars-xTldaLtm.js","./Space-BFwLxVpa.js","./imu-DKY0j8mh.js","./TrackerView-I0_gNIhT.css","./SketchCentreView-Bq3U_0oz.js","./FileText-Dj1yQwaT.js","./interface-Ci2oq6Mn.js","./Switch-imLiVXKV.js","./attribute-CCNlA59d.js","./src-CDWvbmgy.js","./PerformantEllipsis-DfbmB4Zr.js","./SketchCentreView-zxRy1m-x.css","./AboutView-DEmyyAGi.js","./AnchorAdapter-DbV0ti9O.js","./Divider-DVxKI8Oj.js","./AboutView-DW8uOlEv.css","./SettingsView-CwL2ZqYr.js","./vue-router-a32cDBFD.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-CJmOtdft.js","./Alert-hUkEkxmW.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-BpDPVFWs.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-W45Mc--e.js";
import "./light-Blg-TFP8.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-XWtbsHgt.js";
import { i as n, r } from "./vue-router-a32cDBFD.js";
import "./sketch-store-DmjMUJDN.js";
import "./core-D149hgw2.js";
import "./platform-DRgp5i1N.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-gp2ZU1WX.js";
import a from "./SketchCentreView-Bq3U_0oz.js";
import o from "./AboutView-DEmyyAGi.js";
import s from "./SettingsView-CwL2ZqYr.js";
import c from "./ApiDetectionView-CJmOtdft.js";
import l from "./SensorTestView-BpDPVFWs.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-gp2ZU1WX.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-Bq3U_0oz.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-DEmyyAGi.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-CwL2ZqYr.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-CJmOtdft.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-BpDPVFWs.js").then(async (m) => {
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
