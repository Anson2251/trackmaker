import { ct as e, f as t, g as n, h as r, ot as i, t as a, v as o, w as s } from "./Card-wTK5VWgg.js";
import { At as c, Ot as l, Vt as u, Xt as d, _t as f, an as p, ct as m, dt as h, ht as g, kt as _, lt as v, mt as y, nn as b, o as x, s as S, st as C, t as w, ut as T } from "./index-C4uc8sCV.js";
import { n as E } from "./vue-i18n-BmCNrBEx.js";
import { t as D } from "./Alert-Dcs0al4V.js";
import { t as O } from "./light-27ybxbZP.js";
import "./imu-BennKAyo.js";
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
  let { mergedClsPrefixRef: i2, inlineThemeDisabled: a2, mergedRtlRef: s2 } = o(e2), c2 = t(`Statistic`, `-statistic`, k, O, e2, i2), l2 = r(`Statistic`, s2, i2), u2 = C(() => {
    let { self: { labelFontWeight: e3, valueFontSize: t2, valueFontWeight: n2, valuePrefixTextColor: r2, labelTextColor: i3, valueSuffixTextColor: a3, valueTextColor: o2, labelFontSize: s3 }, common: { cubicBezierEaseInOut: l3 } } = c2.value;
    return { "--n-bezier": l3, "--n-label-font-size": s3, "--n-label-font-weight": e3, "--n-label-text-color": i3, "--n-value-font-weight": n2, "--n-value-font-size": t2, "--n-value-prefix-text-color": r2, "--n-value-suffix-text-color": a3, "--n-value-text-color": o2 };
  }), d2 = a2 ? n(`statistic`, void 0, u2, e2) : void 0;
  return { rtlEnabled: l2, mergedClsPrefix: i2, cssVars: a2 ? void 0 : u2, themeClass: d2 == null ? void 0 : d2.themeClass, onRender: d2 == null ? void 0 : d2.onRender };
}, render() {
  var e2;
  let { mergedClsPrefix: t2, $slots: { default: n2, label: r2, prefix: i2, suffix: a2 } } = this;
  return (e2 = this.onRender) == null || e2.call(this), f(`div`, { class: [`${t2}-statistic`, this.themeClass, this.rtlEnabled && `${t2}-statistic--rtl`], style: this.cssVars }, s(r2, (e3) => f(`div`, { class: `${t2}-statistic__label` }, this.label || e3)), f(`div`, { class: `${t2}-statistic-value`, style: { fontVariantNumeric: this.tabularNums ? `tabular-nums` : `` } }, s(i2, (e3) => e3 && f(`span`, { class: `${t2}-statistic-value__prefix` }, e3)), this.value === void 0 ? s(n2, (e3) => e3 && f(`span`, { class: `${t2}-statistic-value__content` }, e3)) : f(`span`, { class: `${t2}-statistic-value__content` }, this.value), s(a2, (e3) => e3 && f(`span`, { class: `${t2}-statistic-value__suffix` }, e3))));
} }), j = { class: `sensor-demo-view` }, M = { class: `demo-container` }, N = { key: 1, class: `data-section` }, P = { class: `orientation-stats` }, F = { class: `orientation-row` }, I = { class: `orientation-row` }, L = { key: 1, class: `data-section` }, R = { key: 0, class: `sensor-subsection` }, z = { class: `xyz-row` }, B = { class: `other-stats-row` }, V = { key: 1, class: `sensor-subsection` }, H = { class: `xyz-row` }, U = { class: `other-stats-row` }, W = { key: 1, class: `data-section` }, G = { class: `gps-stats` }, K = { class: `gps-row` }, q = { class: `gps-row` }, J = { key: 2, class: `data-section` }, Y = w(g({ __name: `SensorTestView`, setup(e2) {
  let { t: t2 } = E(), n2 = d(null), r2 = d(null), i2 = d(null), o2 = d(null), s2 = d(null), f2 = d(null), g2 = new S(), w2 = d(null), O2 = d(null), k2 = d(null), Y2 = d(null), X = d(null), Z = d(null), Q = d(null), $ = C(() => n2.value ? n2.value.webkitCompassHeading || 360 - n2.value.alpha : 0), ee = C(() => n2.value ? Math.sqrt(n2.value.beta ** 2 + n2.value.gamma ** 2) : 0), te = C(() => i2.value ? Math.sqrt(i2.value.x ** 2 + i2.value.y ** 2 + i2.value.z ** 2) : 0), ne = C(() => o2.value ? Math.sqrt(o2.value.x ** 2 + o2.value.y ** 2 + o2.value.z ** 2) : 0);
  l(async () => {
    await re(), await oe();
  }), _(() => {
    ce();
  });
  async function re() {
    try {
      let e3 = await x.initialize();
      if (e3.isErr()) {
        console.error(`Failed to initialize IMU manager:`, e3.error), Z.value = `IMU manager initialization failed`, Q.value = `IMU manager initialization failed`;
        return;
      }
      await ie(), await ae();
      let t3 = x.getLastKnownOrientation();
      t3 && (n2.value = t3);
      let r3 = x.getLastKnownMotion();
      r3 && (i2.value = r3.acceleration, o2.value = r3.gyroscope);
    } catch (e3) {
      console.error(`Error initializing IMU manager:`, e3), Z.value = `Initialization error`, Q.value = `Initialization error`;
    }
  }
  async function ie() {
    try {
      let e3 = await x.startOrientationUpdates((e4) => {
        n2.value = e4, Z.value = null;
      });
      e3.isOk() ? (r2.value = e3.value, Z.value = null) : Z.value = `Start failed: ${e3.error.message}`;
    } catch (e3) {
      Z.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  async function ae() {
    try {
      let e3 = await x.startAccelerationUpdates({ normalizeToENU: true }, (e4) => {
        i2.value = e4, Q.value = null;
      });
      if (e3.isErr()) {
        Q.value = `Acceleration start failed: ${e3.error.message}`;
        return;
      }
      let t3 = await x.startGyroscopeUpdates({ normalizeToENU: false }, (e4) => {
        o2.value = e4, Q.value = null;
      });
      if (t3.isErr()) {
        e3.isOk() && x.stopAccelerationUpdates(e3.value), Q.value = `Gyroscope start failed: ${t3.error.message}`;
        return;
      }
      s2.value = e3.value, f2.value = t3.value, Q.value = null;
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
      t3 && t3.latitude !== 0 && t3.longitude !== 0 && (w2.value = t3, X.value = /* @__PURE__ */ new Date()), Y2.value = g2.getCurrentBackend(), await se();
    } catch (e3) {
      console.error(`Error initializing GPS manager:`, e3), k2.value = `GPS initialization error`;
    }
  }
  async function se() {
    try {
      let e3 = await g2.startLocationUpdates((e4) => {
        w2.value = e4, X.value = /* @__PURE__ */ new Date(), Y2.value = g2.getCurrentBackend(), k2.value = null;
      });
      e3.isOk() ? (O2.value = e3.value, k2.value = null) : k2.value = `GPS start failed: ${e3.error.message}`;
    } catch (e3) {
      k2.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  function ce() {
    r2.value !== null && x.stopOrientationUpdates(r2.value), s2.value !== null && x.stopAccelerationUpdates(s2.value), f2.value !== null && x.stopGyroscopeUpdates(f2.value), O2.value !== null && g2.stopLocationUpdates(O2.value);
  }
  return (e3, r3) => (c(), h(`div`, j, [m(`div`, M, [y(b(a), { title: b(t2)(`sensorTest.deviceOrientation.title`), class: `sensor-card` }, { default: u(() => [Z.value ? (c(), v(b(D), { key: 0, type: `error`, title: Z.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : T(``, true), n2.value ? (c(), h(`div`, N, [m(`div`, P, [m(`div`, F, [y(b(A), { label: b(t2)(`sensorTest.deviceOrientation.compassHeading`), value: $.value.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(b(A), { label: b(t2)(`sensorTest.deviceOrientation.alpha`), value: n2.value.alpha.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(b(A), { label: b(t2)(`sensorTest.deviceOrientation.beta`), value: n2.value.beta.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`])]), m(`div`, I, [y(b(A), { label: b(t2)(`sensorTest.deviceOrientation.gamma`), value: n2.value.gamma.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(b(A), { label: b(t2)(`sensorTest.deviceOrientation.tiltAngle`), value: ee.value.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), n2.value.webkitCompassHeading ? (c(), v(b(A), { key: 0, label: b(t2)(`sensorTest.deviceOrientation.iosHeading`), value: n2.value.webkitCompassHeading.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`])) : T(``, true)])])])) : T(``, true)]), _: 1 }, 8, [`title`]), y(b(a), { title: b(t2)(`sensorTest.deviceMotion.title`), class: `sensor-card` }, { default: u(() => [Q.value ? (c(), v(b(D), { key: 0, type: `error`, title: Q.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : T(``, true), i2.value || o2.value ? (c(), h(`div`, L, [i2.value ? (c(), h(`div`, R, [m(`h4`, null, p(b(t2)(`sensorTest.deviceMotion.acceleration.title`)), 1), m(`div`, z, [y(b(A), { label: b(t2)(`sensorTest.deviceMotion.acceleration.x`), value: i2.value.x.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`]), y(b(A), { label: b(t2)(`sensorTest.deviceMotion.acceleration.y`), value: i2.value.y.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`]), y(b(A), { label: b(t2)(`sensorTest.deviceMotion.acceleration.z`), value: i2.value.z.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`])]), m(`div`, B, [y(b(A), { label: b(t2)(`sensorTest.deviceMotion.acceleration.magnitude`), value: te.value.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`])])])) : T(``, true), o2.value ? (c(), h(`div`, V, [m(`h4`, null, p(b(t2)(`sensorTest.deviceMotion.gyroscope.title`)), 1), m(`div`, H, [y(b(A), { label: b(t2)(`sensorTest.deviceMotion.gyroscope.x`), value: o2.value.x.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`]), y(b(A), { label: b(t2)(`sensorTest.deviceMotion.gyroscope.y`), value: o2.value.y.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`]), y(b(A), { label: b(t2)(`sensorTest.deviceMotion.gyroscope.z`), value: o2.value.z.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`])]), m(`div`, U, [y(b(A), { label: b(t2)(`sensorTest.deviceMotion.gyroscope.rotationSpeed`), value: ne.value.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`])])])) : T(``, true)])) : T(``, true)]), _: 1 }, 8, [`title`]), y(b(a), { title: b(t2)(`sensorTest.gps.title`), class: `sensor-card` }, { default: u(() => [k2.value ? (c(), v(b(D), { key: 0, type: `error`, title: k2.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : T(``, true), w2.value ? (c(), h(`div`, W, [m(`div`, G, [m(`div`, K, [y(b(A), { label: b(t2)(`sensorTest.gps.latitude`), value: w2.value.latitude.toFixed(6), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(b(A), { label: b(t2)(`sensorTest.gps.longitude`), value: w2.value.longitude.toFixed(6), suffix: `\xB0` }, null, 8, [`label`, `value`]), y(b(A), { label: b(t2)(`sensorTest.gps.accuracy`), value: w2.value.accuracy.toFixed(1), suffix: `m` }, null, 8, [`label`, `value`])]), m(`div`, q, [y(b(A), { label: b(t2)(`sensorTest.gps.backend`), value: Y2.value === `platform` || Y2.value === `kalman` ? b(t2)(`sensorTest.gps.backendGPS`) : b(t2)(`sensorTest.gps.backendIP`) }, null, 8, [`label`, `value`]), X.value ? (c(), v(b(A), { key: 0, label: b(t2)(`sensorTest.gps.timestamp`), value: X.value.toLocaleTimeString() }, null, 8, [`label`, `value`])) : T(``, true)])])])) : k2.value ? T(``, true) : (c(), h(`div`, J, [m(`p`, null, p(b(t2)(`sensorTest.gps.noData`)), 1)]))]), _: 1 }, 8, [`title`])])]));
} }), [[`__scopeId`, `data-v-d2d136c2`]]);
export {
  Y as default
};
