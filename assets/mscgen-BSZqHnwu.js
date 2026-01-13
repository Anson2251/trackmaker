function e(e2) {
  return { name: `mscgen`, startState: o, copyState: s, token: c(e2), languageData: { commentTokens: { line: `#`, block: { open: `/*`, close: `*/` } } } };
}
const t = e({ keywords: [`msc`], options: [`hscale`, `width`, `arcgradient`, `wordwraparcs`], constants: [`true`, `false`, `on`, `off`], attributes: [`label`, `idurl`, `id`, `url`, `linecolor`, `linecolour`, `textcolor`, `textcolour`, `textbgcolor`, `textbgcolour`, `arclinecolor`, `arclinecolour`, `arctextcolor`, `arctextcolour`, `arctextbgcolor`, `arctextbgcolour`, `arcskip`], brackets: [`\\{`, `\\}`], arcsWords: [`note`, `abox`, `rbox`, `box`], arcsOthers: [`\\|\\|\\|`, `\\.\\.\\.`, `---`, `--`, `<->`, `==`, `<<=>>`, `<=>`, `\\.\\.`, `<<>>`, `::`, `<:>`, `->`, `=>>`, `=>`, `>>`, `:>`, `<-`, `<<=`, `<=`, `<<`, `<:`, `x-`, `-x`], singlecomment: [`//`, `#`], operators: [`=`] }), n = e({ keywords: null, options: [`hscale`, `width`, `arcgradient`, `wordwraparcs`, `wordwrapentities`, `watermark`], constants: [`true`, `false`, `on`, `off`, `auto`], attributes: null, brackets: [`\\{`, `\\}`], arcsWords: [`note`, `abox`, `rbox`, `box`, `alt`, `else`, `opt`, `break`, `par`, `seq`, `strict`, `neg`, `critical`, `ignore`, `consider`, `assert`, `loop`, `ref`, `exc`], arcsOthers: [`\\|\\|\\|`, `\\.\\.\\.`, `---`, `--`, `<->`, `==`, `<<=>>`, `<=>`, `\\.\\.`, `<<>>`, `::`, `<:>`, `->`, `=>>`, `=>`, `>>`, `:>`, `<-`, `<<=`, `<=`, `<<`, `<:`, `x-`, `-x`], singlecomment: [`//`, `#`], operators: [`=`] }), r = e({ keywords: [`msc`, `xu`], options: [`hscale`, `width`, `arcgradient`, `wordwraparcs`, `wordwrapentities`, `watermark`], constants: [`true`, `false`, `on`, `off`, `auto`], attributes: [`label`, `idurl`, `id`, `url`, `linecolor`, `linecolour`, `textcolor`, `textcolour`, `textbgcolor`, `textbgcolour`, `arclinecolor`, `arclinecolour`, `arctextcolor`, `arctextcolour`, `arctextbgcolor`, `arctextbgcolour`, `arcskip`, `title`, `deactivate`, `activate`, `activation`], brackets: [`\\{`, `\\}`], arcsWords: [`note`, `abox`, `rbox`, `box`, `alt`, `else`, `opt`, `break`, `par`, `seq`, `strict`, `neg`, `critical`, `ignore`, `consider`, `assert`, `loop`, `ref`, `exc`], arcsOthers: [`\\|\\|\\|`, `\\.\\.\\.`, `---`, `--`, `<->`, `==`, `<<=>>`, `<=>`, `\\.\\.`, `<<>>`, `::`, `<:>`, `->`, `=>>`, `=>`, `>>`, `:>`, `<-`, `<<=`, `<=`, `<<`, `<:`, `x-`, `-x`], singlecomment: [`//`, `#`], operators: [`=`] });
function i(e2) {
  return RegExp(`^\\b(` + e2.join(`|`) + `)\\b`, `i`);
}
function a(e2) {
  return RegExp(`^(?:` + e2.join(`|`) + `)`, `i`);
}
function o() {
  return { inComment: false, inString: false, inAttributeList: false, inScript: false };
}
function s(e2) {
  return { inComment: e2.inComment, inString: e2.inString, inAttributeList: e2.inAttributeList, inScript: e2.inScript };
}
function c(e2) {
  return function(t2, n2) {
    if (t2.match(a(e2.brackets), true, true)) return `bracket`;
    if (!n2.inComment) {
      if (t2.match(/\/\*[^\*\/]*/, true, true)) return n2.inComment = true, `comment`;
      if (t2.match(a(e2.singlecomment), true, true)) return t2.skipToEnd(), `comment`;
    }
    if (n2.inComment) return t2.match(/[^\*\/]*\*\//, true, true) ? n2.inComment = false : t2.skipToEnd(), `comment`;
    if (!n2.inString && t2.match(/\"(\\\"|[^\"])*/, true, true)) return n2.inString = true, `string`;
    if (n2.inString) return t2.match(/[^\"]*\"/, true, true) ? n2.inString = false : t2.skipToEnd(), `string`;
    if (e2.keywords && t2.match(i(e2.keywords), true, true) || t2.match(i(e2.options), true, true) || t2.match(i(e2.arcsWords), true, true) || t2.match(a(e2.arcsOthers), true, true)) return `keyword`;
    if (e2.operators && t2.match(a(e2.operators), true, true)) return `operator`;
    if (e2.constants && t2.match(a(e2.constants), true, true)) return `variable`;
    if (!e2.inAttributeList && e2.attributes && t2.match(`[`, true, true)) return e2.inAttributeList = true, `bracket`;
    if (e2.inAttributeList) {
      if (e2.attributes !== null && t2.match(i(e2.attributes), true, true)) return `attribute`;
      if (t2.match(`]`, true, true)) return e2.inAttributeList = false, `bracket`;
    }
    return t2.next(), null;
  };
}
export {
  t as mscgen,
  n as msgenny,
  r as xu
};
