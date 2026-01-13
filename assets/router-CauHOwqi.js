const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-BcnbjQto.js","./index-C4uc8sCV.js","./index-D5akWEw-.css","./MarkdownEditor-DbfqqTot.js","./dist-aB4XqAU2.js","./dist-CQp5Y4zm.js","./dist-B0pdZx0k.js","./dist-DYp_OIFV.js","./dist-CjAScDBv.js","./dist-Doi9LDAp.js","./Card-wTK5VWgg.js","./vue-i18n-BmCNrBEx.js","./light-DcazuQOY.js","./sketch-store-9vGlGD5C.js","./core-CbJDfFWz.js","./Warning-K65bQFBL.js","./fade-in-scale-up.cssr-DAO-aMlH.js","./light-DB6RNQmt.js","./light-BJk0FjVD.js","./use-locale-DV3hbGtr.js","./VueMarkdown-B8IRt7Xj.js","./Suffix-D78o5lyO.js","./ListItem-CojxfxaX.js","./Space-B096YzDs.js","./MarkdownEditor-C1i_eP_i.css","./Image-BOsq57CX.js","./light-DsJhCZoU.js","./fade-in-height-expand.cssr-OlKElAPL.js","./light-JWLB23nK.js","./light-BUxPVHlh.js","./light-B-J6tIen.js","./light-Ca1mwIGX.js","./light-B0RSJa3-.js","./platform-AaRxPU_D.js","./light-27ybxbZP.js","./imu-BennKAyo.js","./TrackerView-8Z8i2H03.css","./SketchCentreView-CFaMRqKZ.js","./FileText-CXxTpjkd.js","./interface-Xd0kpMGt.js","./Switch-BoZbFVoQ.js","./attribute-CvS_LNHW.js","./src-CEwt1Saz.js","./PerformantEllipsis-Du1-qbTc.js","./SketchCentreView-Cl7HUql0.css","./AboutView-ulrlaUID.js","./AnchorAdapter-uFDh4kkW.js","./Divider-v3pR-5Ul.js","./AboutView-D9FIFBOv.css","./SettingsView-BBikl1-v.js","./vue-router-DrjvI5Sn.js","./SettingsView-Bf_txN3q.css","./ApiDetectionView-Bnvn96yf.js","./Alert-Dcs0al4V.js","./ApiDetectionView-O-A0Fbo2.css","./SensorTestView-DRG00hJ6.js","./SensorTestView-8pKAG-wq.css"])))=>i.map(i=>d[i]);
import { __tla as __tla_0 } from "./MarkdownEditor-DbfqqTot.js";
import "./light-DcazuQOY.js";
import { d as e, i as t, __tla as __tla_1 } from "./index-C4uc8sCV.js";
import "./dist-CQp5Y4zm.js";
import "./dist-DYp_OIFV.js";
import "./dist-CjAScDBv.js";
import "./dist-Doi9LDAp.js";
import "./dist-B0pdZx0k.js";
import { i as n, r } from "./vue-router-DrjvI5Sn.js";
import "./sketch-store-9vGlGD5C.js";
import "./core-CbJDfFWz.js";
import "./platform-AaRxPU_D.js";
import "./VueMarkdown-B8IRt7Xj.js";
import "./imu-BennKAyo.js";
import i from "./TrackerView-BcnbjQto.js";
import a from "./SketchCentreView-CFaMRqKZ.js";
import o from "./AboutView-ulrlaUID.js";
import s from "./SettingsView-BBikl1-v.js";
import c from "./ApiDetectionView-Bnvn96yf.js";
import l from "./SensorTestView-DRG00hJ6.js";
let u;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
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
        component: e() ? i : () => t(() => import("./TrackerView-BcnbjQto.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]), import.meta.url),
        meta: {
          timeout: 5e3
        }
      },
      {
        path: `/sketch-centre`,
        name: `sketchCentre`,
        component: e() ? a : () => t(() => import("./SketchCentreView-CFaMRqKZ.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,38,39,40,41,42,43,32,44]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-ulrlaUID.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([45,1,2,10,11,12,38,20,25,19,26,16,27,22,46,41,30,47,31,17,23,18,48]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-BBikl1-v.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([49,1,2,10,11,12,14,40,19,21,16,41,22,42,46,30,43,32,33,50,51]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? c : () => t(() => import("./ApiDetectionView-Bnvn96yf.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([52,1,2,10,11,12,22,53,15,27,29,47,31,43,32,23,18,54]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? l : () => t(() => import("./SensorTestView-DRG00hJ6.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([55,1,2,10,11,53,15,27,29,34,35,56]), import.meta.url)
      }
    ]
  });
});
export {
  __tla,
  u as default
};
