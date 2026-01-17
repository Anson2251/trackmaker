const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-BWYSKHIC.js","./index-DjZ42t3k.js","./index-D5akWEw-.css","./Card-DbpXBe2L.js","./SelectorDrawer-Bj3sW6n7.js","./vue-i18n-DoeRy1kO.js","./light-ZdjLoJE0.js","./sketch-store-DbZQzNly.js","./core-Dt0rdc4k.js","./Warning-CrQq-ljW.js","./fade-in-scale-up.cssr-D8aDQ17c.js","./light-vC3E0pLX.js","./light-BROUb78j.js","./use-locale-CancqmYB.js","./Suffix-C7fa4i07.js","./ListItem-zRT-CZNo.js","./SelectorDrawer-Bbrjv1sE.css","./Image-Cd9kUWYt.js","./light-D_eoDKlI.js","./fade-in-height-expand.cssr-CCgV01WS.js","./light-DGbyM_St.js","./light-Cf3dMfs1.js","./light-CnjEranC.js","./light-fNasjUpu.js","./light-BT24weED.js","./platform-DOE22ISc.js","./light-ze9nvZFz.js","./use-theme-vars-CuOfdwDX.js","./Space-0FL9fRbq.js","./imu-DKY0j8mh.js","./TrackerView-I0_gNIhT.css","./SketchCentreView-Cd7WA9Nn.js","./FileText-QcjK5Zb5.js","./interface-CxdbEz-N.js","./Switch-VU0KesXx.js","./attribute-Yj7BNo3L.js","./src-B33JUcs5.js","./PerformantEllipsis-CpHiWNoo.js","./SketchCentreView-CK9pnWUf.css","./AboutView-Bo19UpUr.js","./AnchorAdapter-BVEKYdiY.js","./Divider-B-rFTjT2.js","./AboutView-D9FIFBOv.css","./SettingsView-DARoywqr.js","./vue-router-Ua06M0SJ.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-BMZxqHdI.js","./Alert-NkBDDf3H.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-D43KIo9t.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import "./SelectorDrawer-Bj3sW6n7.js";
import "./light-ZdjLoJE0.js";
import { d as e, i as t, __tla as __tla_0 } from "./index-DjZ42t3k.js";
import { i as n, r } from "./vue-router-Ua06M0SJ.js";
import "./sketch-store-DbZQzNly.js";
import "./core-Dt0rdc4k.js";
import "./platform-DOE22ISc.js";
import "./imu-DKY0j8mh.js";
import i from "./TrackerView-BWYSKHIC.js";
import a from "./SketchCentreView-Cd7WA9Nn.js";
import o from "./AboutView-Bo19UpUr.js";
import s from "./SettingsView-DARoywqr.js";
import c from "./ApiDetectionView-BMZxqHdI.js";
import l from "./SensorTestView-D43KIo9t.js";
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
        component: e() ? i : () => t(() => import("./TrackerView-BWYSKHIC.js").then(async (m) => {
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
        component: e() ? a : () => t(() => import("./SketchCentreView-Cd7WA9Nn.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34,35,36,27,37,24,28,38]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-Bo19UpUr.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([39,1,2,3,5,6,32,17,13,18,10,19,15,40,35,22,27,41,23,11,28,12,42]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-DARoywqr.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([43,1,2,3,5,6,8,34,13,14,10,35,15,36,40,22,37,24,25,44,45]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-BMZxqHdI.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([46,1,2,3,5,6,15,47,9,19,21,41,23,37,24,28,12,48]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-D43KIo9t.js").then(async (m) => {
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
