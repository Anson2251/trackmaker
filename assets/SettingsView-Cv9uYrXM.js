import { T as e, t } from "./Card-nhqq8IKa.js";
import "./Tooltip-DGge0ha1.js";
import { Ct as n, Et as r, Lt as i, Ot as a, St as o, Vt as s, Xt as c, _t as l, bt as u, dn as d, dt as f, gt as p, mn as m, t as h, vt as g, wt as _, yt as v, zt as y } from "./index-DTVnoW_1.js";
import { o as b } from "./vue-router-Bobm8XWN.js";
import { n as x } from "./vue-i18n-BAINxUFe.js";
import { n as S, t as C } from "./AnchorAdapter-0SrhvuEO.js";
import { n as w, t as T } from "./Switch-Cn3xt9L6.js";
import "./storage-DsEl3RSe.js";
import { t as E } from "./Button-o58fM-RZ.js";
import "./settings-store-NEXTm_Ep.js";
import { n as D, r as O, t as k } from "./RadioGroup-Da9f0Joc.js";
import { t as A } from "./PerformantEllipsis-DJXJ4P1h.js";
import { n as j, t as M } from "./ListItem-DOTKksGl.js";
import { t as N } from "./core-C47BeAL_.js";
import { t as P } from "./platform-1yaQGydT.js";
var F = _({ name: `RadioButton`, props: D, setup: O, render() {
  let { mergedClsPrefix: t2 } = this;
  return r(`label`, { class: [`${t2}-radio-button`, this.mergedDisabled && `${t2}-radio-button--disabled`, this.renderSafeChecked && `${t2}-radio-button--checked`, this.focus && [`${t2}-radio-button--focus`]] }, r(`input`, { ref: `inputRef`, type: `radio`, class: `${t2}-radio-input`, value: this.value, name: this.mergedName, checked: this.renderSafeChecked, disabled: this.mergedDisabled, onChange: this.handleRadioInputChange, onFocus: this.handleRadioInputFocus, onBlur: this.handleRadioInputBlur }), r(`div`, { class: `${t2}-radio-button__state-border` }), e(this.$slots.default, (e2) => !e2 && !this.label ? null : r(`div`, { ref: `labelRef`, class: `${t2}-radio__label` }, e2 || this.label)));
} }), I = { class: `settings-view` }, L = { class: `settings-layout` }, R = { class: `settings-content` }, z = { style: { display: `flex`, "flex-direction": `row`, "justify-content": `space-between`, "align-items": `center`, "min-width": `0` } }, B = { key: 0 }, V = { key: 1 }, H = { key: 2 }, U = { key: 3 }, W = { class: `advanced-options-card` }, G = { class: `advanced-options-info` }, K = { key: 0, class: `settings-nav` }, q = h(_({ __name: `SettingsView`, setup(e2) {
  let r2 = new P(), h2 = b(), _2 = p(() => r2.isMobile), { width: D2 } = N(), O2 = p(() => D2.value < 800), q2 = p(() => D2.value < 680), { t: J, availableLocales: Y } = x(), X = a(`settings`), Z = () => {
    h2.push(`/advanced-settings`);
  }, Q = p(() => [{ title: `appearance`, items: [{ title: `theme`, type: `radio`, items: [{ value: `light`, label: J(`settings.appearance.theme.options.light`) }, { value: `dark`, label: J(`settings.appearance.theme.options.dark`) }, { value: `system`, label: J(`settings.appearance.theme.options.system`) }] }] }, { title: `geolocation`, items: [{ title: `watchCompatibilityMode`, type: `checkbox` }, { title: `geolocationCorrection`, type: `checkbox` }] }, { title: `language`, items: [{ title: `interfaceLanguage`, type: `select`, items: Y.map((e3) => ({ value: e3, label: J(`settings.language.interfaceLanguage.options.${e3}`) })) }, { title: `mapLanguage`, type: `select`, items: Y.map((e3) => ({ value: e3, label: J(`settings.language.mapLanguage.options.${e3}`) })).concat([{ value: `interface`, label: J(`settings.language.mapLanguage.options.interface`) }]) }] }, { title: `tools`, items: [{ title: `apiDetection`, type: `button` }, { title: `imuOrientationTesting`, type: `button` }] }]), $ = () => {
    h2.push(`/api-detection`);
  }, ee = () => {
    h2.push(`/sensor-demo`);
  };
  return i(() => {
    X.init();
  }), (e3, r3) => (y(), u(`div`, I, [l(`div`, L, [l(`div`, R, [(y(true), u(f, null, s(Q.value, (r4) => (y(), g(d(t), { id: `appearance`, key: r4.title, title: e3.$t(`settings.${r4.title}.title`) }, { default: c(() => [n(d(j), null, { default: c(() => [(y(true), u(f, null, s(r4.items, (t2) => (y(), g(d(M), { key: t2.title }, { default: c(() => [l(`div`, z, [n(d(A), { style: { "white-space": `nowrap` }, tooltip: { trigger: _2.value ? `click` : `hover` } }, { tooltip: c(() => [o(m(t2.items || t2.type === `button` ? e3.$t(`settings.${r4.title}.${t2.title}.title`) : e3.$t(`settings.${r4.title}.${t2.title}`)), 1)]), default: c(() => [o(m(t2.items || t2.type === `button` ? e3.$t(`settings.${r4.title}.${t2.title}.title`) : e3.$t(`settings.${r4.title}.${t2.title}`)) + ` `, 1)]), _: 2 }, 1032, [`tooltip`]), t2.type === `radio` ? (y(), u(`div`, B, [O2.value ? (y(), g(d(w), { key: 1, value: d(X).settings[t2.title], "onUpdate:value": (e4) => d(X).settings[t2.title] = e4, options: t2.items, "consistent-menu-width": false }, null, 8, [`value`, `onUpdate:value`, `options`])) : (y(), g(d(k), { key: 0, value: d(X).settings[t2.title], "onUpdate:value": (e4) => d(X).settings[t2.title] = e4 }, { default: c(() => [(y(true), u(f, null, s(t2.items, (e4) => (y(), g(d(F), { key: e4.value, value: e4.value, label: e4.label, checked: d(X).settings[t2.title] === e4.value }, null, 8, [`value`, `label`, `checked`]))), 128))]), _: 2 }, 1032, [`value`, `onUpdate:value`]))])) : t2.type === `select` ? (y(), u(`div`, V, [n(d(w), { value: d(X).settings[t2.title], "onUpdate:value": (e4) => d(X).settings[t2.title] = e4, options: t2.items, "consistent-menu-width": false }, null, 8, [`value`, `onUpdate:value`, `options`])])) : t2.type === `checkbox` ? (y(), u(`div`, H, [n(d(T), { value: d(X).settings[t2.title], "onUpdate:value": (e4) => d(X).settings[t2.title] = e4 }, null, 8, [`value`, `onUpdate:value`])])) : t2.type === `button` ? (y(), u(`div`, U, [n(d(E), { type: `primary`, onClick: (e4) => t2.title === `apiDetection` ? $() : ee() }, { default: c(() => [o(m(e3.$t(`settings.${r4.title}.${t2.title}.button`)), 1)]), _: 2 }, 1032, [`onClick`])])) : v(``, true)])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)]), _: 2 }, 1032, [`title`]))), 128)), n(d(t), { id: `advanced-options` }, { default: c(() => [l(`div`, W, [l(`div`, G, [l(`h3`, null, m(e3.$t(`settings.advancedOptions.title`)), 1), l(`p`, null, m(e3.$t(`settings.advancedOptions.description`)), 1)]), n(d(E), { type: `primary`, size: `large`, onClick: Z }, { default: c(() => [o(m(e3.$t(`settings.advancedOptions.button`)), 1)]), _: 1 })])]), _: 1 })]), q2.value ? v(``, true) : (y(), u(`div`, K, [n(d(C), { "show-rail": true, style: { width: `128px` } }, { default: c(() => [(y(true), u(f, null, s(Q.value, (t2) => (y(), g(d(S), { key: t2.title, title: e3.$t(`settings.${t2.title}.title`), href: `#${t2.title.toLowerCase()}` }, null, 8, [`title`, `href`]))), 128))]), _: 1 })]))])]));
} }), [[`__scopeId`, `data-v-a5cd7819`]]);
export {
  q as default
};
