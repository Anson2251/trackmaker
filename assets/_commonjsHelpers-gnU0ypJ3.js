function n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function c(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var o = e.default;
  if (typeof o == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    t.prototype = o.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: true }), Object.keys(e).forEach(function(r) {
    var u = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, u.get ? u : { enumerable: true, get: function() {
      return e[r];
    } });
  }), t;
}
export {
  c as a,
  n as g
};
