import { ct as e, f as t, g as n, h as r, ot as i, t as a, v as o, w as s } from "./Card-CWMqfBGT.js";
import { Bt as c, Dt as l, Ot as u, Yt as d, ct as f, gt as p, in as m, kt as h, lt as g, mt as _, o as v, ot as y, pt as b, s as x, st as S, t as C, tn as w, ut as T } from "./index-C57mZnh3.js";
import { n as E } from "./vue-i18n-Bm-kk62j.js";
import { t as D } from "./Alert-2QRzJEqN.js";
import { t as O } from "./light-Cj15CboS.js";
import "./imu-DKY0j8mh.js";
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
 `, [i(`icon`, { verticalAlign: `-0.125em` })])])]), A = _({ name: `Statistic`, props: Object.assign(Object.assign({}, t.props), { tabularNums: Boolean, label: String, value: [String, Number] }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: i2, inlineThemeDisabled: a2, mergedRtlRef: s2 } = o(e2), c2 = t(`Statistic`, `-statistic`, k, O, e2, i2), l2 = r(`Statistic`, s2, i2), u2 = y(() => {
    let { self: { labelFontWeight: e3, valueFontSize: t2, valueFontWeight: n2, valuePrefixTextColor: r2, labelTextColor: i3, valueSuffixTextColor: a3, valueTextColor: o2, labelFontSize: s3 }, common: { cubicBezierEaseInOut: l3 } } = c2.value;
    return { "--n-bezier": l3, "--n-label-font-size": s3, "--n-label-font-weight": e3, "--n-label-text-color": i3, "--n-value-font-weight": n2, "--n-value-font-size": t2, "--n-value-prefix-text-color": r2, "--n-value-suffix-text-color": a3, "--n-value-text-color": o2 };
  }), d2 = a2 ? n(`statistic`, void 0, u2, e2) : void 0;
  return { rtlEnabled: l2, mergedClsPrefix: i2, cssVars: a2 ? void 0 : u2, themeClass: d2 == null ? void 0 : d2.themeClass, onRender: d2 == null ? void 0 : d2.onRender };
}, render() {
  var e2;
  let { mergedClsPrefix: t2, $slots: { default: n2, label: r2, prefix: i2, suffix: a2 } } = this;
  return (e2 = this.onRender) == null || e2.call(this), p(`div`, { class: [`${t2}-statistic`, this.themeClass, this.rtlEnabled && `${t2}-statistic--rtl`], style: this.cssVars }, s(r2, (e3) => p(`div`, { class: `${t2}-statistic__label` }, this.label || e3)), p(`div`, { class: `${t2}-statistic-value`, style: { fontVariantNumeric: this.tabularNums ? `tabular-nums` : `` } }, s(i2, (e3) => e3 && p(`span`, { class: `${t2}-statistic-value__prefix` }, e3)), this.value === void 0 ? s(n2, (e3) => e3 && p(`span`, { class: `${t2}-statistic-value__content` }, e3)) : p(`span`, { class: `${t2}-statistic-value__content` }, this.value), s(a2, (e3) => e3 && p(`span`, { class: `${t2}-statistic-value__suffix` }, e3))));
} }), j = { class: `sensor-demo-view` }, M = { class: `demo-container` }, ee = { key: 1, class: `data-section` }, N = { class: `orientation-stats` }, P = { class: `orientation-row` }, F = { class: `orientation-row` }, I = { key: 1, class: `data-section` }, L = { key: 0, class: `sensor-subsection` }, R = { class: `xyz-row` }, z = { class: `other-stats-row` }, B = { key: 1, class: `sensor-subsection` }, V = { class: `xyz-row` }, H = { class: `other-stats-row` }, U = { key: 1, class: `data-section` }, W = { class: `gps-stats` }, G = { class: `gps-row` }, K = { class: `gps-row` }, q = { key: 2, class: `data-section` }, J = C(_({ __name: `SensorTestView`, setup(e2) {
  let { t: t2 } = E(), n2 = d(null), r2 = d(null), i2 = d(null), o2 = d(null), s2 = d(null), p2 = d(null), _2 = new x(), C2 = d(null), O2 = d(null), k2 = d(null), J2 = d(null), Y = d(null), X = d(null), Z = d(null), Q = y(() => n2.value ? n2.value.webkitCompassHeading || 360 - n2.value.alpha : 0), te = y(() => n2.value ? Math.sqrt(n2.value.beta ** 2 + n2.value.gamma ** 2) : 0), $ = y(() => i2.value ? Math.sqrt(i2.value.x ** 2 + i2.value.y ** 2 + i2.value.z ** 2) : 0), ne = y(() => o2.value ? Math.sqrt(o2.value.x ** 2 + o2.value.y ** 2 + o2.value.z ** 2) : 0);
  l(async () => {
    await re(), await oe();
  }), u(() => {
    ce();
  });
  async function re() {
    try {
      let e3 = await v.initialize();
      if (e3.isErr()) {
        console.error(`Failed to initialize IMU manager:`, e3.error), X.value = `IMU manager initialization failed`, Z.value = `IMU manager initialization failed`;
        return;
      }
      await ie(), await ae();
      let t3 = v.getLastKnownOrientation();
      t3 && (n2.value = t3);
      let r3 = v.getLastKnownMotion();
      r3 && (i2.value = r3.acceleration, o2.value = r3.gyroscope);
    } catch (e3) {
      console.error(`Error initializing IMU manager:`, e3), X.value = `Initialization error`, Z.value = `Initialization error`;
    }
  }
  async function ie() {
    try {
      let e3 = await v.startOrientationUpdates((e4) => {
        n2.value = e4, X.value = null;
      });
      e3.isOk() ? (r2.value = e3.value, X.value = null) : X.value = `Start failed: ${e3.error.message}`;
    } catch (e3) {
      X.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  async function ae() {
    try {
      let e3 = await v.startAccelerationUpdates({ normalizeToENU: true }, (e4) => {
        i2.value = e4, Z.value = null;
      });
      if (e3.isErr()) {
        Z.value = `Acceleration start failed: ${e3.error.message}`;
        return;
      }
      let t3 = await v.startGyroscopeUpdates({ normalizeToENU: false }, (e4) => {
        o2.value = e4, Z.value = null;
      });
      if (t3.isErr()) {
        e3.isOk() && v.stopAccelerationUpdates(e3.value), Z.value = `Gyroscope start failed: ${t3.error.message}`;
        return;
      }
      s2.value = e3.value, p2.value = t3.value, Z.value = null;
    } catch (e3) {
      Z.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  async function oe() {
    try {
      let e3 = await _2.initialize();
      if (e3.isErr()) {
        console.error(`Failed to initialize GPS manager:`, e3.error), k2.value = `GPS manager initialization failed`;
        return;
      }
      let t3 = _2.getLastKnownLocation();
      t3 && t3.latitude !== 0 && t3.longitude !== 0 && (C2.value = t3, Y.value = /* @__PURE__ */ new Date()), J2.value = _2.getCurrentBackend(), await se();
    } catch (e3) {
      console.error(`Error initializing GPS manager:`, e3), k2.value = `GPS initialization error`;
    }
  }
  async function se() {
    try {
      let e3 = await _2.startLocationUpdates((e4) => {
        C2.value = e4, Y.value = /* @__PURE__ */ new Date(), J2.value = _2.getCurrentBackend(), k2.value = null;
      });
      e3.isOk() ? (O2.value = e3.value, k2.value = null) : k2.value = `GPS start failed: ${e3.error.message}`;
    } catch (e3) {
      k2.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  function ce() {
    r2.value !== null && v.stopOrientationUpdates(r2.value), s2.value !== null && v.stopAccelerationUpdates(s2.value), p2.value !== null && v.stopGyroscopeUpdates(p2.value), O2.value !== null && _2.stopLocationUpdates(O2.value);
  }
  return (e3, r3) => (h(), T(`div`, j, [S(`div`, M, [b(w(a), { title: w(t2)(`sensorTest.deviceOrientation.title`), class: `sensor-card` }, { default: c(() => [X.value ? (h(), f(w(D), { key: 0, type: `error`, title: X.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : g(``, true), n2.value ? (h(), T(`div`, ee, [S(`div`, N, [S(`div`, P, [b(w(A), { label: w(t2)(`sensorTest.deviceOrientation.compassHeading`), value: Q.value.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), b(w(A), { label: w(t2)(`sensorTest.deviceOrientation.alpha`), value: n2.value.alpha.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), b(w(A), { label: w(t2)(`sensorTest.deviceOrientation.beta`), value: n2.value.beta.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`])]), S(`div`, F, [b(w(A), { label: w(t2)(`sensorTest.deviceOrientation.gamma`), value: n2.value.gamma.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), b(w(A), { label: w(t2)(`sensorTest.deviceOrientation.tiltAngle`), value: te.value.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), n2.value.webkitCompassHeading ? (h(), f(w(A), { key: 0, label: w(t2)(`sensorTest.deviceOrientation.iosHeading`), value: n2.value.webkitCompassHeading.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`])) : g(``, true)])])])) : g(``, true)]), _: 1 }, 8, [`title`]), b(w(a), { title: w(t2)(`sensorTest.deviceMotion.title`), class: `sensor-card` }, { default: c(() => [Z.value ? (h(), f(w(D), { key: 0, type: `error`, title: Z.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : g(``, true), i2.value || o2.value ? (h(), T(`div`, I, [i2.value ? (h(), T(`div`, L, [S(`h4`, null, m(w(t2)(`sensorTest.deviceMotion.acceleration.title`)), 1), S(`div`, R, [b(w(A), { label: w(t2)(`sensorTest.deviceMotion.acceleration.x`), value: i2.value.x.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`]), b(w(A), { label: w(t2)(`sensorTest.deviceMotion.acceleration.y`), value: i2.value.y.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`]), b(w(A), { label: w(t2)(`sensorTest.deviceMotion.acceleration.z`), value: i2.value.z.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`])]), S(`div`, z, [b(w(A), { label: w(t2)(`sensorTest.deviceMotion.acceleration.magnitude`), value: $.value.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`])])])) : g(``, true), o2.value ? (h(), T(`div`, B, [S(`h4`, null, m(w(t2)(`sensorTest.deviceMotion.gyroscope.title`)), 1), S(`div`, V, [b(w(A), { label: w(t2)(`sensorTest.deviceMotion.gyroscope.x`), value: o2.value.x.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`]), b(w(A), { label: w(t2)(`sensorTest.deviceMotion.gyroscope.y`), value: o2.value.y.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`]), b(w(A), { label: w(t2)(`sensorTest.deviceMotion.gyroscope.z`), value: o2.value.z.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`])]), S(`div`, H, [b(w(A), { label: w(t2)(`sensorTest.deviceMotion.gyroscope.rotationSpeed`), value: ne.value.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`])])])) : g(``, true)])) : g(``, true)]), _: 1 }, 8, [`title`]), b(w(a), { title: w(t2)(`sensorTest.gps.title`), class: `sensor-card` }, { default: c(() => [k2.value ? (h(), f(w(D), { key: 0, type: `error`, title: k2.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : g(``, true), C2.value ? (h(), T(`div`, U, [S(`div`, W, [S(`div`, G, [b(w(A), { label: w(t2)(`sensorTest.gps.latitude`), value: C2.value.latitude.toFixed(6), suffix: `\xB0` }, null, 8, [`label`, `value`]), b(w(A), { label: w(t2)(`sensorTest.gps.longitude`), value: C2.value.longitude.toFixed(6), suffix: `\xB0` }, null, 8, [`label`, `value`]), b(w(A), { label: w(t2)(`sensorTest.gps.accuracy`), value: C2.value.accuracy.toFixed(1), suffix: `m` }, null, 8, [`label`, `value`])]), S(`div`, K, [b(w(A), { label: w(t2)(`sensorTest.gps.backend`), value: J2.value === `platform` || J2.value === `kalman` ? w(t2)(`sensorTest.gps.backendGPS`) : w(t2)(`sensorTest.gps.backendIP`) }, null, 8, [`label`, `value`]), Y.value ? (h(), f(w(A), { key: 0, label: w(t2)(`sensorTest.gps.timestamp`), value: Y.value.toLocaleTimeString() }, null, 8, [`label`, `value`])) : g(``, true)])])])) : k2.value ? g(``, true) : (h(), T(`div`, q, [S(`p`, null, m(w(t2)(`sensorTest.gps.noData`)), 1)]))]), _: 1 }, 8, [`title`])])]));
} }), [[`__scopeId`, `data-v-d2d136c2`]]);
export {
  J as default
};
