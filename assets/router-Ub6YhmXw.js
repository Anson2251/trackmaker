const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TrackerView-CvFE-FH8.js","./index-DTVnoW_1.js","./index-D5akWEw-.css","./MarkdownEditor-BHI9ypp6.js","./dist-aB4XqAU2.js","./dist-CQp5Y4zm.js","./dist-B0pdZx0k.js","./dist-DYp_OIFV.js","./dist-CjAScDBv.js","./dist-Doi9LDAp.js","./Card-nhqq8IKa.js","./vue-i18n-BAINxUFe.js","./Tooltip-DGge0ha1.js","./sketch-store-CoKve6q-.js","./Button-o58fM-RZ.js","./Success-SBPGeO_s.js","./Warning-DtnUwqHe.js","./storage-DsEl3RSe.js","./fade-in-scale-up.cssr-DGTJWPO8.js","./light-CQB9eEMb.js","./light-ByENEBpl.js","./light-DVAUVx3a.js","./core-C47BeAL_.js","./VueMarkdown-CcehgDyL.js","./Input-DXEph42L.js","./use-locale-C5hleQcp.js","./Suffix-CoOQonUz.js","./use-collection-Bhex_geG.js","./Tag-BCblq9DP.js","./Icon-y0y4QmKo.js","./ListItem-DOTKksGl.js","./light-ClCXo0GD.js","./Space-DRVg8nuM.js","./MarkdownEditor-DSBvuuDn.css","./Image-BqjSSCJO.js","./download-DUR4OmFY.js","./light-Ru6mz35d.js","./fade-in-height-expand.cssr-Cu-aN91s.js","./Dropdown-dlLCnzPd.js","./ChevronRight-CARsiNm-.js","./light-CRdznqhu.js","./settings-store-NEXTm_Ep.js","./light-DZTiUHEd.js","./light-DZsVD2j_.js","./light-BmapGxr9.js","./Checkbox-BdfCZaIT.js","./imu-C9UV4BVU.js","./platform-1yaQGydT.js","./TrackerView-bVhf3RhX.css","./SketchCentreView-CiSiJVji.js","./FileText-De73kcR5.js","./interface-COpDF2_U.js","./Switch-Cn3xt9L6.js","./attribute-B6FjjCe-.js","./src-A1zXJc7F.js","./Popconfirm-B-0pB6X9.js","./omit-DTu60rkx.js","./PerformantEllipsis-DJXJ4P1h.js","./SketchCentreView-Cl7HUql0.css","./AboutView-BnoiChqZ.js","./AnchorAdapter-0SrhvuEO.js","./AboutView-D9FIFBOv.css","./SettingsView-Cv9uYrXM.js","./RadioGroup-Da9f0Joc.js","./vue-router-Bobm8XWN.js","./SettingsView-B_ym832e.css","./AdvancedSettingsView-BFhteWe4.js","./AdvancedSettingsView-C0kOYdmS.css","./ApiDetectionView-WvK6cvJR.js","./ApiDetectionView-xoBWIN9F.css","./SensorTestView-DeE2uaQ0.js","./SensorTestView-DljfSyQA.css"])))=>i.map(i=>d[i]);
import { __tla as __tla_0 } from "./MarkdownEditor-BHI9ypp6.js";
import "./Tooltip-DGge0ha1.js";
import { d as e, i as t, __tla as __tla_1 } from "./index-DTVnoW_1.js";
import "./dist-CQp5Y4zm.js";
import "./dist-DYp_OIFV.js";
import "./dist-CjAScDBv.js";
import "./dist-Doi9LDAp.js";
import "./dist-B0pdZx0k.js";
import { i as n, r } from "./vue-router-Bobm8XWN.js";
import "./sketch-store-CoKve6q-.js";
import "./storage-DsEl3RSe.js";
import "./settings-store-NEXTm_Ep.js";
import "./VueMarkdown-CcehgDyL.js";
import "./platform-1yaQGydT.js";
import "./imu-C9UV4BVU.js";
import i from "./TrackerView-CvFE-FH8.js";
import a from "./SketchCentreView-CiSiJVji.js";
import o from "./AboutView-BnoiChqZ.js";
import s from "./SettingsView-Cv9uYrXM.js";
import c from "./AdvancedSettingsView-BFhteWe4.js";
import l from "./ApiDetectionView-WvK6cvJR.js";
import u from "./SensorTestView-DeE2uaQ0.js";
let d;
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
  d = n({
    history: r(`./`),
    routes: [
      {
        path: `/`,
        redirect: `/tracker`
      },
      {
        path: `/tracker`,
        name: `Tracker`,
        component: e() ? i : () => t(() => import("./TrackerView-CvFE-FH8.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]), import.meta.url),
        meta: {
          timeout: 5e3
        }
      },
      {
        path: `/sketch-centre`,
        name: `sketchCentre`,
        component: e() ? a : () => t(() => import("./SketchCentreView-CiSiJVji.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([49,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,50,51,52,53,54,55,56,57,40,58]), import.meta.url)
      },
      {
        path: `/about`,
        name: `about`,
        component: e() ? o : () => t(() => import("./AboutView-BnoiChqZ.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([59,1,2,10,11,12,50,23,34,25,18,35,36,39,37,28,60,27,53,44,29,30,31,32,20,21,61]), import.meta.url)
      },
      {
        path: `/settings`,
        name: `settings`,
        component: e() ? s : () => t(() => import("./SettingsView-Cv9uYrXM.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([62,1,2,10,11,12,22,52,25,26,14,17,18,53,28,54,60,27,44,57,40,30,31,63,41,64,47,65]), import.meta.url)
      },
      {
        path: `/advanced-settings`,
        name: `advancedSettings`,
        component: e() ? c : () => t(() => import("./AdvancedSettingsView-BFhteWe4.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([66,1,2,10,11,12,25,26,14,52,17,18,53,28,54,39,24,19,38,40,29,41,35,55,16,56,45,57,63,32,20,64,67]), import.meta.url)
      },
      {
        path: `/api-detection`,
        name: `apiDetection`,
        component: e() ? l : () => t(() => import("./ApiDetectionView-WvK6cvJR.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([68,1,2,10,11,12,14,28,57,40,30,31,32,20,64,69]), import.meta.url)
      },
      {
        path: `/sensor-demo`,
        name: `sensorDemo`,
        component: e() ? u : () => t(() => import("./SensorTestView-DeE2uaQ0.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([70,1,2,10,11,14,15,16,37,43,64,46,71]), import.meta.url)
      }
    ]
  });
});
export {
  __tla,
  d as default
};
