import { C as e, T as t, _ as n, c as r, dt as i, f as a, gt as o, h as s, mt as c, ot as l, pt as u, s as d, t as f, u as p, ut as m, y as h } from "./Card-nhqq8IKa.js";
import { Ct as g, Et as _, Lt as v, Rt as y, Xt as b, _t as x, an as S, bt as C, dn as w, gt as T, jt as E, mn as D, o as O, s as k, t as A, vt as j, wt as M, yt as N, zt as P } from "./index-DTVnoW_1.js";
import { o as F } from "./vue-router-Bobm8XWN.js";
import { n as I } from "./vue-i18n-BAINxUFe.js";
import { t as L } from "./Button-o58fM-RZ.js";
import { n as R, r as z, t as B } from "./Success-SBPGeO_s.js";
import { t as V } from "./Warning-DtnUwqHe.js";
import { r as H, t as U } from "./light-DZsVD2j_.js";
import { t as W } from "./fade-in-height-expand.cssr-Cu-aN91s.js";
import "./imu-C9UV4BVU.js";
var G = i(`alert`, `
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`, [u(`border`, `
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `), c(`closable`, [i(`alert-body`, [u(`title`, `
 padding-right: 24px;
 `)])]), u(`icon`, { color: `var(--n-icon-color)` }), i(`alert-body`, { padding: `var(--n-padding)` }, [u(`title`, { color: `var(--n-title-text-color)` }), u(`content`, { color: `var(--n-content-text-color)` })]), W({ originalTransition: `transform .3s var(--n-bezier)`, enterToProps: { transform: `scale(1)` }, leaveToProps: { transform: `scale(0.9)` } }), u(`icon`, `
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `), u(`close`, `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `), c(`show-icon`, [i(`alert-body`, { paddingLeft: `calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))` })]), c(`right-adjust`, [i(`alert-body`, { paddingRight: `calc(var(--n-close-size) + var(--n-padding) + 2px)` })]), i(`alert-body`, `
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `, [u(`title`, `
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `, [m(`& +`, [u(`content`, { marginTop: `9px` })])]), u(`content`, { transition: `color .3s var(--n-bezier)`, fontSize: `var(--n-font-size)` })]), u(`icon`, { transition: `color .3s var(--n-bezier)` })]), K = M({ name: `Alert`, inheritAttrs: false, props: Object.assign(Object.assign({}, a.props), { title: String, showIcon: { type: Boolean, default: true }, type: { type: String, default: `default` }, bordered: { type: Boolean, default: true }, closable: Boolean, onClose: Function, onAfterLeave: Function, onAfterHide: Function }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, mergedBorderedRef: r2, inlineThemeDisabled: i2, mergedRtlRef: c2 } = h(e2), u2 = a(`Alert`, `-alert`, G, H, e2, t2), d2 = s(`Alert`, c2, t2), f2 = T(() => {
    let { common: { cubicBezierEaseInOut: t3 }, self: n2 } = u2.value, { fontSize: r3, borderRadius: i3, titleFontWeight: a2, lineHeight: s2, iconSize: c3, iconMargin: d3, iconMarginRtl: f3, closeIconSize: p3, closeBorderRadius: m3, closeSize: h2, closeMargin: g3, closeMarginRtl: _2, padding: v2 } = n2, { type: y2 } = e2, { left: b2, right: x2 } = l(d3);
    return { "--n-bezier": t3, "--n-color": n2[o(`color`, y2)], "--n-close-icon-size": p3, "--n-close-border-radius": m3, "--n-close-color-hover": n2[o(`closeColorHover`, y2)], "--n-close-color-pressed": n2[o(`closeColorPressed`, y2)], "--n-close-icon-color": n2[o(`closeIconColor`, y2)], "--n-close-icon-color-hover": n2[o(`closeIconColorHover`, y2)], "--n-close-icon-color-pressed": n2[o(`closeIconColorPressed`, y2)], "--n-icon-color": n2[o(`iconColor`, y2)], "--n-border": n2[o(`border`, y2)], "--n-title-text-color": n2[o(`titleTextColor`, y2)], "--n-content-text-color": n2[o(`contentTextColor`, y2)], "--n-line-height": s2, "--n-border-radius": i3, "--n-font-size": r3, "--n-title-font-weight": a2, "--n-icon-size": c3, "--n-icon-margin": d3, "--n-icon-margin-rtl": f3, "--n-close-size": h2, "--n-close-margin": g3, "--n-close-margin-rtl": _2, "--n-padding": v2, "--n-icon-margin-left": b2, "--n-icon-margin-right": x2 };
  }), p2 = i2 ? n(`alert`, T(() => e2.type[0]), f2, e2) : void 0, m2 = S(true), g2 = () => {
    let { onAfterLeave: t3, onAfterHide: n2 } = e2;
    t3 && t3(), n2 && n2();
  };
  return { rtlEnabled: d2, mergedClsPrefix: t2, mergedBordered: r2, visible: m2, handleCloseClick: () => {
    var _a;
    Promise.resolve((_a = e2.onClose) == null ? void 0 : _a.call(e2)).then((e3) => {
      e3 !== false && (m2.value = false);
    });
  }, handleAfterLeave: () => {
    g2();
  }, mergedTheme: u2, cssVars: i2 ? void 0 : f2, themeClass: p2 == null ? void 0 : p2.themeClass, onRender: p2 == null ? void 0 : p2.onRender };
}, render() {
  var n2;
  return (n2 = this.onRender) == null || n2.call(this), _(d, { onAfterLeave: this.handleAfterLeave }, { default: () => {
    let { mergedClsPrefix: n3, $slots: i2 } = this, a2 = { class: [`${n3}-alert`, this.themeClass, this.closable && `${n3}-alert--closable`, this.showIcon && `${n3}-alert--show-icon`, !this.title && this.closable && `${n3}-alert--right-adjust`, this.rtlEnabled && `${n3}-alert--rtl`], style: this.cssVars, role: `alert` };
    return this.visible ? _(`div`, Object.assign({}, E(this.$attrs, a2)), this.closable && _(r, { clsPrefix: n3, class: `${n3}-alert__close`, onClick: this.handleCloseClick }), this.bordered && _(`div`, { class: `${n3}-alert__border` }), this.showIcon && _(`div`, { class: `${n3}-alert__icon`, "aria-hidden": `true` }, e(i2.icon, () => [_(p, { clsPrefix: n3 }, { default: () => {
      switch (this.type) {
        case `success`:
          return _(B, null);
        case `info`:
          return _(R, null);
        case `warning`:
          return _(V, null);
        case `error`:
          return _(z, null);
        default:
          return null;
      }
    } })])), _(`div`, { class: [`${n3}-alert-body`, this.mergedBordered && `${n3}-alert-body--bordered`] }, t(i2.header, (e2) => {
      let t2 = e2 || this.title;
      return t2 ? _(`div`, { class: `${n3}-alert-body__title` }, t2) : null;
    }), i2.default && _(`div`, { class: `${n3}-alert-body__content` }, i2))) : null;
  } });
} }), q = i(`statistic`, [u(`label`, `
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `), i(`statistic-value`, `
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `, [u(`prefix`, `
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `, [i(`icon`, { verticalAlign: `-0.125em` })]), u(`content`, `
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `), u(`suffix`, `
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `, [i(`icon`, { verticalAlign: `-0.125em` })])])]), J = M({ name: `Statistic`, props: Object.assign(Object.assign({}, a.props), { tabularNums: Boolean, label: String, value: [String, Number] }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: r2, mergedRtlRef: i2 } = h(e2), o2 = a(`Statistic`, `-statistic`, q, U, e2, t2), c2 = s(`Statistic`, i2, t2), l2 = T(() => {
    let { self: { labelFontWeight: e3, valueFontSize: t3, valueFontWeight: n2, valuePrefixTextColor: r3, labelTextColor: i3, valueSuffixTextColor: a2, valueTextColor: s2, labelFontSize: c3 }, common: { cubicBezierEaseInOut: l3 } } = o2.value;
    return { "--n-bezier": l3, "--n-label-font-size": c3, "--n-label-font-weight": e3, "--n-label-text-color": i3, "--n-value-font-weight": n2, "--n-value-font-size": t3, "--n-value-prefix-text-color": r3, "--n-value-suffix-text-color": a2, "--n-value-text-color": s2 };
  }), u2 = r2 ? n(`statistic`, void 0, l2, e2) : void 0;
  return { rtlEnabled: c2, mergedClsPrefix: t2, cssVars: r2 ? void 0 : l2, themeClass: u2 == null ? void 0 : u2.themeClass, onRender: u2 == null ? void 0 : u2.onRender };
}, render() {
  var e2;
  let { mergedClsPrefix: n2, $slots: { default: r2, label: i2, prefix: a2, suffix: o2 } } = this;
  return (e2 = this.onRender) == null || e2.call(this), _(`div`, { class: [`${n2}-statistic`, this.themeClass, this.rtlEnabled && `${n2}-statistic--rtl`], style: this.cssVars }, t(i2, (e3) => _(`div`, { class: `${n2}-statistic__label` }, this.label || e3)), _(`div`, { class: `${n2}-statistic-value`, style: { fontVariantNumeric: this.tabularNums ? `tabular-nums` : `` } }, t(a2, (e3) => e3 && _(`span`, { class: `${n2}-statistic-value__prefix` }, e3)), this.value === void 0 ? t(r2, (e3) => e3 && _(`span`, { class: `${n2}-statistic-value__content` }, e3)) : _(`span`, { class: `${n2}-statistic-value__content` }, this.value), t(o2, (e3) => e3 && _(`span`, { class: `${n2}-statistic-value__suffix` }, e3))));
} }), Y = { class: `sensor-demo-view` }, X = { class: `sensor-demo-header` }, Z = { class: `demo-container` }, Q = { key: 1, class: `data-section` }, $ = { class: `orientation-stats` }, ee = { class: `orientation-row` }, te = { class: `orientation-row` }, ne = { key: 1, class: `data-section` }, re = { key: 0, class: `sensor-subsection` }, ie = { class: `xyz-row` }, ae = { class: `other-stats-row` }, oe = { key: 1, class: `sensor-subsection` }, se = { class: `xyz-row` }, ce = { class: `other-stats-row` }, le = { key: 1, class: `data-section` }, ue = { class: `gps-stats` }, de = { class: `gps-row` }, fe = { class: `gps-row` }, pe = { key: 2, class: `data-section` }, me = A(M({ __name: `SensorTestView`, setup(e2) {
  let { t: t2 } = I(), n2 = F(), r2 = S(null), i2 = S(null), a2 = S(null), o2 = S(null), s2 = S(null), c2 = S(null), l2 = new k(), u2 = S(null), d2 = S(null), p2 = S(null), m2 = S(null), h2 = S(null), _2 = S(null), E2 = S(null), A2 = T(() => r2.value ? r2.value.webkitCompassHeading || 360 - r2.value.alpha : 0), M2 = T(() => r2.value ? Math.sqrt(r2.value.beta ** 2 + r2.value.gamma ** 2) : 0), R2 = T(() => a2.value ? Math.sqrt(a2.value.x ** 2 + a2.value.y ** 2 + a2.value.z ** 2) : 0), z2 = T(() => o2.value ? Math.sqrt(o2.value.x ** 2 + o2.value.y ** 2 + o2.value.z ** 2) : 0);
  v(async () => {
    await B2(), await U2();
  }), y(() => {
    G2();
  });
  async function B2() {
    try {
      let e3 = await O.initialize();
      if (e3.isErr()) {
        console.error(`Failed to initialize IMU manager:`, e3.error), _2.value = `IMU manager initialization failed`, E2.value = `IMU manager initialization failed`;
        return;
      }
      await V2(), await H2();
      let t3 = O.getLastKnownOrientation();
      t3 && (r2.value = t3);
      let n3 = O.getLastKnownMotion();
      n3 && (a2.value = n3.acceleration, o2.value = n3.gyroscope);
    } catch (e3) {
      console.error(`Error initializing IMU manager:`, e3), _2.value = `Initialization error`, E2.value = `Initialization error`;
    }
  }
  async function V2() {
    try {
      let e3 = await O.startOrientationUpdates((e4) => {
        r2.value = e4, _2.value = null;
      });
      e3.isOk() ? (i2.value = e3.value, _2.value = null) : _2.value = `Start failed: ${e3.error.message}`;
    } catch (e3) {
      _2.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  async function H2() {
    try {
      let e3 = await O.startAccelerationUpdates({ normalizeToENU: true }, (e4) => {
        a2.value = e4, E2.value = null;
      });
      if (e3.isErr()) {
        E2.value = `Acceleration start failed: ${e3.error.message}`;
        return;
      }
      let t3 = await O.startGyroscopeUpdates({ normalizeToENU: false }, (e4) => {
        o2.value = e4, E2.value = null;
      });
      if (t3.isErr()) {
        e3.isOk() && O.stopAccelerationUpdates(e3.value), E2.value = `Gyroscope start failed: ${t3.error.message}`;
        return;
      }
      s2.value = e3.value, c2.value = t3.value, E2.value = null;
    } catch (e3) {
      E2.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  async function U2() {
    try {
      let e3 = await l2.initialize();
      if (e3.isErr()) {
        console.error(`Failed to initialize GPS manager:`, e3.error), p2.value = `GPS manager initialization failed`;
        return;
      }
      let t3 = l2.getLastKnownLocation();
      t3 && t3.latitude !== 0 && t3.longitude !== 0 && (u2.value = t3, h2.value = /* @__PURE__ */ new Date()), m2.value = l2.getCurrentBackend(), await W2();
    } catch (e3) {
      console.error(`Error initializing GPS manager:`, e3), p2.value = `GPS initialization error`;
    }
  }
  async function W2() {
    try {
      let e3 = await l2.startLocationUpdates((e4) => {
        u2.value = e4, h2.value = /* @__PURE__ */ new Date(), m2.value = l2.getCurrentBackend(), p2.value = null;
      });
      e3.isOk() ? (d2.value = e3.value, p2.value = null) : p2.value = `GPS start failed: ${e3.error.message}`;
    } catch (e3) {
      p2.value = `Error: ${e3 instanceof Error ? e3.message : `Unknown error`}`;
    }
  }
  function G2() {
    i2.value !== null && O.stopOrientationUpdates(i2.value), s2.value !== null && O.stopAccelerationUpdates(s2.value), c2.value !== null && O.stopGyroscopeUpdates(c2.value), d2.value !== null && l2.stopLocationUpdates(d2.value);
  }
  let q2 = () => {
    n2.back();
  };
  return (e3, n3) => (P(), C(`div`, Y, [x(`div`, X, [g(w(L), { quaternary: ``, circle: ``, onClick: q2 }, { icon: b(() => [...n3[0] || (n3[0] = [x(`svg`, { xmlns: `http://www.w3.org/2000/svg`, width: `20`, height: `20`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, "stroke-width": `2` }, [x(`path`, { d: `m12 19-7-7 7-7` }), x(`path`, { d: `M19 12H5` })], -1)])]), _: 1 }), x(`h1`, null, D(e3.$t(`sensorTest.title`)), 1)]), x(`div`, Z, [g(w(f), { title: w(t2)(`sensorTest.deviceOrientation.title`), class: `sensor-card` }, { default: b(() => [_2.value ? (P(), j(w(K), { key: 0, type: `error`, title: _2.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : N(``, true), r2.value ? (P(), C(`div`, Q, [x(`div`, $, [x(`div`, ee, [g(w(J), { label: w(t2)(`sensorTest.deviceOrientation.compassHeading`), value: A2.value.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), g(w(J), { label: w(t2)(`sensorTest.deviceOrientation.alpha`), value: r2.value.alpha.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), g(w(J), { label: w(t2)(`sensorTest.deviceOrientation.beta`), value: r2.value.beta.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`])]), x(`div`, te, [g(w(J), { label: w(t2)(`sensorTest.deviceOrientation.gamma`), value: r2.value.gamma.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), g(w(J), { label: w(t2)(`sensorTest.deviceOrientation.tiltAngle`), value: M2.value.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`]), r2.value.webkitCompassHeading ? (P(), j(w(J), { key: 0, label: w(t2)(`sensorTest.deviceOrientation.iosHeading`), value: r2.value.webkitCompassHeading.toFixed(1), suffix: `\xB0` }, null, 8, [`label`, `value`])) : N(``, true)])])])) : N(``, true)]), _: 1 }, 8, [`title`]), g(w(f), { title: w(t2)(`sensorTest.deviceMotion.title`), class: `sensor-card` }, { default: b(() => [E2.value ? (P(), j(w(K), { key: 0, type: `error`, title: E2.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : N(``, true), a2.value || o2.value ? (P(), C(`div`, ne, [a2.value ? (P(), C(`div`, re, [x(`h4`, null, D(w(t2)(`sensorTest.deviceMotion.acceleration.title`)), 1), x(`div`, ie, [g(w(J), { label: w(t2)(`sensorTest.deviceMotion.acceleration.x`), value: a2.value.x.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`]), g(w(J), { label: w(t2)(`sensorTest.deviceMotion.acceleration.y`), value: a2.value.y.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`]), g(w(J), { label: w(t2)(`sensorTest.deviceMotion.acceleration.z`), value: a2.value.z.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`])]), x(`div`, ae, [g(w(J), { label: w(t2)(`sensorTest.deviceMotion.acceleration.magnitude`), value: R2.value.toFixed(3), suffix: `m/s\xB2` }, null, 8, [`label`, `value`])])])) : N(``, true), o2.value ? (P(), C(`div`, oe, [x(`h4`, null, D(w(t2)(`sensorTest.deviceMotion.gyroscope.title`)), 1), x(`div`, se, [g(w(J), { label: w(t2)(`sensorTest.deviceMotion.gyroscope.x`), value: o2.value.x.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`]), g(w(J), { label: w(t2)(`sensorTest.deviceMotion.gyroscope.y`), value: o2.value.y.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`]), g(w(J), { label: w(t2)(`sensorTest.deviceMotion.gyroscope.z`), value: o2.value.z.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`])]), x(`div`, ce, [g(w(J), { label: w(t2)(`sensorTest.deviceMotion.gyroscope.rotationSpeed`), value: z2.value.toFixed(3), suffix: `rad/s` }, null, 8, [`label`, `value`])])])) : N(``, true)])) : N(``, true)]), _: 1 }, 8, [`title`]), g(w(f), { title: w(t2)(`sensorTest.gps.title`), class: `sensor-card` }, { default: b(() => [p2.value ? (P(), j(w(K), { key: 0, type: `error`, title: p2.value, style: { "margin-top": `16px` } }, null, 8, [`title`])) : N(``, true), u2.value ? (P(), C(`div`, le, [x(`div`, ue, [x(`div`, de, [g(w(J), { label: w(t2)(`sensorTest.gps.latitude`), value: u2.value.latitude.toFixed(6), suffix: `\xB0` }, null, 8, [`label`, `value`]), g(w(J), { label: w(t2)(`sensorTest.gps.longitude`), value: u2.value.longitude.toFixed(6), suffix: `\xB0` }, null, 8, [`label`, `value`]), g(w(J), { label: w(t2)(`sensorTest.gps.accuracy`), value: u2.value.accuracy.toFixed(1), suffix: `m` }, null, 8, [`label`, `value`])]), x(`div`, fe, [g(w(J), { label: w(t2)(`sensorTest.gps.backend`), value: m2.value === `platform` || m2.value === `kalman` ? w(t2)(`sensorTest.gps.backendGPS`) : w(t2)(`sensorTest.gps.backendIP`) }, null, 8, [`label`, `value`]), h2.value ? (P(), j(w(J), { key: 0, label: w(t2)(`sensorTest.gps.timestamp`), value: h2.value.toLocaleTimeString() }, null, 8, [`label`, `value`])) : N(``, true)])])])) : p2.value ? N(``, true) : (P(), C(`div`, pe, [x(`p`, null, D(w(t2)(`sensorTest.gps.noData`)), 1)]))]), _: 1 }, 8, [`title`])])]));
} }), [[`__scopeId`, `data-v-413e121e`]]);
export {
  me as default
};
