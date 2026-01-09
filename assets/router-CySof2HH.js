const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-BW1Bvhg9.js","./index-zntWl1j2.js","./index-D5akWEw-.css","./Card-DQ5bMbwc.js","./sketch-store-BOrxb5KA.js","./light-BrQV3A_S.js","./text-RGT3LQkH.js","./storage-crW_uW9C.js","./Warning-BtS20a0t.js","./fade-in-scale-up.cssr-DSKXLKca.js","./light-tyDXvWrz.js","./light-E2J33dPM.js","./use-locale-By4EmMl5.js","./Suffix-aZ5Mvd08.js","./vue-i18n-B2rtFfXM.js","./Image-CazYnG2l.js","./light-BP-5VCNz.js","./Tooltip-D8k6Mxgv.js","./fade-in-height-expand.cssr-CzO-QSHn.js","./light-BhUNymva.js","./light-6TDiJvQV.js","./light-v92wIMrn.js","./light-Dtl1FnOh.js","./light-CpSp5RNe.js","./platform-BhEKJpSx.js","./light-C4_kr4kB.js","./use-theme-vars-vZvj5_6X.js","./Space-CUTM7YoO.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-BaE7LsQv.css","./SketchCentreView-DnGy7AZh.js","./FileText-DECYs1Hd.js","./interface-C2sZzyv1.js","./core-DLGYnqn4.js","./Switch-vr054T5S.js","./attribute-BP4wg2CU.js","./ListItem-DqgFTiuk.js","./SketchCentreView-D0BfIJOK.css","./AboutView-D2dyEnu4.js","./AnchorAdapter-DVeRLYmj.js","./Divider-DkZvgP0a.js","./AboutView-BGOn7na1.css","./SettingsView-CA_R7rkb.js","./PerformantEllipsis-D2KoLpkv.js","./vue-router-DiOe1ce2.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-BkncoNPO.js","./Alert-5EuYRW9u.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-C8IOafEk.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-BOrxb5KA.js";
import "./light-BrQV3A_S.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-zntWl1j2.js";
import { i as n, r } from "./vue-router-DiOe1ce2.js";
import "./storage-crW_uW9C.js";
import "./platform-BhEKJpSx.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-BW1Bvhg9.js";
import a from "./SketchCentreView-DnGy7AZh.js";
import o from "./AboutView-D2dyEnu4.js";
import s from "./SettingsView-CA_R7rkb.js";
import c from "./ApiDetectionView-BkncoNPO.js";
import l from "./SensorTestView-C8IOafEk.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-BW1Bvhg9.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-DnGy7AZh.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-D2dyEnu4.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-CA_R7rkb.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-BkncoNPO.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-C8IOafEk.js").then(async (m) => {
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
