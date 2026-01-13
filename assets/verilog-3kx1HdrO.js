function e(e2) {
  var t2 = e2.statementIndentUnit, n2 = e2.dontAlignCalls, r2 = e2.noIndentKeywords || [], i2 = e2.multiLineStrings, a2 = e2.hooks || {};
  function o2(e3) {
    for (var t3 = {}, n3 = e3.split(` `), r3 = 0; r3 < n3.length; ++r3) t3[n3[r3]] = true;
    return t3;
  }
  var s2 = o2(`accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor`), c2 = /[\+\-\*\/!~&|^%=?:]/, l2 = /[\[\]{}()]/, u = /\d[0-9_]*/, d = /\d*\s*'s?d\s*\d[0-9_]*/i, f = /\d*\s*'s?b\s*[xz01][xz01_]*/i, p = /\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i, m = /\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i, h = /(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i, g = /^((\w+)|[)}\]])/, _ = /[)}\]]/, v, y, b = o2(`case checker class clocking config function generate interface module package primitive program property specify sequence table task`), x = {};
  for (var S in b) x[S] = `end` + S;
  for (var C in x.begin = `end`, x.casex = `endcase`, x.casez = `endcase`, x.do = `while`, x.fork = `join;join_any;join_none`, x.covergroup = `endgroup`, r2) {
    var S = r2[C];
    x[S] && (x[S] = void 0);
  }
  var w = o2(`always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while`);
  function T(e3, t3) {
    var n3 = e3.peek(), r3;
    if (a2[n3] && (r3 = a2[n3](e3, t3)) != 0 || a2.tokenBase && (r3 = a2.tokenBase(e3, t3)) != 0) return r3;
    if (/[,;:\.]/.test(n3)) return v = e3.next(), null;
    if (l2.test(n3)) return v = e3.next(), `bracket`;
    if (n3 == "`") return e3.next(), e3.eatWhile(/[\w\$_]/) ? `def` : null;
    if (n3 == `$`) return e3.next(), e3.eatWhile(/[\w\$_]/) ? `meta` : null;
    if (n3 == `#`) return e3.next(), e3.eatWhile(/[\d_.]/), `def`;
    if (n3 == `"`) return e3.next(), t3.tokenize = E(n3), t3.tokenize(e3, t3);
    if (n3 == `/`) {
      if (e3.next(), e3.eat(`*`)) return t3.tokenize = D, D(e3, t3);
      if (e3.eat(`/`)) return e3.skipToEnd(), `comment`;
      e3.backUp(1);
    }
    if (e3.match(h) || e3.match(d) || e3.match(f) || e3.match(p) || e3.match(m) || e3.match(u) || e3.match(h)) return `number`;
    if (e3.eatWhile(c2)) return `meta`;
    if (e3.eatWhile(/[\w\$_]/)) {
      var i3 = e3.current();
      return s2[i3] ? (x[i3] && (v = `newblock`), w[i3] && (v = `newstatement`), y = i3, `keyword`) : `variable`;
    }
    return e3.next(), null;
  }
  function E(e3) {
    return function(t3, n3) {
      for (var r3 = false, a3, o3 = false; (a3 = t3.next()) != null; ) {
        if (a3 == e3 && !r3) {
          o3 = true;
          break;
        }
        r3 = !r3 && a3 == `\\`;
      }
      return (o3 || !(r3 || i2)) && (n3.tokenize = T), `string`;
    };
  }
  function D(e3, t3) {
    for (var n3 = false, r3; r3 = e3.next(); ) {
      if (r3 == `/` && n3) {
        t3.tokenize = T;
        break;
      }
      n3 = r3 == `*`;
    }
    return `comment`;
  }
  function O(e3, t3, n3, r3, i3) {
    this.indented = e3, this.column = t3, this.type = n3, this.align = r3, this.prev = i3;
  }
  function k(e3, t3, n3) {
    var r3 = e3.indented;
    return e3.context = new O(r3, t3, n3, null, e3.context);
  }
  function A(e3) {
    var t3 = e3.context.type;
    return (t3 == `)` || t3 == `]` || t3 == `}`) && (e3.indented = e3.context.indented), e3.context = e3.context.prev;
  }
  function j(e3, t3) {
    if (e3 == t3) return true;
    var n3 = t3.split(`;`);
    for (var r3 in n3) if (e3 == n3[r3]) return true;
    return false;
  }
  function M() {
    var e3 = [];
    for (var t3 in x) if (x[t3]) {
      var n3 = x[t3].split(`;`);
      for (var r3 in n3) e3.push(n3[r3]);
    }
    return RegExp(`[{}()\\[\\]]|(` + e3.join(`|`) + `)$`);
  }
  return { name: `verilog`, startState: function(e3) {
    var t3 = { tokenize: null, context: new O(-e3, 0, `top`, false), indented: 0, startOfLine: true };
    return a2.startState && a2.startState(t3), t3;
  }, token: function(e3, t3) {
    var n3 = t3.context;
    if (e3.sol() && (n3.align ?? (n3.align = false), t3.indented = e3.indentation(), t3.startOfLine = true), a2.token) {
      var r3 = a2.token(e3, t3);
      if (r3 !== void 0) return r3;
    }
    if (e3.eatSpace()) return null;
    v = null, y = null;
    var r3 = (t3.tokenize || T)(e3, t3);
    if (r3 == `comment` || r3 == `meta` || r3 == `variable`) return r3;
    if (n3.align ?? (n3.align = true), v == n3.type) A(t3);
    else if (v == `;` && n3.type == `statement` || n3.type && j(y, n3.type)) for (n3 = A(t3); n3 && n3.type == `statement`; ) n3 = A(t3);
    else if (v == `{`) k(t3, e3.column(), `}`);
    else if (v == `[`) k(t3, e3.column(), `]`);
    else if (v == `(`) k(t3, e3.column(), `)`);
    else if (n3 && n3.type == `endcase` && v == `:`) k(t3, e3.column(), `statement`);
    else if (v == `newstatement`) k(t3, e3.column(), `statement`);
    else if (v == `newblock` && !(y == `function` && n3 && (n3.type == `statement` || n3.type == `endgroup`)) && !(y == `task` && n3 && n3.type == `statement`)) {
      var i3 = x[y];
      k(t3, e3.column(), i3);
    }
    return t3.startOfLine = false, r3;
  }, indent: function(e3, r3, i3) {
    if (e3.tokenize != T && e3.tokenize != null) return null;
    if (a2.indent) {
      var o3 = a2.indent(e3);
      if (o3 >= 0) return o3;
    }
    var s3 = e3.context, c3 = r3 && r3.charAt(0);
    s3.type == `statement` && c3 == `}` && (s3 = s3.prev);
    var l3 = false, u2 = r3.match(g);
    return u2 && (l3 = j(u2[0], s3.type)), s3.type == `statement` ? s3.indented + (c3 == `{` ? 0 : t2 || i3.unit) : _.test(s3.type) && s3.align && !n2 ? s3.column + (l3 ? 0 : 1) : s3.type == `)` && !l3 ? s3.indented + (t2 || i3.unit) : s3.indented + (l3 ? 0 : i3.unit);
  }, languageData: { indentOnInput: M(), commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } } } };
}
const t = e({});
var n = { "|": `link`, ">": `property`, $: `variable`, $$: `variable`, "?$": `qualifier`, "?*": `qualifier`, "-": `contentSeparator`, "/": `property`, "/-": `property`, "@": `variableName.special`, "@-": `variableName.special`, "@++": `variableName.special`, "@+=": `variableName.special`, "@+=-": `variableName.special`, "@--": `variableName.special`, "@-=": `variableName.special`, "%+": `tag`, "%-": `tag`, "%": `tag`, ">>": `tag`, "<<": `tag`, "<>": `tag`, "#": `tag`, "^": `attribute`, "^^": `attribute`, "^!": `attribute`, "*": `variable`, "**": `variable`, "\\": `keyword`, '"': `comment` }, r = { "/": `beh-hier`, ">": `beh-hier`, "-": `phys-hier`, "|": `pipe`, "?": `when`, "@": `stage`, "\\": `keyword` }, i = 3, a = false, o = /^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/, s = /^[! ] */, c = /^\/[\/\*]/;
const l = e({ hooks: { electricInput: false, token: function(e2, t2) {
  var l2 = void 0, u;
  if (e2.sol() && !t2.tlvInBlockComment) {
    e2.peek() == `\\` && (l2 = `def`, e2.skipToEnd(), e2.string.match(/\\SV/) ? t2.tlvCodeActive = false : e2.string.match(/\\TLV/) && (t2.tlvCodeActive = true)), t2.tlvCodeActive && e2.pos == 0 && t2.indented == 0 && (u = e2.match(s, false)) && (t2.indented = u[0].length);
    var d = t2.indented, f = d / i;
    if (f <= t2.tlvIndentationStyle.length) {
      var p = e2.string.length == d, m = f * i;
      if (m < e2.string.length) {
        var h = e2.string.slice(m), g = h[0];
        r[g] && (u = h.match(o)) && n[u[1]] && (d += i, g == `\\` && m > 0 || (t2.tlvIndentationStyle[f] = r[g], a && (t2.statementComment = false), f++));
      }
      if (!p) for (; t2.tlvIndentationStyle.length > f; ) t2.tlvIndentationStyle.pop();
    }
    t2.tlvNextIndent = d;
  }
  if (t2.tlvCodeActive) {
    var _ = false;
    a && (_ = e2.peek() != ` ` && l2 === void 0 && !t2.tlvInBlockComment && e2.column() == t2.tlvIndentationStyle.length * i, _ && (t2.statementComment && (_ = false), t2.statementComment = e2.match(c, false)));
    var u;
    if (l2 === void 0) if (t2.tlvInBlockComment) e2.match(/^.*?\*\//) ? (t2.tlvInBlockComment = false, a && !e2.eol() && (t2.statementComment = false)) : e2.skipToEnd(), l2 = `comment`;
    else if ((u = e2.match(c)) && !t2.tlvInBlockComment) u[0] == `//` ? e2.skipToEnd() : t2.tlvInBlockComment = true, l2 = `comment`;
    else if (u = e2.match(o)) {
      var v = u[1], y = u[2];
      n.hasOwnProperty(v) && (y.length > 0 || e2.eol()) ? l2 = n[v] : e2.backUp(e2.current().length - 1);
    } else e2.match(/^\t+/) ? l2 = `invalid` : e2.match(/^[\[\]{}\(\);\:]+/) ? l2 = `meta` : (u = e2.match(/^[mM]4([\+_])?[\w\d_]*/)) ? l2 = u[1] == `+` ? `keyword.special` : `keyword` : e2.match(/^ +/) ? e2.eol() && (l2 = `error`) : e2.match(/^[\w\d_]+/) ? l2 = `number` : e2.next();
  } else e2.match(/^[mM]4([\w\d_]*)/) && (l2 = `keyword`);
  return l2;
}, indent: function(e2) {
  return e2.tlvCodeActive == 1 ? e2.tlvNextIndent : -1;
}, startState: function(e2) {
  e2.tlvIndentationStyle = [], e2.tlvCodeActive = true, e2.tlvNextIndent = -1, e2.tlvInBlockComment = false, a && (e2.statementComment = false);
} } });
export {
  l as tlv,
  t as verilog
};
