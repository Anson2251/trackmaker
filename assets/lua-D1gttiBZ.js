function e(e2) {
  return RegExp(`^(?:` + e2.join(`|`) + `)`, `i`);
}
function t(e2) {
  return RegExp(`^(?:` + e2.join(`|`) + `)$`, `i`);
}
var n = t(`_G,_VERSION,assert,collectgarbage,dofile,error,getfenv,getmetatable,ipairs,load,loadfile,loadstring,module,next,pairs,pcall,print,rawequal,rawget,rawset,require,select,setfenv,setmetatable,tonumber,tostring,type,unpack,xpcall,coroutine.create,coroutine.resume,coroutine.running,coroutine.status,coroutine.wrap,coroutine.yield,debug.debug,debug.getfenv,debug.gethook,debug.getinfo,debug.getlocal,debug.getmetatable,debug.getregistry,debug.getupvalue,debug.setfenv,debug.sethook,debug.setlocal,debug.setmetatable,debug.setupvalue,debug.traceback,close,flush,lines,read,seek,setvbuf,write,io.close,io.flush,io.input,io.lines,io.open,io.output,io.popen,io.read,io.stderr,io.stdin,io.stdout,io.tmpfile,io.type,io.write,math.abs,math.acos,math.asin,math.atan,math.atan2,math.ceil,math.cos,math.cosh,math.deg,math.exp,math.floor,math.fmod,math.frexp,math.huge,math.ldexp,math.log,math.log10,math.max,math.min,math.modf,math.pi,math.pow,math.rad,math.random,math.randomseed,math.sin,math.sinh,math.sqrt,math.tan,math.tanh,os.clock,os.date,os.difftime,os.execute,os.exit,os.getenv,os.remove,os.rename,os.setlocale,os.time,os.tmpname,package.cpath,package.loaded,package.loaders,package.loadlib,package.path,package.preload,package.seeall,string.byte,string.char,string.dump,string.find,string.format,string.gmatch,string.gsub,string.len,string.lower,string.match,string.rep,string.reverse,string.sub,string.upper,table.concat,table.insert,table.maxn,table.remove,table.sort`.split(`,`)), r = t([`and`, `break`, `elseif`, `false`, `nil`, `not`, `or`, `return`, `true`, `function`, `end`, `if`, `then`, `else`, `do`, `while`, `repeat`, `until`, `for`, `in`, `local`]), i = t([`function`, `if`, `repeat`, `do`, `\\(`, `{`]), a = t([`end`, `until`, `\\)`, `}`]), o = e([`end`, `until`, `\\)`, `}`, `else`, `elseif`]);
function s(e2) {
  for (var t2 = 0; e2.eat(`=`); ) ++t2;
  return e2.eat(`[`), t2;
}
function c(e2, t2) {
  var n2 = e2.next();
  return n2 == `-` && e2.eat(`-`) ? e2.eat(`[`) && e2.eat(`[`) ? (t2.cur = l(s(e2), `comment`))(e2, t2) : (e2.skipToEnd(), `comment`) : n2 == `"` || n2 == `'` ? (t2.cur = u(n2))(e2, t2) : n2 == `[` && /[\[=]/.test(e2.peek()) ? (t2.cur = l(s(e2), `string`))(e2, t2) : /\d/.test(n2) ? (e2.eatWhile(/[\w.%]/), `number`) : /[\w_]/.test(n2) ? (e2.eatWhile(/[\w\\\-_.]/), `variable`) : null;
}
function l(e2, t2) {
  return function(n2, r2) {
    for (var i2 = null, a2; (a2 = n2.next()) != null; ) if (i2 == null) a2 == `]` && (i2 = 0);
    else if (a2 == `=`) ++i2;
    else if (a2 == `]` && i2 == e2) {
      r2.cur = c;
      break;
    } else i2 = null;
    return t2;
  };
}
function u(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2; (i2 = t2.next()) != null && !(i2 == e2 && !r2); ) r2 = !r2 && i2 == `\\`;
    return r2 || (n2.cur = c), `string`;
  };
}
const d = { name: `lua`, startState: function() {
  return { basecol: 0, indentDepth: 0, cur: c };
}, token: function(e2, t2) {
  if (e2.eatSpace()) return null;
  var o2 = t2.cur(e2, t2), s2 = e2.current();
  return o2 == `variable` && (r.test(s2) ? o2 = `keyword` : n.test(s2) && (o2 = `builtin`)), o2 != `comment` && o2 != `string` && (i.test(s2) ? ++t2.indentDepth : a.test(s2) && --t2.indentDepth), o2;
}, indent: function(e2, t2, n2) {
  var r2 = o.test(t2);
  return e2.basecol + n2.unit * (e2.indentDepth - (r2 ? 1 : 0));
}, languageData: { indentOnInput: /^\s*(?:end|until|else|\)|\})$/, commentTokens: { line: `--`, block: { open: `--[[`, close: `]]--` } } } };
export {
  d as lua
};
