var e = [`-type`, `-spec`, `-export_type`, `-opaque`], t = [`after`, `begin`, `catch`, `case`, `cond`, `end`, `fun`, `if`, `let`, `of`, `query`, `receive`, `try`, `when`], n = /[\->,;]/, r = [`->`, `;`, `,`], i = [`and`, `andalso`, `band`, `bnot`, `bor`, `bsl`, `bsr`, `bxor`, `div`, `not`, `or`, `orelse`, `rem`, `xor`], a = /[\+\-\*\/<>=\|:!]/, o = [`=`, `+`, `-`, `*`, `/`, `>`, `>=`, `<`, `=<`, `=:=`, `==`, `=/=`, `/=`, `||`, `<-`, `!`], s = /[<\(\[\{]/, c = [`<<`, `(`, `[`, `{`], l = /[>\)\]\}]/, u = [`}`, `]`, `)`, `>>`], d = `is_atom.is_binary.is_bitstring.is_boolean.is_float.is_function.is_integer.is_list.is_number.is_pid.is_port.is_record.is_reference.is_tuple.atom.binary.bitstring.boolean.function.integer.list.number.pid.port.record.reference.tuple`.split(`.`), f = `abs.adler32.adler32_combine.alive.apply.atom_to_binary.atom_to_list.binary_to_atom.binary_to_existing_atom.binary_to_list.binary_to_term.bit_size.bitstring_to_list.byte_size.check_process_code.contact_binary.crc32.crc32_combine.date.decode_packet.delete_module.disconnect_node.element.erase.exit.float.float_to_list.garbage_collect.get.get_keys.group_leader.halt.hd.integer_to_list.internal_bif.iolist_size.iolist_to_binary.is_alive.is_atom.is_binary.is_bitstring.is_boolean.is_float.is_function.is_integer.is_list.is_number.is_pid.is_port.is_process_alive.is_record.is_reference.is_tuple.length.link.list_to_atom.list_to_binary.list_to_bitstring.list_to_existing_atom.list_to_float.list_to_integer.list_to_pid.list_to_tuple.load_module.make_ref.module_loaded.monitor_node.node.node_link.node_unlink.nodes.notalive.now.open_port.pid_to_list.port_close.port_command.port_connect.port_control.pre_loaded.process_flag.process_info.processes.purge_module.put.register.registered.round.self.setelement.size.spawn.spawn_link.spawn_monitor.spawn_opt.split_binary.statistics.term_to_binary.time.throw.tl.trunc.tuple_size.tuple_to_list.unlink.unregister.whereis`.split(`.`), p = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/, m = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
function h(h2, b2) {
  if (b2.in_string) return b2.in_string = !v(h2), C(b2, h2, `string`);
  if (b2.in_atom) return b2.in_atom = !y(h2), C(b2, h2, `atom`);
  if (h2.eatSpace()) return C(b2, h2, `whitespace`);
  if (!D(b2) && h2.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/)) return S(h2.current(), e) ? C(b2, h2, `type`) : C(b2, h2, `attribute`);
  var w2 = h2.next();
  if (w2 == `%`) return h2.skipToEnd(), C(b2, h2, `comment`);
  if (w2 == `:`) return C(b2, h2, `colon`);
  if (w2 == `?`) return h2.eatSpace(), h2.eatWhile(p), C(b2, h2, `macro`);
  if (w2 == `#`) return h2.eatSpace(), h2.eatWhile(p), C(b2, h2, `record`);
  if (w2 == `$`) return h2.next() == `\\` && !h2.match(m) ? C(b2, h2, `error`) : C(b2, h2, `number`);
  if (w2 == `.`) return C(b2, h2, `dot`);
  if (w2 == `'`) {
    if (!(b2.in_atom = !y(h2))) {
      if (h2.match(/\s*\/\s*[0-9]/, false)) return h2.match(/\s*\/\s*[0-9]/, true), C(b2, h2, `fun`);
      if (h2.match(/\s*\(/, false) || h2.match(/\s*:/, false)) return C(b2, h2, `function`);
    }
    return C(b2, h2, `atom`);
  }
  if (w2 == `"`) return b2.in_string = !v(h2), C(b2, h2, `string`);
  if (/[A-Z_Ø-ÞÀ-Ö]/.test(w2)) return h2.eatWhile(p), C(b2, h2, `variable`);
  if (/[a-z_ß-öø-ÿ]/.test(w2)) {
    if (h2.eatWhile(p), h2.match(/\s*\/\s*[0-9]/, false)) return h2.match(/\s*\/\s*[0-9]/, true), C(b2, h2, `fun`);
    var T2 = h2.current();
    return S(T2, t) ? C(b2, h2, `keyword`) : S(T2, i) ? C(b2, h2, `operator`) : h2.match(/\s*\(/, false) ? S(T2, f) && (D(b2).token != `:` || D(b2, 2).token == `erlang`) ? C(b2, h2, `builtin`) : S(T2, d) ? C(b2, h2, `guard`) : C(b2, h2, `function`) : x(h2) == `:` ? T2 == `erlang` ? C(b2, h2, `builtin`) : C(b2, h2, `function`) : S(T2, [`true`, `false`]) ? C(b2, h2, `boolean`) : C(b2, h2, `atom`);
  }
  var E2 = /[0-9]/;
  return E2.test(w2) ? (h2.eatWhile(E2), h2.eat(`#`) ? h2.eatWhile(/[0-9a-zA-Z]/) || h2.backUp(1) : h2.eat(`.`) && (h2.eatWhile(E2) ? h2.eat(/[eE]/) && (h2.eat(/[-+]/) ? h2.eatWhile(E2) || h2.backUp(2) : h2.eatWhile(E2) || h2.backUp(1)) : h2.backUp(1)), C(b2, h2, `number`)) : g(h2, s, c) ? C(b2, h2, `open_paren`) : g(h2, l, u) ? C(b2, h2, `close_paren`) : _(h2, n, r) ? C(b2, h2, `separator`) : _(h2, a, o) ? C(b2, h2, `operator`) : C(b2, h2, null);
}
function g(e2, t2, n2) {
  if (e2.current().length == 1 && t2.test(e2.current())) {
    for (e2.backUp(1); t2.test(e2.peek()); ) if (e2.next(), S(e2.current(), n2)) return true;
    e2.backUp(e2.current().length - 1);
  }
  return false;
}
function _(e2, t2, n2) {
  if (e2.current().length == 1 && t2.test(e2.current())) {
    for (; t2.test(e2.peek()); ) e2.next();
    for (; 0 < e2.current().length; ) if (S(e2.current(), n2)) return true;
    else e2.backUp(1);
    e2.next();
  }
  return false;
}
function v(e2) {
  return b(e2, `"`, `\\`);
}
function y(e2) {
  return b(e2, `'`, `\\`);
}
function b(e2, t2, n2) {
  for (; !e2.eol(); ) {
    var r2 = e2.next();
    if (r2 == t2) return true;
    r2 == n2 && e2.next();
  }
  return false;
}
function x(e2) {
  var t2 = e2.match(/^\s*([^\s%])/, false);
  return t2 ? t2[1] : ``;
}
function S(e2, t2) {
  return -1 < t2.indexOf(e2);
}
function C(e2, t2, n2) {
  switch (O(e2, T(n2, t2)), n2) {
    case `atom`:
      return `atom`;
    case `attribute`:
      return `attribute`;
    case `boolean`:
      return `atom`;
    case `builtin`:
      return `builtin`;
    case `close_paren`:
      return null;
    case `colon`:
      return null;
    case `comment`:
      return `comment`;
    case `dot`:
      return null;
    case `error`:
      return `error`;
    case `fun`:
      return `meta`;
    case `function`:
      return `tag`;
    case `guard`:
      return `property`;
    case `keyword`:
      return `keyword`;
    case `macro`:
      return `macroName`;
    case `number`:
      return `number`;
    case `open_paren`:
      return null;
    case `operator`:
      return `operator`;
    case `record`:
      return `bracket`;
    case `separator`:
      return null;
    case `string`:
      return `string`;
    case `type`:
      return `def`;
    case `variable`:
      return `variable`;
    default:
      return null;
  }
}
function w(e2, t2, n2, r2) {
  return { token: e2, column: t2, indent: n2, type: r2 };
}
function T(e2, t2) {
  return w(t2.current(), t2.column(), t2.indentation(), e2);
}
function E(e2) {
  return w(e2, 0, 0, e2);
}
function D(e2, t2) {
  var n2 = e2.tokenStack.length, r2 = t2 || 1;
  return n2 < r2 ? false : e2.tokenStack[n2 - r2];
}
function O(e2, t2) {
  t2.type == `comment` || t2.type == `whitespace` || (e2.tokenStack = k(e2.tokenStack, t2), e2.tokenStack = A(e2.tokenStack));
}
function k(e2, t2) {
  var n2 = e2.length - 1;
  return 0 < n2 && e2[n2].type === `record` && t2.type === `dot` ? e2.pop() : (0 < n2 && e2[n2].type === `group` && e2.pop(), e2.push(t2)), e2;
}
function A(e2) {
  if (!e2.length) return e2;
  var t2 = e2.length - 1;
  if (e2[t2].type === `dot`) return [];
  if (t2 > 1 && e2[t2].type === `fun` && e2[t2 - 1].token === `fun`) return e2.slice(0, t2 - 1);
  switch (e2[t2].token) {
    case `}`:
      return j(e2, { g: [`{`] });
    case `]`:
      return j(e2, { i: [`[`] });
    case `)`:
      return j(e2, { i: [`(`] });
    case `>>`:
      return j(e2, { i: [`<<`] });
    case `end`:
      return j(e2, { i: [`begin`, `case`, `fun`, `if`, `receive`, `try`] });
    case `,`:
      return j(e2, { e: [`begin`, `try`, `when`, `->`, `,`, `(`, `[`, `{`, `<<`] });
    case `->`:
      return j(e2, { r: [`when`], m: [`try`, `if`, `case`, `receive`] });
    case `;`:
      return j(e2, { E: [`case`, `fun`, `if`, `receive`, `try`, `when`] });
    case `catch`:
      return j(e2, { e: [`try`] });
    case `of`:
      return j(e2, { e: [`case`] });
    case `after`:
      return j(e2, { e: [`receive`, `try`] });
    default:
      return e2;
  }
}
function j(e2, t2) {
  for (var n2 in t2) for (var r2 = e2.length - 1, i2 = t2[n2], a2 = r2 - 1; -1 < a2; a2--) if (S(e2[a2].token, i2)) {
    var o2 = e2.slice(0, a2);
    switch (n2) {
      case `m`:
        return o2.concat(e2[a2]).concat(e2[r2]);
      case `r`:
        return o2.concat(e2[r2]);
      case `i`:
        return o2;
      case `g`:
        return o2.concat(E(`group`));
      case `E`:
        return o2.concat(e2[a2]);
      case `e`:
        return o2.concat(e2[a2]);
    }
  }
  return n2 == `E` ? [] : e2;
}
function M(e2, t2, n2) {
  var r2, i2 = N(t2), a2 = D(e2, 1), o2 = D(e2, 2);
  return e2.in_string || e2.in_atom ? null : o2 ? a2.token == `when` ? a2.column + n2.unit : i2 === `when` && o2.type === `function` ? o2.indent + n2.unit : i2 === `(` && a2.token === `fun` ? a2.column + 3 : i2 === `catch` && (r2 = I(e2, [`try`])) ? r2.column : S(i2, [`end`, `after`, `of`]) ? (r2 = I(e2, [`begin`, `case`, `fun`, `if`, `receive`, `try`]), r2 ? r2.column : null) : S(i2, u) ? (r2 = I(e2, c), r2 ? r2.column : null) : S(a2.token, [`,`, `|`, `||`]) || S(i2, [`,`, `|`, `||`]) ? (r2 = P(e2), r2 ? r2.column + r2.token.length : n2.unit) : a2.token == `->` ? S(o2.token, [`receive`, `case`, `if`, `try`]) ? o2.column + n2.unit + n2.unit : o2.column + n2.unit : S(a2.token, c) ? a2.column + a2.token.length : (r2 = F(e2), R(r2) ? r2.column + n2.unit : 0) : 0;
}
function N(e2) {
  var t2 = e2.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);
  return R(t2) && t2.index === 0 ? t2[0] : ``;
}
function P(e2) {
  var t2 = e2.tokenStack.slice(0, -1), n2 = L(t2, `type`, [`open_paren`]);
  return R(t2[n2]) ? t2[n2] : false;
}
function F(e2) {
  var t2 = e2.tokenStack, n2 = L(t2, `type`, [`open_paren`, `separator`, `keyword`]), r2 = L(t2, `type`, [`operator`]);
  return R(n2) && R(r2) && n2 < r2 ? t2[n2 + 1] : R(n2) ? t2[n2] : false;
}
function I(e2, t2) {
  var n2 = e2.tokenStack, r2 = L(n2, `token`, t2);
  return R(n2[r2]) ? n2[r2] : false;
}
function L(e2, t2, n2) {
  for (var r2 = e2.length - 1; -1 < r2; r2--) if (S(e2[r2][t2], n2)) return r2;
  return false;
}
function R(e2) {
  return e2 !== false && e2 != null;
}
const z = { name: `erlang`, startState() {
  return { tokenStack: [], in_string: false, in_atom: false };
}, token: h, indent: M, languageData: { commentTokens: { line: `%` } } };
export {
  z as erlang
};
