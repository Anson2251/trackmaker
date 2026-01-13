var e = { PRE_SUBJECT: 0, WRITING_SUB_URI: 1, WRITING_BNODE_URI: 2, PRE_PRED: 3, WRITING_PRED_URI: 4, PRE_OBJ: 5, WRITING_OBJ_URI: 6, WRITING_OBJ_BNODE: 7, WRITING_OBJ_LITERAL: 8, WRITING_LIT_LANG: 9, WRITING_LIT_TYPE: 10, POST_OBJ: 11, ERROR: 12 };
function t(t2, n2) {
  var r = t2.location;
  t2.location = r == e.PRE_SUBJECT && n2 == `<` ? e.WRITING_SUB_URI : r == e.PRE_SUBJECT && n2 == `_` ? e.WRITING_BNODE_URI : r == e.PRE_PRED && n2 == `<` ? e.WRITING_PRED_URI : r == e.PRE_OBJ && n2 == `<` ? e.WRITING_OBJ_URI : r == e.PRE_OBJ && n2 == `_` ? e.WRITING_OBJ_BNODE : r == e.PRE_OBJ && n2 == `"` ? e.WRITING_OBJ_LITERAL : r == e.WRITING_SUB_URI && n2 == `>` || r == e.WRITING_BNODE_URI && n2 == ` ` ? e.PRE_PRED : r == e.WRITING_PRED_URI && n2 == `>` ? e.PRE_OBJ : r == e.WRITING_OBJ_URI && n2 == `>` || r == e.WRITING_OBJ_BNODE && n2 == ` ` || r == e.WRITING_OBJ_LITERAL && n2 == `"` || r == e.WRITING_LIT_LANG && n2 == ` ` || r == e.WRITING_LIT_TYPE && n2 == `>` ? e.POST_OBJ : r == e.WRITING_OBJ_LITERAL && n2 == `@` ? e.WRITING_LIT_LANG : r == e.WRITING_OBJ_LITERAL && n2 == `^` ? e.WRITING_LIT_TYPE : n2 == ` ` && (r == e.PRE_SUBJECT || r == e.PRE_PRED || r == e.PRE_OBJ || r == e.POST_OBJ) ? r : r == e.POST_OBJ && n2 == `.` ? e.PRE_SUBJECT : e.ERROR;
}
const n = { name: `ntriples`, startState: function() {
  return { location: e.PRE_SUBJECT, uris: [], anchors: [], bnodes: [], langs: [], types: [] };
}, token: function(e2, n2) {
  var r = e2.next();
  if (r == `<`) {
    t(n2, r);
    var i = ``;
    return e2.eatWhile(function(e3) {
      return e3 != `#` && e3 != `>` ? (i += e3, true) : false;
    }), n2.uris.push(i), e2.match(`#`, false) ? `variable` : (e2.next(), t(n2, `>`), `variable`);
  }
  if (r == `#`) {
    var a = ``;
    return e2.eatWhile(function(e3) {
      return e3 != `>` && e3 != ` ` ? (a += e3, true) : false;
    }), n2.anchors.push(a), `url`;
  }
  if (r == `>`) return t(n2, `>`), `variable`;
  if (r == `_`) {
    t(n2, r);
    var o = ``;
    return e2.eatWhile(function(e3) {
      return e3 == ` ` ? false : (o += e3, true);
    }), n2.bnodes.push(o), e2.next(), t(n2, ` `), `builtin`;
  }
  if (r == `"`) return t(n2, r), e2.eatWhile(function(e3) {
    return e3 != `"`;
  }), e2.next(), e2.peek() != `@` && e2.peek() != `^` && t(n2, `"`), `string`;
  if (r == `@`) {
    t(n2, `@`);
    var s = ``;
    return e2.eatWhile(function(e3) {
      return e3 == ` ` ? false : (s += e3, true);
    }), n2.langs.push(s), e2.next(), t(n2, ` `), `string.special`;
  }
  if (r == `^`) {
    e2.next(), t(n2, `^`);
    var c = ``;
    return e2.eatWhile(function(e3) {
      return e3 == `>` ? false : (c += e3, true);
    }), n2.types.push(c), e2.next(), t(n2, `>`), `variable`;
  }
  r == ` ` && t(n2, r), r == `.` && t(n2, r);
} };
export {
  n as ntriples
};
