import { ct as e, f as t, g as n, h as r, ot as i, t as a, v as o, w as s } from "./Card-llegvRlo.js";
import { Dt as c, Jt as l, Ot as u, ct as d, en as f, gt as p, kt as m, lt as h, mt as g, o as _, ot as v, pt as y, rn as b, s as x, st as S, t as C, ut as w, zt as T } from "./index-Db1PxEEp.js";
import { n as E } from "./vue-i18n-BBv8G3Ae.js";
import { t as D } from "./Alert-BZn_NyBD.js";
import { t as O } from "./light-BXI22-1K.js";
import "./imu-C9uRV4Bw.js";
var k = i(`statistic`, [e(`label`, `
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `), i(`statistic-value`, `
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `, [e(`prefix`, `
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `, [i(`icon`, { verticalAlign: `-0.125em` })]), e(`content`, `
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `), e(`suffix`, `
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `, [i(`icon`, { verticalAlign: `-0.125em` })])])]), A = g({ name: `Statistic`, props: Object.assign(Object.assign({}, t.props), { tabularNums: Boolean, label: String, value: [String, Number] }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: i2, inlineThemeDisabled: a2, mergedRtlRef: s2 } = o(e2), c2 = t(`Statistic`, `-statistic`, k, O, e2, i2), l2 = r(`Statistic`, s2, i2), u2 = v(() => {
    let { self: { labelFontWeight: e3, valueFontSize: t2, valueFontWeight: n2, valuePrefixTextColor: r2, labelTextColor: i3, valueSuffixTextColor: a3, valueTextColor: o2, labelFontSize: s3 }, common: { cubicBezierEaseInOut: l3 } } = c2.value;
    return { "--n-bezier": l3, "--n-label-font-size": s3, "--n-label-font-weight": e3, "--n-label-text-color": i3, "--n-value-font-weight": n2, "--n-value-font-size": t2, "--n-value-prefix-text-color": r2, "--n-value-suffix-text-color": a3, "--n-value-text-color": o2 };
  }), d2 = a2 ? n(`statistic`, void 0, u2, e2) : void 0;
  return { rtlEnabled: l2, mergedClsPrefix: i2, cssVars: a2 ? void 0 : u2, themeClass: d2 == null ? void 0 : d2.themeClass, onRender: d2 == null ? void 0 : d2.onRender };
}, render() {
  var e2;
  let { mergedClsPrefix: t2, $slots: { default: n2, label: r2, prefix: i2, suffix: a2 } } = this;
  return (e2 = this.onRender) == null || e2.call(this), p(`div`, { class: [`${t2}-statistic`, this.themeClass, this.rtlEnabled && `${t2}-statistic--rtl`], style: this.cssVars }, s(r2, (e3) => p(`div`, { class: `${t2}-statistic__label` }, this.label || e3)), p(`div`, { class: `${t2}-statistic-value`, style: { fontVariantNumeric: this.tabularNums ? `tabular-nums` : `` } }, s(i2, (e3) => e3 && p(`span`, { class: `${t2}-statistic-value__prefix` }, e3)), this.value === void 0 ? s(n2, (e3) => e3 && p(`span`, { class: `${t2}-statistic-value__content` }, e3)) : p(`span`, { class: `${t2}-statistic-value__content` }, this.value), s(a2, (e3) => e3 && p(`span`, { class: `${t2}-statistic-value__suffix` }, e3))));
} }), j = { class: `sensor-demo-view` }, M = { class: `demo-container` }, N = { key: 1, class: `data-section` }, P = { class: `orientation-stats` }, F = { class: `orientation-row` }, I = { class: `orientation-row` }, L = { key: 1, class: `data-section` }, R = { key: 0, class: `sensor-subsection` }, z = { class: `xyz-row` }, B = { class: `other-stats-row` }, V = { key: 1, class: `sensor-subsection` }, H = { class: `xyz-row` }, U = { class: `other-stats-row` }, W = { key: 1, class: `data-section` }, G = { class: `gps-stats` }, K = { class: `gps-row` }, q = { class: `gps-row` }, J = { key: 2, class: `data-section` }, Y = C(g({ __name: `SensorTestView`, setup(e2) {
  let { t: t2 } = E(), n2 = l(null), r2 = l(null), i2 = l(null), o2 = l(null), s2 = l(null), p2 = l(null), g2 = new x(), C2 = l(null), O2 = l(null), k2 = l(null), Y2 = l(null), X = l(null), Z = l(null), Q = l(null), $ = v(() => n2.value ? n2.value.webkitCompassHeading || 360 - n2.value.alpha : 0), ee = v(() => n2.value ? Math.sqrt(n2.value.beta ** 2 + n2.value.gamma ** 2) : 0), te = v(() => i2.value ? Math.sqrt(i2.value.x ** 2 + i2.value.y ** 2 + i2.value.z ** 2) : 0), ne = v(() => o2.value ? Math.sqrt(o2.value.x ** 2 + o2.value.y ** 2 + o2.value.z ** 2) : 0);
  c(async () => {
    await re(), await oe();
  }), u(() => {
    ce();
  });
  async function re() {
    try {
      let e3 = await _.initialize();
      if (e3.isErr()) {
        console.error(`Failed to initialize IMU manager:`, e3.error), Z.value = `IMU manager initialization failed`, Q.value = `IMU manager initialization failed`;
        return;
      }
      await ie(), await ae();
      let t3 = _.getLastKnownOrientation();
      t3 && (n2.value = t3);
      let r3 = _.getLastKnownMotion();
      r3 && (i2.value = r3.acceleration, o2.value = r3.gyroscope);
    } catch (e3) {
      console.error(`Error initializing IMU manager:`, e3), Z.value = `Initialization error`, Q.value = `Initialization error`;
    }
  }
  async function ie() {
    try {
      let e3 = await _.startOrientationUpdates((e4) => {
        n2.value = e4, Z.value = null;
      });
      e3.isOk() ? (r2.value = e3.value, Z.value = null) : Z.value = `Start failed: ${e3.error.message}`;
    } catch (e3) {
      Z.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  async function ae() {
    try {
      let e3 = await _.startAccelerationUpdates({ normalizeToENU: true }, (e4) => {
        i2.value = e4, Q.value = null;
      });
      if (e3.isErr()) {
        Q.value = `Acceleration start failed: ${e3.error.message}`;
        return;
      }
      let t3 = await _.startGyroscopeUpdates({ normalizeToENU: false }, (e4) => {
        o2.value = e4, Q.value = null;
      });
      if (t3.isErr()) {
        e3.isOk() && _.stopAccelerationUpdates(e3.value), Q.value = `Gyroscope start failed: ${t3.error.message}`;
        return;
      }
      s2.value = e3.value, p2.value = t3.value, Q.value = null;
    } catch (e3) {
      Q.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  async function oe() {
    try {
      let e3 = await g2.initialize();
      if (e3.isErr()) {
        console.error(`Failed to initialize GPS manager:`, e3.error), k2.value = `GPS manager initialization failed`;
        return;
      }
      let t3 = g2.getLastKnownLocation();
      t3 && t3.latitude !== 0 && t3.longitude !== 0 && (C2.value = t3, X.value = /* @__PURE__ */ new Date()), Y2.value = g2.getCurrentBackend(), await se();
    } catch (e3) {
      console.error(`Error initializing GPS manager:`, e3), k2.value = `GPS initialization error`;
    }
  }
  async function se() {
    try {
      let e3 = await g2.startLocationUpdates((e4) => {
        C2.value = e4, X.value = /* @__PURE__ */ new Date(), Y2.value = g2.getCurrentBackend(), k2.value = null;
      });
      e3.isOk() ? (O2.value = e3.value, k2.value = null) : k2.value = `GPS start failed: ${e3.error.message}`;
    } catch (e3) {
      k2.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  function ce() {
    r2.value !== null && _.stopOrientationUpdates(r2.value), s2.value !== null && _.stopAccelerationUpdates(s2.value), p2.value !== null && _.stopGyroscopeUpdates(p2.value), O2.value !== null && g2.stopLocationUpdates(O2.value);
  }
  return (e3, r3) => (m(), w(`div`, j, [S(`div`, M, [y(f(a), { title: f(t2)(`sensorTest.deviceOrientation.title`), class: `sensor-card` }, { default: T(() => [Z.value ? (m(), d(f(D), { key: 0, type: `error`, title: Z.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : h(``, true), n2.value ? (m(), w(`div`, N, [S(`div`, P, [S(`div`, F, [y(f(A), { label: f(t2)(`sensorTest.deviceOrientation.compassHeading`), value: $.value.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(f(A), { label: f(t2)(`sensorTest.deviceOrientation.alpha`), value: n2.value.alpha.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(f(A), { label: f(t2)(`sensorTest.deviceOrientation.beta`), value: n2.value.beta.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`])]), S(`div`, I, [y(f(A), { label: f(t2)(`sensorTest.deviceOrientation.gamma`), value: n2.value.gamma.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(f(A), { label: f(t2)(`sensorTest.deviceOrientation.tiltAngle`), value: ee.value.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), n2.value.webkitCompassHeading ? (m(), d(f(A), { key: 0, label: f(t2)(`sensorTest.deviceOrientation.iosHeading`), value: n2.value.webkitCompassHeading.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`])) : h(``, true)])])])) : h(``, true)]), _: 1 }, 8, [`title`]), y(f(a), { title: f(t2)(`sensorTest.deviceMotion.title`), class: `sensor-card` }, { default: T(() => [Q.value ? (m(), d(f(D), { key: 0, type: `error`, title: Q.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : h(``, true), i2.value || o2.value ? (m(), w(`div`, L, [i2.value ? (m(), w(`div`, R, [S(`h4`, null, b(f(t2)(`sensorTest.deviceMotion.acceleration.title`)), 1), S(`div`, z, [y(f(A), { label: f(t2)(`sensorTest.deviceMotion.acceleration.x`), value: i2.value.x.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`]), y(f(A), { label: f(t2)(`sensorTest.deviceMotion.acceleration.y`), value: i2.value.y.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`]), y(f(A), { label: f(t2)(`sensorTest.deviceMotion.acceleration.z`), value: i2.value.z.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`])]), S(`div`, B, [y(f(A), { label: f(t2)(`sensorTest.deviceMotion.acceleration.magnitude`), value: te.value.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`])])])) : h(``, true), o2.value ? (m(), w(`div`, V, [S(`h4`, null, b(f(t2)(`sensorTest.deviceMotion.gyroscope.title`)), 1), S(`div`, H, [y(f(A), { label: f(t2)(`sensorTest.deviceMotion.gyroscope.x`), value: o2.value.x.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`]), y(f(A), { label: f(t2)(`sensorTest.deviceMotion.gyroscope.y`), value: o2.value.y.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`]), y(f(A), { label: f(t2)(`sensorTest.deviceMotion.gyroscope.z`), value: o2.value.z.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`])]), S(`div`, U, [y(f(A), { label: f(t2)(`sensorTest.deviceMotion.gyroscope.rotationSpeed`), value: ne.value.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`])])])) : h(``, true)])) : h(``, true)]), _: 1 }, 8, [`title`]), y(f(a), { title: f(t2)(`sensorTest.gps.title`), class: `sensor-card` }, { default: T(() => [k2.value ? (m(), d(f(D), { key: 0, type: `error`, title: k2.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : h(``, true), C2.value ? (m(), w(`div`, W, [S(`div`, G, [S(`div`, K, [y(f(A), { label: f(t2)(`sensorTest.gps.latitude`), value: C2.value.latitude.toFixed(6), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(f(A), { label: f(t2)(`sensorTest.gps.longitude`), value: C2.value.longitude.toFixed(6), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(f(A), { label: f(t2)(`sensorTest.gps.accuracy`), value: C2.value.accuracy.toFixed(1), suffix: `m` }, null, 8, [`label`, `value`])]), S(`div`, q, [y(f(A), { label: f(t2)(`sensorTest.gps.backend`), value: Y2.value === `platform` || Y2.value === `kalman` ? f(t2)(`sensorTest.gps.backendGPS`) : f(t2)(`sensorTest.gps.backendIP`) }, null, 8, [`label`, `value`]), X.value ? (m(), d(f(A), { key: 0, label: f(t2)(`sensorTest.gps.timestamp`), value: X.value.toLocaleTimeString() }, null, 8, [`label`, `value`])) : h(``, true)])])])) : k2.value ? h(``, true) : (m(), w(`div`, J, [S(`p`, null, b(f(t2)(`sensorTest.gps.noData`)), 1)]))]), _: 1 }, 8, [`title`])])]));
} }), [[`__scopeId`, `data-v-d2d136c2`]]);
export {
  Y as default
};
