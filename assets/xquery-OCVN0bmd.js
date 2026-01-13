var e = (function() {
  function e2(e3) {
    return { type: e3, style: `keyword` };
  }
  for (var t2 = e2(`operator`), n2 = { type: `atom`, style: `atom` }, r2 = { type: `punctuation`, style: null }, i2 = { type: `axis_specifier`, style: `qualifier` }, a2 = { ",": r2 }, o2 = `after.all.allowing.ancestor.ancestor-or-self.any.array.as.ascending.at.attribute.base-uri.before.boundary-space.by.case.cast.castable.catch.child.collation.comment.construction.contains.content.context.copy.copy-namespaces.count.decimal-format.declare.default.delete.descendant.descendant-or-self.descending.diacritics.different.distance.document.document-node.element.else.empty.empty-sequence.encoding.end.entire.every.exactly.except.external.first.following.following-sibling.for.from.ftand.ftnot.ft-option.ftor.function.fuzzy.greatest.group.if.import.in.inherit.insensitive.insert.instance.intersect.into.invoke.is.item.language.last.lax.least.let.levels.lowercase.map.modify.module.most.namespace.next.no.node.nodes.no-inherit.no-preserve.not.occurs.of.only.option.order.ordered.ordering.paragraph.paragraphs.parent.phrase.preceding.preceding-sibling.preserve.previous.processing-instruction.relationship.rename.replace.return.revalidation.same.satisfies.schema.schema-attribute.schema-element.score.self.sensitive.sentence.sentences.sequence.skip.sliding.some.stable.start.stemming.stop.strict.strip.switch.text.then.thesaurus.times.to.transform.treat.try.tumbling.type.typeswitch.union.unordered.update.updating.uppercase.using.validate.value.variable.version.weight.when.where.wildcards.window.with.without.word.words.xquery`.split(`.`), s2 = 0, c2 = o2.length; s2 < c2; s2++) a2[o2[s2]] = e2(o2[s2]);
  for (var l2 = `xs:anyAtomicType.xs:anySimpleType.xs:anyType.xs:anyURI.xs:base64Binary.xs:boolean.xs:byte.xs:date.xs:dateTime.xs:dateTimeStamp.xs:dayTimeDuration.xs:decimal.xs:double.xs:duration.xs:ENTITIES.xs:ENTITY.xs:float.xs:gDay.xs:gMonth.xs:gMonthDay.xs:gYear.xs:gYearMonth.xs:hexBinary.xs:ID.xs:IDREF.xs:IDREFS.xs:int.xs:integer.xs:item.xs:java.xs:language.xs:long.xs:Name.xs:NCName.xs:negativeInteger.xs:NMTOKEN.xs:NMTOKENS.xs:nonNegativeInteger.xs:nonPositiveInteger.xs:normalizedString.xs:NOTATION.xs:numeric.xs:positiveInteger.xs:precisionDecimal.xs:QName.xs:short.xs:string.xs:time.xs:token.xs:unsignedByte.xs:unsignedInt.xs:unsignedLong.xs:unsignedShort.xs:untyped.xs:untypedAtomic.xs:yearMonthDuration`.split(`.`), s2 = 0, c2 = l2.length; s2 < c2; s2++) a2[l2[s2]] = n2;
  for (var u2 = [`eq`, `ne`, `lt`, `le`, `gt`, `ge`, `:=`, `=`, `>`, `>=`, `<`, `<=`, `.`, `|`, `?`, `and`, `or`, `div`, `idiv`, `mod`, `*`, `/`, `+`, `-`], s2 = 0, c2 = u2.length; s2 < c2; s2++) a2[u2[s2]] = t2;
  for (var d2 = [`self::`, `attribute::`, `child::`, `descendant::`, `descendant-or-self::`, `parent::`, `ancestor::`, `ancestor-or-self::`, `following::`, `preceding::`, `following-sibling::`, `preceding-sibling::`], s2 = 0, c2 = d2.length; s2 < c2; s2++) a2[d2[s2]] = i2;
  return a2;
})();
function t(e2, t2, n2) {
  return t2.tokenize = n2, n2(e2, t2);
}
function n(n2, i2) {
  var c2 = n2.next(), p2 = false, g2 = h(n2);
  if (c2 == `<`) {
    if (n2.match(`!--`, true)) return t(n2, i2, l);
    if (n2.match(`![CDATA`, false)) return i2.tokenize = u, `tag`;
    if (n2.match(`?`, false)) return t(n2, i2, d);
    var y2 = n2.eat(`/`);
    n2.eatSpace();
    for (var b = ``, x; x = n2.eat(/[^\s\u00a0=<>\"\'\/?]/); ) b += x;
    return t(n2, i2, s(b, y2));
  } else if (c2 == `{`) return _(i2, { type: `codeblock` }), null;
  else if (c2 == `}`) return v(i2), null;
  else if (f(i2)) return c2 == `>` ? `tag` : c2 == `/` && n2.eat(`>`) ? (v(i2), `tag`) : `variable`;
  else if (/\d/.test(c2)) return n2.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/), `atom`;
  else if (c2 === `(` && n2.eat(`:`)) return _(i2, { type: `comment` }), t(n2, i2, r);
  else if (!g2 && (c2 === `"` || c2 === `'`)) return a(n2, i2, c2);
  else if (c2 === `$`) return t(n2, i2, o);
  else if (c2 === `:` && n2.eat(`=`)) return `keyword`;
  else if (c2 === `(`) return _(i2, { type: `paren` }), null;
  else if (c2 === `)`) return v(i2), null;
  else if (c2 === `[`) return _(i2, { type: `bracket` }), null;
  else if (c2 === `]`) return v(i2), null;
  else {
    var S = e.propertyIsEnumerable(c2) && e[c2];
    if (g2 && c2 === `"`) for (; n2.next() !== `"`; ) ;
    if (g2 && c2 === `'`) for (; n2.next() !== `'`; ) ;
    S || n2.eatWhile(/[\w\$_-]/);
    var C = n2.eat(`:`);
    !n2.eat(`:`) && C && n2.eatWhile(/[\w\$_-]/), n2.match(/^[ \t]*\(/, false) && (p2 = true);
    var w = n2.current();
    return S = e.propertyIsEnumerable(w) && e[w], p2 && !S && (S = { type: `function_call`, style: `def` }), m(i2) ? (v(i2), `variable`) : ((w == `element` || w == `attribute` || S.type == `axis_specifier`) && _(i2, { type: `xmlconstructor` }), S ? S.style : `variable`);
  }
}
function r(e2, t2) {
  for (var n2 = false, r2 = false, i2 = 0, a2; a2 = e2.next(); ) {
    if (a2 == `)` && n2) if (i2 > 0) i2--;
    else {
      v(t2);
      break;
    }
    else a2 == `:` && r2 && i2++;
    n2 = a2 == `:`, r2 = a2 == `(`;
  }
  return `comment`;
}
function i(e2, t2) {
  return function(r2, i2) {
    for (var a2; a2 = r2.next(); ) if (a2 == e2) {
      v(i2), t2 && (i2.tokenize = t2);
      break;
    } else if (r2.match(`{`, false) && p(i2)) return _(i2, { type: `codeblock` }), i2.tokenize = n, `string`;
    return `string`;
  };
}
function a(e2, n2, r2, a2) {
  let o2 = i(r2, a2);
  return _(n2, { type: `string`, name: r2, tokenize: o2 }), t(e2, n2, o2);
}
function o(e2, t2) {
  var r2 = /[\w\$_-]/;
  if (e2.eat(`"`)) {
    for (; e2.next() !== `"`; ) ;
    e2.eat(`:`);
  } else e2.eatWhile(r2), e2.match(`:=`, false) || e2.eat(`:`);
  return e2.eatWhile(r2), t2.tokenize = n, `variable`;
}
function s(e2, t2) {
  return function(r2, i2) {
    if (r2.eatSpace(), t2 && r2.eat(`>`)) return v(i2), i2.tokenize = n, `tag`;
    if (r2.eat(`/`) || _(i2, { type: `tag`, name: e2, tokenize: n }), r2.eat(`>`)) i2.tokenize = n;
    else return i2.tokenize = c, `tag`;
    return `tag`;
  };
}
function c(e2, t2) {
  var r2 = e2.next();
  return r2 == `/` && e2.eat(`>`) ? (p(t2) && v(t2), f(t2) && v(t2), `tag`) : r2 == `>` ? (p(t2) && v(t2), `tag`) : r2 == `=` ? null : r2 == `"` || r2 == `'` ? a(e2, t2, r2, c) : (p(t2) || _(t2, { type: `attribute`, tokenize: c }), e2.eat(/[a-zA-Z_:]/), e2.eatWhile(/[-a-zA-Z0-9_:.]/), e2.eatSpace(), (e2.match(`>`, false) || e2.match(`/`, false)) && (v(t2), t2.tokenize = n), `attribute`);
}
function l(e2, t2) {
  for (var r2; r2 = e2.next(); ) if (r2 == `-` && e2.match(`->`, true)) return t2.tokenize = n, `comment`;
}
function u(e2, t2) {
  for (var r2; r2 = e2.next(); ) if (r2 == `]` && e2.match(`]`, true)) return t2.tokenize = n, `comment`;
}
function d(e2, t2) {
  for (var r2; r2 = e2.next(); ) if (r2 == `?` && e2.match(`>`, true)) return t2.tokenize = n, `processingInstruction`;
}
function f(e2) {
  return g(e2, `tag`);
}
function p(e2) {
  return g(e2, `attribute`);
}
function m(e2) {
  return g(e2, `xmlconstructor`);
}
function h(e2) {
  return e2.current() === `"` ? e2.match(/^[^\"]+\"\:/, false) : e2.current() === `'` ? e2.match(/^[^\"]+\'\:/, false) : false;
}
function g(e2, t2) {
  return e2.stack.length && e2.stack[e2.stack.length - 1].type == t2;
}
function _(e2, t2) {
  e2.stack.push(t2);
}
function v(e2) {
  e2.stack.pop(), e2.tokenize = e2.stack.length && e2.stack[e2.stack.length - 1].tokenize || n;
}
const y = { name: `xquery`, startState: function() {
  return { tokenize: n, cc: [], stack: [] };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : t2.tokenize(e2, t2);
}, languageData: { commentTokens: { block: { open: `(:`, close: `:)` } } } };
export {
  y as xQuery
};
