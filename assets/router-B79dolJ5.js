const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-B_I9K93A.js","./index-DqD7808G.js","./index-DJu8CCCW.css","./Card-Cnwdt0Jy.js","./sketch-store-D6GaNOqT.js","./light-B0oNY7_E.js","./text-CUPhsc1_.js","./storage-Clz-7Xzp.js","./Warning-BfG5UPuO.js","./fade-in-scale-up.cssr-Bev80t-0.js","./light-eanwvtY1.js","./light-E2J33dPM.js","./use-locale-CxTn9pIb.js","./Suffix-CHCPxh5H.js","./vue-i18n-DTGvXBeS.js","./Image-BxdPvubb.js","./light-BGWNw-r1.js","./Tooltip-C16W18NS.js","./fade-in-height-expand.cssr-CC2wg-eD.js","./light-DN2RmaL5.js","./light-BIvpaf2L.js","./light-sQGkF9M-.js","./light-ByYE5g8C.js","./light-DV6hPmpT.js","./platform-Bjzfspbz.js","./light-Dhisd1I7.js","./use-theme-vars-C4H_imDf.js","./Space-CF4aJUuv.js","./get-slot-DtyO76SV.js","./imu-C9uRV4Bw.js","./TrackerView-D011XRhI.css","./SketchCentreView-BY1IK5xj.js","./FileText-DuJr_0ak.js","./omit-DOIcwqq5.js","./core-BQRoixy2.js","./Switch-C-IBMN7s.js","./attribute-BIoZxt6Q.js","./ListItem-BLpG-wpX.js","./SketchCentreView-Dzpv30jJ.css","./AboutView-CbyrnepV.js","./AnchorAdapter-ClDIdkqy.js","./Divider-gkhZo2OO.js","./AboutView-BGOn7na1.css","./SettingsView-Dyxz7HGq.js","./PerformantEllipsis-CaV4jvuy.js","./vue-router-gVRoPilu.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-ySB9OdHE.js","./Alert--RgzvZJE.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-D0-D8gkk.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./sketch-store-D6GaNOqT.js";
import "./light-B0oNY7_E.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-DqD7808G.js";
import { i as n, r } from "./vue-router-gVRoPilu.js";
import "./storage-Clz-7Xzp.js";
import "./platform-Bjzfspbz.js";
import "./imu-C9uRV4Bw.js";
import i from "./TrackerView-B_I9K93A.js";
import a from "./SketchCentreView-BY1IK5xj.js";
import o from "./AboutView-CbyrnepV.js";
import s from "./SettingsView-Dyxz7HGq.js";
import c from "./ApiDetectionView-ySB9OdHE.js";
import l from "./SensorTestView-D0-D8gkk.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-B_I9K93A.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-BY1IK5xj.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,32,33,34,35,36,37,28,26,27,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-CbyrnepV.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,14,5,32,15,12,16,17,9,18,40,36,21,26,41,22,10,37,27,28,11,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-Dyxz7HGq.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,14,5,34,35,12,13,7,9,36,37,28,40,21,44,23,17,24,45,46]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-ySB9OdHE.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([47,1,2,3,14,5,48,8,18,20,41,22,44,23,17,37,27,28,11,49]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-D0-D8gkk.js").then(async (m) => {
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
