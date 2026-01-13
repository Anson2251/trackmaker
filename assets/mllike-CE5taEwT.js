function e(e2) {
  var t2 = { as: `keyword`, do: `keyword`, else: `keyword`, end: `keyword`, exception: `keyword`, fun: `keyword`, functor: `keyword`, if: `keyword`, in: `keyword`, include: `keyword`, let: `keyword`, of: `keyword`, open: `keyword`, rec: `keyword`, struct: `keyword`, then: `keyword`, type: `keyword`, val: `keyword`, while: `keyword`, with: `keyword` }, n2 = e2.extraWords || {};
  for (var r2 in n2) n2.hasOwnProperty(r2) && (t2[r2] = e2.extraWords[r2]);
  var i = [];
  for (var a in t2) i.push(a);
  function o(n3, r3) {
    var i2 = n3.next();
    if (i2 === `"`) return r3.tokenize = s, r3.tokenize(n3, r3);
    if (i2 === `{` && n3.eat(`|`)) return r3.longString = true, r3.tokenize = l, r3.tokenize(n3, r3);
    if (i2 === `(` && n3.match(/^\*(?!\))/)) return r3.commentLevel++, r3.tokenize = c, r3.tokenize(n3, r3);
    if (i2 === `~` || i2 === `?`) return n3.eatWhile(/\w/), `variableName.special`;
    if (i2 === "`") return n3.eatWhile(/\w/), `quote`;
    if (i2 === `/` && e2.slashComments && n3.eat(`/`)) return n3.skipToEnd(), `comment`;
    if (/\d/.test(i2)) return i2 === `0` && n3.eat(/[bB]/) && n3.eatWhile(/[01]/), i2 === `0` && n3.eat(/[xX]/) && n3.eatWhile(/[0-9a-fA-F]/), i2 === `0` && n3.eat(/[oO]/) ? n3.eatWhile(/[0-7]/) : (n3.eatWhile(/[\d_]/), n3.eat(`.`) && n3.eatWhile(/[\d]/), n3.eat(/[eE]/) && n3.eatWhile(/[\d\-+]/)), `number`;
    if (/[+\-*&%=<>!?|@\.~:]/.test(i2)) return `operator`;
    if (/[\w\xa1-\uffff]/.test(i2)) {
      n3.eatWhile(/[\w\xa1-\uffff]/);
      var a2 = n3.current();
      return t2.hasOwnProperty(a2) ? t2[a2] : `variable`;
    }
    return null;
  }
  function s(e3, t3) {
    for (var n3, r3 = false, i2 = false; (n3 = e3.next()) != null; ) {
      if (n3 === `"` && !i2) {
        r3 = true;
        break;
      }
      i2 = !i2 && n3 === `\\`;
    }
    return r3 && !i2 && (t3.tokenize = o), `string`;
  }
  function c(e3, t3) {
    for (var n3, r3; t3.commentLevel > 0 && (r3 = e3.next()) != null; ) n3 === `(` && r3 === `*` && t3.commentLevel++, n3 === `*` && r3 === `)` && t3.commentLevel--, n3 = r3;
    return t3.commentLevel <= 0 && (t3.tokenize = o), `comment`;
  }
  function l(e3, t3) {
    for (var n3, r3; t3.longString && (r3 = e3.next()) != null; ) n3 === `|` && r3 === `}` && (t3.longString = false), n3 = r3;
    return t3.longString || (t3.tokenize = o), `string`;
  }
  return { startState: function() {
    return { tokenize: o, commentLevel: 0, longString: false };
  }, token: function(e3, t3) {
    return e3.eatSpace() ? null : t3.tokenize(e3, t3);
  }, languageData: { autocomplete: i, commentTokens: { line: e2.slashComments ? `//` : void 0, block: { open: `(*`, close: `*)` } } } };
}
const t = e({ name: `ocaml`, extraWords: { and: `keyword`, assert: `keyword`, begin: `keyword`, class: `keyword`, constraint: `keyword`, done: `keyword`, downto: `keyword`, external: `keyword`, function: `keyword`, initializer: `keyword`, lazy: `keyword`, match: `keyword`, method: `keyword`, module: `keyword`, mutable: `keyword`, new: `keyword`, nonrec: `keyword`, object: `keyword`, private: `keyword`, sig: `keyword`, to: `keyword`, try: `keyword`, value: `keyword`, virtual: `keyword`, when: `keyword`, raise: `builtin`, failwith: `builtin`, true: `builtin`, false: `builtin`, asr: `builtin`, land: `builtin`, lor: `builtin`, lsl: `builtin`, lsr: `builtin`, lxor: `builtin`, mod: `builtin`, or: `builtin`, raise_notrace: `builtin`, trace: `builtin`, exit: `builtin`, print_string: `builtin`, print_endline: `builtin`, int: `type`, float: `type`, bool: `type`, char: `type`, string: `type`, unit: `type`, List: `builtin` } }), n = e({ name: `fsharp`, extraWords: { abstract: `keyword`, assert: `keyword`, base: `keyword`, begin: `keyword`, class: `keyword`, default: `keyword`, delegate: `keyword`, "do!": `keyword`, done: `keyword`, downcast: `keyword`, downto: `keyword`, elif: `keyword`, extern: `keyword`, finally: `keyword`, for: `keyword`, function: `keyword`, global: `keyword`, inherit: `keyword`, inline: `keyword`, interface: `keyword`, internal: `keyword`, lazy: `keyword`, "let!": `keyword`, match: `keyword`, member: `keyword`, module: `keyword`, mutable: `keyword`, namespace: `keyword`, new: `keyword`, null: `keyword`, override: `keyword`, private: `keyword`, public: `keyword`, "return!": `keyword`, return: `keyword`, select: `keyword`, static: `keyword`, to: `keyword`, try: `keyword`, upcast: `keyword`, "use!": `keyword`, use: `keyword`, void: `keyword`, when: `keyword`, "yield!": `keyword`, yield: `keyword`, atomic: `keyword`, break: `keyword`, checked: `keyword`, component: `keyword`, const: `keyword`, constraint: `keyword`, constructor: `keyword`, continue: `keyword`, eager: `keyword`, event: `keyword`, external: `keyword`, fixed: `keyword`, method: `keyword`, mixin: `keyword`, object: `keyword`, parallel: `keyword`, process: `keyword`, protected: `keyword`, pure: `keyword`, sealed: `keyword`, tailcall: `keyword`, trait: `keyword`, virtual: `keyword`, volatile: `keyword`, List: `builtin`, Seq: `builtin`, Map: `builtin`, Set: `builtin`, Option: `builtin`, int: `builtin`, string: `builtin`, not: `builtin`, true: `builtin`, false: `builtin`, raise: `builtin`, failwith: `builtin` }, slashComments: true }), r = e({ name: `sml`, extraWords: { abstype: `keyword`, and: `keyword`, andalso: `keyword`, case: `keyword`, datatype: `keyword`, fn: `keyword`, handle: `keyword`, infix: `keyword`, infixr: `keyword`, local: `keyword`, nonfix: `keyword`, op: `keyword`, orelse: `keyword`, raise: `keyword`, withtype: `keyword`, eqtype: `keyword`, sharing: `keyword`, sig: `keyword`, signature: `keyword`, structure: `keyword`, where: `keyword`, true: `keyword`, false: `keyword`, int: `builtin`, real: `builtin`, string: `builtin`, char: `builtin`, bool: `builtin` }, slashComments: true });
export {
  n as fSharp,
  t as oCaml,
  r as sml
};
