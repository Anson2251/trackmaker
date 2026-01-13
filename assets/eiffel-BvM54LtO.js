function e(e2) {
  for (var t2 = {}, n2 = 0, r2 = e2.length; n2 < r2; ++n2) t2[e2[n2]] = true;
  return t2;
}
var t = e(`note.across.when.variant.until.unique.undefine.then.strip.select.retry.rescue.require.rename.reference.redefine.prefix.once.old.obsolete.loop.local.like.is.inspect.infix.include.if.frozen.from.external.export.ensure.end.elseif.else.do.creation.create.check.alias.agent.separate.invariant.inherit.indexing.feature.expanded.deferred.class.Void.True.Result.Precursor.False.Current.create.attached.detachable.as.and.implies.not.or`.split(`.`)), n = e([`:=`, `and then`, `and`, `or`, `<<`, `>>`]);
function r(e2, t2, n2) {
  return n2.tokenize.push(e2), e2(t2, n2);
}
function i(e2, t2) {
  if (e2.eatSpace()) return null;
  var n2 = e2.next();
  return n2 == `"` || n2 == `'` ? r(a(n2, `string`), e2, t2) : n2 == `-` && e2.eat(`-`) ? (e2.skipToEnd(), `comment`) : n2 == `:` && e2.eat(`=`) ? `operator` : /[0-9]/.test(n2) ? (e2.eatWhile(/[xXbBCc0-9\.]/), e2.eat(/[\?\!]/), `variable`) : /[a-zA-Z_0-9]/.test(n2) ? (e2.eatWhile(/[a-zA-Z_0-9]/), e2.eat(/[\?\!]/), `variable`) : /[=+\-\/*^%<>~]/.test(n2) ? (e2.eatWhile(/[=+\-\/*^%<>~]/), `operator`) : null;
}
function a(e2, t2, n2) {
  return function(r2, i2) {
    for (var a2 = false, o2; (o2 = r2.next()) != null; ) {
      if (o2 == e2 && (n2 || !a2)) {
        i2.tokenize.pop();
        break;
      }
      a2 = !a2 && o2 == `%`;
    }
    return t2;
  };
}
const o = { name: `eiffel`, startState: function() {
  return { tokenize: [i] };
}, token: function(e2, r2) {
  var i2 = r2.tokenize[r2.tokenize.length - 1](e2, r2);
  if (i2 == `variable`) {
    var a2 = e2.current();
    i2 = t.propertyIsEnumerable(e2.current()) ? `keyword` : n.propertyIsEnumerable(e2.current()) ? `operator` : /^[A-Z][A-Z_0-9]*$/g.test(a2) ? `tag` : /^0[bB][0-1]+$/g.test(a2) || /^0[cC][0-7]+$/g.test(a2) || /^0[xX][a-fA-F0-9]+$/g.test(a2) || /^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(a2) || /^[0-9]+$/g.test(a2) ? `number` : `variable`;
  }
  return i2;
}, languageData: { commentTokens: { line: `--` } } };
export {
  o as eiffel
};
