var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { S as e, d as t, x as n } from "./index-DTVnoW_1.js";
var r = class {
  constructor() {
    __publicField(this, "parser");
    __publicField(this, "platformContext");
    this.parser = new e(navigator.userAgent), this.platformContext = n();
  }
  get isMobile() {
    return this.platformContext.isMobile;
  }
  get isTablet() {
    return this.platformContext.isTablet;
  }
  get isUnknown() {
    return this.parser.getDevice().type === void 0;
  }
  get browser() {
    return t() ? `Tauri` : this.platformContext.browser || ``;
  }
  get engine() {
    return this.parser.getEngine().name || ``;
  }
  get os() {
    return this.platformContext.os || ``;
  }
  get context() {
    return this.platformContext;
  }
  get isTauri() {
    return t();
  }
  get isWeb() {
    let e2 = this.platformContext.environment;
    return e2 === `web` || e2 === `mobile_web`;
  }
};
export {
  r as t
};
