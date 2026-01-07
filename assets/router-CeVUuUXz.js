const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-YXiiayzr.js","./index-B1aXvQWO.js","./index-DJu8CCCW.css","./Card-DFfja-Mw.js","./sketch-store-_1dYbusd.js","./light-Dg6C6GM-.js","./text-DXifBw0G.js","./storage-CxGTTm9b.js","./Warning-KpMQkGge.js","./fade-in-scale-up.cssr-DCGaDVf1.js","./light-CmMcU5w_.js","./light-E2J33dPM.js","./use-locale-D8SgBpSz.js","./Suffix-CC8kFBuC.js","./vue-i18n-DE7Irh1V.js","./Image-Sa8j1fDj.js","./light-IRUhB8ZQ.js","./Tooltip-C6gpMXQd.js","./fade-in-height-expand.cssr-B5MqRPLj.js","./light-B4GnCs-Q.js","./light-B9g1K1b5.js","./light-335BlVJ2.js","./light-CujB6m9W.js","./light-DeQk9LVK.js","./platform-i1FqtUJ6.js","./light-DdDfbq_7.js","./use-theme-vars-DseHz7ww.js","./Space-GOKf1jkT.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-D011XRhI.css","./SketchCentreView-DMZdyaQZ.js","./FileText-CVUlP_2M.js","./omit-BU0fpIN1.js","./core-DIu37qps.js","./Switch-CdLgN-5x.js","./attribute-DSnN2wsb.js","./ListItem-BO8na5DR.js","./SketchCentreView-Dzpv30jJ.css","./AboutView-viOwyful.js","./AnchorAdapter-BKsBUWn4.js","./Divider-BxVOHYCH.js","./AboutView-BGOn7na1.css","./SettingsView-CaibvRV2.js","./PerformantEllipsis-D3KMuUy2.js","./vue-router-DxIxg_NG.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-BhUlaRTa.js","./Alert-Dv9CLFTg.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-DidDw0DP.js","./SensorTestView-DxcTLiqt.css"])))=>i.map(i=>d[i]);
import "./sketch-store-_1dYbusd.js";
import "./light-Dg6C6GM-.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-B1aXvQWO.js";
import { i as n, r } from "./vue-router-DxIxg_NG.js";
import "./storage-CxGTTm9b.js";
import "./platform-i1FqtUJ6.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-YXiiayzr.js";
import a from "./SketchCentreView-DMZdyaQZ.js";
import o from "./AboutView-viOwyful.js";
import s from "./SettingsView-CaibvRV2.js";
import c from "./ApiDetectionView-BhUlaRTa.js";
import l from "./SensorTestView-DidDw0DP.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-YXiiayzr.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-DMZdyaQZ.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-viOwyful.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-CaibvRV2.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-BhUlaRTa.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-DidDw0DP.js").then(async (m) => {
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
