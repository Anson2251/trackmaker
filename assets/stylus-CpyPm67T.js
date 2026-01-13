var e = `a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.bgsound.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.nobr.noframes.noscript.object.ol.optgroup.option.output.p.param.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.track.u.ul.var.video`.split(`.`), t = [`domain`, `regexp`, `url-prefix`, `url`], n = [`all`, `aural`, `braille`, `handheld`, `print`, `projection`, `screen`, `tty`, `tv`, `embossed`], r = `width.min-width.max-width.height.min-height.max-height.device-width.min-device-width.max-device-width.device-height.min-device-height.max-device-height.aspect-ratio.min-aspect-ratio.max-aspect-ratio.device-aspect-ratio.min-device-aspect-ratio.max-device-aspect-ratio.color.min-color.max-color.color-index.min-color-index.max-color-index.monochrome.min-monochrome.max-monochrome.resolution.min-resolution.max-resolution.scan.grid.dynamic-range.video-dynamic-range`.split(`.`), i = `align-content.align-items.align-self.alignment-adjust.alignment-baseline.anchor-point.animation.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-timing-function.appearance.azimuth.backface-visibility.background.background-attachment.background-clip.background-color.background-image.background-origin.background-position.background-repeat.background-size.baseline-shift.binding.bleed.bookmark-label.bookmark-level.bookmark-state.bookmark-target.border.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-decoration-break.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.clear.clip.color.color-profile.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.column-span.column-width.columns.content.counter-increment.counter-reset.crop.cue.cue-after.cue-before.cursor.direction.display.dominant-baseline.drop-initial-after-adjust.drop-initial-after-align.drop-initial-before-adjust.drop-initial-before-align.drop-initial-size.drop-initial-value.elevation.empty-cells.fit.fit-position.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.float-offset.flow-from.flow-into.font.font-feature-settings.font-family.font-kerning.font-language-override.font-size.font-size-adjust.font-stretch.font-style.font-synthesis.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-ligatures.font-variant-numeric.font-variant-position.font-weight.grid.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-position.grid-auto-rows.grid-column.grid-column-end.grid-column-start.grid-row.grid-row-end.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.hanging-punctuation.height.hyphens.icon.image-orientation.image-rendering.image-resolution.inline-box-align.justify-content.left.letter-spacing.line-break.line-height.line-stacking.line-stacking-ruby.line-stacking-shift.line-stacking-strategy.list-style.list-style-image.list-style-position.list-style-type.margin.margin-bottom.margin-left.margin-right.margin-top.marker-offset.marks.marquee-direction.marquee-loop.marquee-play-count.marquee-speed.marquee-style.max-height.max-width.min-height.min-width.move-to.nav-down.nav-index.nav-left.nav-right.nav-up.object-fit.object-position.opacity.order.orphans.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-style.overflow-wrap.overflow-x.overflow-y.padding.padding-bottom.padding-left.padding-right.padding-top.page.page-break-after.page-break-before.page-break-inside.page-policy.pause.pause-after.pause-before.perspective.perspective-origin.pitch.pitch-range.play-during.position.presentation-level.punctuation-trim.quotes.region-break-after.region-break-before.region-break-inside.region-fragment.rendering-intent.resize.rest.rest-after.rest-before.richness.right.rotation.rotation-point.ruby-align.ruby-overhang.ruby-position.ruby-span.shape-image-threshold.shape-inside.shape-margin.shape-outside.size.speak.speak-as.speak-header.speak-numeral.speak-punctuation.speech-rate.stress.string-set.tab-size.table-layout.target.target-name.target-new.target-position.text-align.text-align-last.text-decoration.text-decoration-color.text-decoration-line.text-decoration-skip.text-decoration-style.text-emphasis.text-emphasis-color.text-emphasis-position.text-emphasis-style.text-height.text-indent.text-justify.text-outline.text-overflow.text-shadow.text-size-adjust.text-space-collapse.text-transform.text-underline-position.text-wrap.top.transform.transform-origin.transform-style.transition.transition-delay.transition-duration.transition-property.transition-timing-function.unicode-bidi.vertical-align.visibility.voice-balance.voice-duration.voice-family.voice-pitch.voice-range.voice-rate.voice-stress.voice-volume.volume.white-space.widows.width.will-change.word-break.word-spacing.word-wrap.z-index.clip-path.clip-rule.mask.enable-background.filter.flood-color.flood-opacity.lighting-color.stop-color.stop-opacity.pointer-events.color-interpolation.color-interpolation-filters.color-rendering.fill.fill-opacity.fill-rule.image-rendering.marker.marker-end.marker-mid.marker-start.shape-rendering.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.text-rendering.baseline-shift.dominant-baseline.glyph-orientation-horizontal.glyph-orientation-vertical.text-anchor.writing-mode.font-smoothing.osx-font-smoothing`.split(`.`), a = [`scrollbar-arrow-color`, `scrollbar-base-color`, `scrollbar-dark-shadow-color`, `scrollbar-face-color`, `scrollbar-highlight-color`, `scrollbar-shadow-color`, `scrollbar-3d-light-color`, `scrollbar-track-color`, `shape-inside`, `searchfield-cancel-button`, `searchfield-decoration`, `searchfield-results-button`, `searchfield-results-decoration`, `zoom`], o = [`font-family`, `src`, `unicode-range`, `font-variant`, `font-feature-settings`, `font-stretch`, `font-weight`, `font-style`], s = `aliceblue.antiquewhite.aqua.aquamarine.azure.beige.bisque.black.blanchedalmond.blue.blueviolet.brown.burlywood.cadetblue.chartreuse.chocolate.coral.cornflowerblue.cornsilk.crimson.cyan.darkblue.darkcyan.darkgoldenrod.darkgray.darkgreen.darkkhaki.darkmagenta.darkolivegreen.darkorange.darkorchid.darkred.darksalmon.darkseagreen.darkslateblue.darkslategray.darkturquoise.darkviolet.deeppink.deepskyblue.dimgray.dodgerblue.firebrick.floralwhite.forestgreen.fuchsia.gainsboro.ghostwhite.gold.goldenrod.gray.grey.green.greenyellow.honeydew.hotpink.indianred.indigo.ivory.khaki.lavender.lavenderblush.lawngreen.lemonchiffon.lightblue.lightcoral.lightcyan.lightgoldenrodyellow.lightgray.lightgreen.lightpink.lightsalmon.lightseagreen.lightskyblue.lightslategray.lightsteelblue.lightyellow.lime.limegreen.linen.magenta.maroon.mediumaquamarine.mediumblue.mediumorchid.mediumpurple.mediumseagreen.mediumslateblue.mediumspringgreen.mediumturquoise.mediumvioletred.midnightblue.mintcream.mistyrose.moccasin.navajowhite.navy.oldlace.olive.olivedrab.orange.orangered.orchid.palegoldenrod.palegreen.paleturquoise.palevioletred.papayawhip.peachpuff.peru.pink.plum.powderblue.purple.rebeccapurple.red.rosybrown.royalblue.saddlebrown.salmon.sandybrown.seagreen.seashell.sienna.silver.skyblue.slateblue.slategray.snow.springgreen.steelblue.tan.teal.thistle.tomato.turquoise.violet.wheat.white.whitesmoke.yellow.yellowgreen`.split(`.`), c = `above.absolute.activeborder.additive.activecaption.afar.after-white-space.ahead.alias.all.all-scroll.alphabetic.alternate.always.amharic.amharic-abegede.antialiased.appworkspace.arabic-indic.armenian.asterisks.attr.auto.avoid.avoid-column.avoid-page.avoid-region.background.backwards.baseline.below.bidi-override.binary.bengali.blink.block.block-axis.bold.bolder.border.border-box.both.bottom.break.break-all.break-word.bullets.button.buttonface.buttonhighlight.buttonshadow.buttontext.calc.cambodian.capitalize.caps-lock-indicator.caption.captiontext.caret.cell.center.checkbox.circle.cjk-decimal.cjk-earthly-branch.cjk-heavenly-stem.cjk-ideographic.clear.clip.close-quote.col-resize.collapse.column.compact.condensed.conic-gradient.contain.content.contents.content-box.context-menu.continuous.copy.counter.counters.cover.crop.cross.crosshair.currentcolor.cursive.cyclic.dashed.decimal.decimal-leading-zero.default.default-button.destination-atop.destination-in.destination-out.destination-over.devanagari.disc.discard.disclosure-closed.disclosure-open.document.dot-dash.dot-dot-dash.dotted.double.down.e-resize.ease.ease-in.ease-in-out.ease-out.element.ellipse.ellipsis.embed.end.ethiopic.ethiopic-abegede.ethiopic-abegede-am-et.ethiopic-abegede-gez.ethiopic-abegede-ti-er.ethiopic-abegede-ti-et.ethiopic-halehame-aa-er.ethiopic-halehame-aa-et.ethiopic-halehame-am-et.ethiopic-halehame-gez.ethiopic-halehame-om-et.ethiopic-halehame-sid-et.ethiopic-halehame-so-et.ethiopic-halehame-ti-er.ethiopic-halehame-ti-et.ethiopic-halehame-tig.ethiopic-numeric.ew-resize.expanded.extends.extra-condensed.extra-expanded.fantasy.fast.fill.fixed.flat.flex.footnotes.forwards.from.geometricPrecision.georgian.graytext.groove.gujarati.gurmukhi.hand.hangul.hangul-consonant.hebrew.help.hidden.hide.high.higher.highlight.highlighttext.hiragana.hiragana-iroha.horizontal.hsl.hsla.icon.ignore.inactiveborder.inactivecaption.inactivecaptiontext.infinite.infobackground.infotext.inherit.initial.inline.inline-axis.inline-block.inline-flex.inline-table.inset.inside.intrinsic.invert.italic.japanese-formal.japanese-informal.justify.kannada.katakana.katakana-iroha.keep-all.khmer.korean-hangul-formal.korean-hanja-formal.korean-hanja-informal.landscape.lao.large.larger.left.level.lighter.line-through.linear.linear-gradient.lines.list-item.listbox.listitem.local.logical.loud.lower.lower-alpha.lower-armenian.lower-greek.lower-hexadecimal.lower-latin.lower-norwegian.lower-roman.lowercase.ltr.malayalam.match.matrix.matrix3d.media-play-button.media-slider.media-sliderthumb.media-volume-slider.media-volume-sliderthumb.medium.menu.menulist.menulist-button.menutext.message-box.middle.min-intrinsic.mix.mongolian.monospace.move.multiple.myanmar.n-resize.narrower.ne-resize.nesw-resize.no-close-quote.no-drop.no-open-quote.no-repeat.none.normal.not-allowed.nowrap.ns-resize.numbers.numeric.nw-resize.nwse-resize.oblique.octal.open-quote.optimizeLegibility.optimizeSpeed.oriya.oromo.outset.outside.outside-shape.overlay.overline.padding.padding-box.painted.page.paused.persian.perspective.plus-darker.plus-lighter.pointer.polygon.portrait.pre.pre-line.pre-wrap.preserve-3d.progress.push-button.radial-gradient.radio.read-only.read-write.read-write-plaintext-only.rectangle.region.relative.repeat.repeating-linear-gradient.repeating-radial-gradient.repeating-conic-gradient.repeat-x.repeat-y.reset.reverse.rgb.rgba.ridge.right.rotate.rotate3d.rotateX.rotateY.rotateZ.round.row-resize.rtl.run-in.running.s-resize.sans-serif.scale.scale3d.scaleX.scaleY.scaleZ.scroll.scrollbar.scroll-position.se-resize.searchfield.searchfield-cancel-button.searchfield-decoration.searchfield-results-button.searchfield-results-decoration.semi-condensed.semi-expanded.separate.serif.show.sidama.simp-chinese-formal.simp-chinese-informal.single.skew.skewX.skewY.skip-white-space.slide.slider-horizontal.slider-vertical.sliderthumb-horizontal.sliderthumb-vertical.slow.small.small-caps.small-caption.smaller.solid.somali.source-atop.source-in.source-out.source-over.space.spell-out.square.square-button.standard.start.static.status-bar.stretch.stroke.sub.subpixel-antialiased.super.sw-resize.symbolic.symbols.table.table-caption.table-cell.table-column.table-column-group.table-footer-group.table-header-group.table-row.table-row-group.tamil.telugu.text.text-bottom.text-top.textarea.textfield.thai.thick.thin.threeddarkshadow.threedface.threedhighlight.threedlightshadow.threedshadow.tibetan.tigre.tigrinya-er.tigrinya-er-abegede.tigrinya-et.tigrinya-et-abegede.to.top.trad-chinese-formal.trad-chinese-informal.translate.translate3d.translateX.translateY.translateZ.transparent.ultra-condensed.ultra-expanded.underline.up.upper-alpha.upper-armenian.upper-greek.upper-hexadecimal.upper-latin.upper-norwegian.upper-roman.uppercase.urdu.url.var.vertical.vertical-text.visible.visibleFill.visiblePainted.visibleStroke.visual.w-resize.wait.wave.wider.window.windowframe.windowtext.words.x-large.x-small.xor.xx-large.xx-small.bicubic.optimizespeed.grayscale.row.row-reverse.wrap.wrap-reverse.column-reverse.flex-start.flex-end.space-between.space-around.unset`.split(`.`), l = [`in`, `and`, `or`, `not`, `is not`, `is a`, `is`, `isnt`, `defined`, `if unless`], u = [`for`, `if`, `else`, `unless`, `from`, `to`], d = [`null`, `true`, `false`, `href`, `title`, `type`, `not-allowed`, `readonly`, `disabled`], f = e.concat(t, n, r, i, a, s, c, o, l, u, d, [`@font-face`, `@keyframes`, `@media`, `@viewport`, `@page`, `@host`, `@supports`, `@block`, `@css`]);
function p(e2) {
  return e2 = e2.sort(function(e3, t2) {
    return t2 > e3;
  }), RegExp(`^((` + e2.join(`)|(`) + `))\\b`);
}
function m(e2) {
  for (var t2 = {}, n2 = 0; n2 < e2.length; ++n2) t2[e2[n2]] = true;
  return t2;
}
function ee(e2) {
  return e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`);
}
var te = m(e), h = /^(a|b|i|s|col|em)$/i, g = m(i), _ = m(a), v = m(c), y = m(s), b = m(t), x = p(t), S = m(r), C = m(n), w = m(o), ne = /^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/, re = p(l), T = m(u), E = new RegExp(/^\-(moz|ms|o|webkit)-/i), D = m(d), O = ``, k = {}, A, j, M, N;
function P(e2, t2) {
  if (O = e2.string.match(/(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/), t2.context.line.firstWord = O ? O[0].replace(/^\s*/, ``) : ``, t2.context.line.indent = e2.indentation(), A = e2.peek(), e2.match(`//`)) return e2.skipToEnd(), [`comment`, `comment`];
  if (e2.match(`/*`)) return t2.tokenize = F, F(e2, t2);
  if (A == `"` || A == `'`) return e2.next(), t2.tokenize = I(A), t2.tokenize(e2, t2);
  if (A == `@`) return e2.next(), e2.eatWhile(/[\w\\-]/), [`def`, e2.current()];
  if (A == `#`) {
    if (e2.next(), e2.match(/^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b(?!-)/i)) return [`atom`, `atom`];
    if (e2.match(/^[a-z][\w-]*/i)) return [`builtin`, `hash`];
  }
  return e2.match(E) ? [`meta`, `vendor-prefixes`] : e2.match(/^-?[0-9]?\.?[0-9]/) ? (e2.eatWhile(/[a-z%]/i), [`number`, `unit`]) : A == `!` ? (e2.next(), [e2.match(/^(important|optional)/i) ? `keyword` : `operator`, `important`]) : A == `.` && e2.match(/^\.[a-z][\w-]*/i) ? [`qualifier`, `qualifier`] : e2.match(x) ? (e2.peek() == `(` && (t2.tokenize = L), [`property`, `word`]) : e2.match(/^[a-z][\w-]*\(/i) ? (e2.backUp(1), [`keyword`, `mixin`]) : e2.match(/^(\+|-)[a-z][\w-]*\(/i) ? (e2.backUp(1), [`keyword`, `block-mixin`]) : e2.string.match(/^\s*&/) && e2.match(/^[-_]+[a-z][\w-]*/) ? [`qualifier`, `qualifier`] : e2.match(/^(\/|&)(-|_|:|\.|#|[a-z])/) ? (e2.backUp(1), [`variableName.special`, `reference`]) : e2.match(/^&{1}\s*$/) ? [`variableName.special`, `reference`] : e2.match(re) ? [`operator`, `operator`] : e2.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i) ? e2.match(/^(\.|\[)[\w-\'\"\]]+/i, false) && !U(e2.current()) ? (e2.match(`.`), [`variable`, `variable-name`]) : [`variable`, `word`] : e2.match(ne) ? [`operator`, e2.current()] : /[:;,{}\[\]\(\)]/.test(A) ? (e2.next(), [null, A]) : (e2.next(), [null, null]);
}
function F(e2, t2) {
  for (var n2 = false, r2; (r2 = e2.next()) != null; ) {
    if (n2 && r2 == `/`) {
      t2.tokenize = null;
      break;
    }
    n2 = r2 == `*`;
  }
  return [`comment`, `comment`];
}
function I(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        e2 == `)` && t2.backUp(1);
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return (i2 == e2 || !r2 && e2 != `)`) && (n2.tokenize = null), [`string`, `string`];
  };
}
function L(e2, t2) {
  return e2.next(), e2.match(/\s*[\"\')]/, false) ? t2.tokenize = null : t2.tokenize = I(`)`), [null, `(`];
}
function R(e2, t2, n2, r2) {
  this.type = e2, this.indent = t2, this.prev = n2, this.line = r2 || { firstWord: ``, indent: 0 };
}
function z(e2, t2, n2, r2) {
  return r2 = r2 >= 0 ? r2 : t2.indentUnit, e2.context = new R(n2, t2.indentation() + r2, e2.context), n2;
}
function B(e2, t2, n2) {
  var r2 = e2.context.indent - t2.indentUnit;
  return n2 || (n2 = false), e2.context = e2.context.prev, n2 && (e2.context.indent = r2), e2.context.type;
}
function V(e2, t2, n2) {
  return k[n2.context.type](e2, t2, n2);
}
function H(e2, t2, n2, r2) {
  for (var i2 = r2 || 1; i2 > 0; i2--) n2.context = n2.context.prev;
  return V(e2, t2, n2);
}
function U(e2) {
  return e2.toLowerCase() in te;
}
function W(e2) {
  return e2 = e2.toLowerCase(), e2 in g || e2 in w;
}
function G(e2) {
  return e2.toLowerCase() in T;
}
function K(e2) {
  return e2.toLowerCase().match(E);
}
function q(e2) {
  var t2 = e2.toLowerCase(), n2 = `variable`;
  return U(e2) ? n2 = `tag` : G(e2) ? n2 = `block-keyword` : W(e2) ? n2 = `property` : t2 in v || t2 in D ? n2 = `atom` : t2 == `return` || t2 in y ? n2 = `keyword` : e2.match(/^[A-Z]/) && (n2 = `string`), n2;
}
function J(e2, t2) {
  return Q(t2) && (e2 == `{` || e2 == `]` || e2 == `hash` || e2 == `qualifier`) || e2 == `block-mixin`;
}
function Y(e2, t2) {
  return e2 == `{` && t2.match(/^\s*\$?[\w-]+/i, false);
}
function X(e2, t2) {
  return e2 == `:` && t2.match(/^[a-z-]+/, false);
}
function Z(e2) {
  return e2.sol() || e2.string.match(RegExp(`^\\s*` + ee(e2.current())));
}
function Q(e2) {
  return e2.eol() || e2.match(/^\s*$/, false);
}
function $(e2) {
  var t2 = /^\s*[-_]*[a-z0-9]+[\w-]*/i, n2 = typeof e2 == `string` ? e2.match(t2) : e2.string.match(t2);
  return n2 ? n2[0].replace(/^\s*/, ``) : ``;
}
k.block = function(e2, t2, n2) {
  if (e2 == `comment` && Z(t2) || e2 == `,` && Q(t2) || e2 == `mixin`) return z(n2, t2, `block`, 0);
  if (Y(e2, t2)) return z(n2, t2, `interpolation`);
  if (Q(t2) && e2 == `]` && !/^\s*(\.|#|:|\[|\*|&)/.test(t2.string) && !U($(t2))) return z(n2, t2, `block`, 0);
  if (J(e2, t2)) return z(n2, t2, `block`);
  if (e2 == `}` && Q(t2)) return z(n2, t2, `block`, 0);
  if (e2 == `variable-name`) return t2.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/) || G($(t2)) ? z(n2, t2, `variableName`) : z(n2, t2, `variableName`, 0);
  if (e2 == `=`) return !Q(t2) && !G($(t2)) ? z(n2, t2, `block`, 0) : z(n2, t2, `block`);
  if (e2 == `*` && (Q(t2) || t2.match(/\s*(,|\.|#|\[|:|{)/, false))) return N = `tag`, z(n2, t2, `block`);
  if (X(e2, t2)) return z(n2, t2, `pseudo`);
  if (/@(font-face|media|supports|(-moz-)?document)/.test(e2)) return z(n2, t2, Q(t2) ? `block` : `atBlock`);
  if (/@(-(moz|ms|o|webkit)-)?keyframes$/.test(e2)) return z(n2, t2, `keyframes`);
  if (/@extends?/.test(e2)) return z(n2, t2, `extend`, 0);
  if (e2 && e2.charAt(0) == `@`) return t2.indentation() > 0 && W(t2.current().slice(1)) ? (N = `variable`, `block`) : /(@import|@require|@charset)/.test(e2) ? z(n2, t2, `block`, 0) : z(n2, t2, `block`);
  if (e2 == `reference` && Q(t2)) return z(n2, t2, `block`);
  if (e2 == `(`) return z(n2, t2, `parens`);
  if (e2 == `vendor-prefixes`) return z(n2, t2, `vendorPrefixes`);
  if (e2 == `word`) {
    var r2 = t2.current();
    if (N = q(r2), N == `property`) return Z(t2) ? z(n2, t2, `block`, 0) : (N = `atom`, `block`);
    if (N == `tag`) {
      if (/embed|menu|pre|progress|sub|table/.test(r2) && W($(t2)) || t2.string.match(RegExp(`\\[\\s*` + r2 + `|` + r2 + `\\s*\\]`))) return N = `atom`, `block`;
      if (h.test(r2) && (Z(t2) && t2.string.match(/=/) || !Z(t2) && !t2.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/) && !U($(t2)))) return N = `variable`, G($(t2)) ? `block` : z(n2, t2, `block`, 0);
      if (Q(t2)) return z(n2, t2, `block`);
    }
    if (N == `block-keyword`) return N = `keyword`, t2.current(/(if|unless)/) && !Z(t2) ? `block` : z(n2, t2, `block`);
    if (r2 == `return`) return z(n2, t2, `block`, 0);
    if (N == `variable` && t2.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/)) return z(n2, t2, `block`);
  }
  return n2.context.type;
}, k.parens = function(e2, t2, n2) {
  if (e2 == `(`) return z(n2, t2, `parens`);
  if (e2 == `)`) return n2.context.prev.type == `parens` ? B(n2, t2) : t2.string.match(/^[a-z][\w-]*\(/i) && Q(t2) || G($(t2)) || /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test($(t2)) || !t2.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/) && U($(t2)) ? z(n2, t2, `block`) : t2.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/) || t2.string.match(/^\s*(\(|\)|[0-9])/) || t2.string.match(/^\s+[a-z][\w-]*\(/i) || t2.string.match(/^\s+[\$-]?[a-z]/i) ? z(n2, t2, `block`, 0) : Q(t2) ? z(n2, t2, `block`) : z(n2, t2, `block`, 0);
  if (e2 && e2.charAt(0) == `@` && W(t2.current().slice(1)) && (N = `variable`), e2 == `word`) {
    var r2 = t2.current();
    N = q(r2), N == `tag` && h.test(r2) && (N = `variable`), (N == `property` || r2 == `to`) && (N = `atom`);
  }
  return e2 == `variable-name` ? z(n2, t2, `variableName`) : X(e2, t2) ? z(n2, t2, `pseudo`) : n2.context.type;
}, k.vendorPrefixes = function(e2, t2, n2) {
  return e2 == `word` ? (N = `property`, z(n2, t2, `block`, 0)) : B(n2, t2);
}, k.pseudo = function(e2, t2, n2) {
  return W($(t2.string)) ? H(e2, t2, n2) : (t2.match(/^[a-z-]+/), N = `variableName.special`, Q(t2) ? z(n2, t2, `block`) : B(n2, t2));
}, k.atBlock = function(e2, t2, n2) {
  if (e2 == `(`) return z(n2, t2, `atBlock_parens`);
  if (J(e2, t2)) return z(n2, t2, `block`);
  if (Y(e2, t2)) return z(n2, t2, `interpolation`);
  if (e2 == `word`) {
    var r2 = t2.current().toLowerCase();
    if (N = /^(only|not|and|or)$/.test(r2) ? `keyword` : b.hasOwnProperty(r2) ? `tag` : C.hasOwnProperty(r2) ? `attribute` : S.hasOwnProperty(r2) ? `property` : _.hasOwnProperty(r2) ? `string.special` : q(t2.current()), N == `tag` && Q(t2)) return z(n2, t2, `block`);
  }
  return e2 == `operator` && /^(not|and|or)$/.test(t2.current()) && (N = `keyword`), n2.context.type;
}, k.atBlock_parens = function(e2, t2, n2) {
  if (e2 == `{` || e2 == `}`) return n2.context.type;
  if (e2 == `)`) return Q(t2) ? z(n2, t2, `block`) : z(n2, t2, `atBlock`);
  if (e2 == `word`) {
    var r2 = t2.current().toLowerCase();
    return N = q(r2), /^(max|min)/.test(r2) && (N = `property`), N == `tag` && (N = h.test(r2) ? `variable` : `atom`), n2.context.type;
  }
  return k.atBlock(e2, t2, n2);
}, k.keyframes = function(e2, t2, n2) {
  return t2.indentation() == `0` && (e2 == `}` && Z(t2) || e2 == `]` || e2 == `hash` || e2 == `qualifier` || U(t2.current())) ? H(e2, t2, n2) : e2 == `{` ? z(n2, t2, `keyframes`) : e2 == `}` ? Z(t2) ? B(n2, t2, true) : z(n2, t2, `keyframes`) : e2 == `unit` && /^[0-9]+\%$/.test(t2.current()) ? z(n2, t2, `keyframes`) : e2 == `word` && (N = q(t2.current()), N == `block-keyword`) ? (N = `keyword`, z(n2, t2, `keyframes`)) : /@(font-face|media|supports|(-moz-)?document)/.test(e2) ? z(n2, t2, Q(t2) ? `block` : `atBlock`) : e2 == `mixin` ? z(n2, t2, `block`, 0) : n2.context.type;
}, k.interpolation = function(e2, t2, n2) {
  return e2 == `{` && B(n2, t2) && z(n2, t2, `block`), e2 == `}` ? t2.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i) || t2.string.match(/^\s*[a-z]/i) && U($(t2)) ? z(n2, t2, `block`) : !t2.string.match(/^(\{|\s*\&)/) || t2.match(/\s*[\w-]/, false) ? z(n2, t2, `block`, 0) : z(n2, t2, `block`) : e2 == `variable-name` ? z(n2, t2, `variableName`, 0) : (e2 == `word` && (N = q(t2.current()), N == `tag` && (N = `atom`)), n2.context.type);
}, k.extend = function(e2, t2, n2) {
  return e2 == `[` || e2 == `=` ? `extend` : e2 == `]` ? B(n2, t2) : e2 == `word` ? (N = q(t2.current()), `extend`) : B(n2, t2);
}, k.variableName = function(e2, t2, n2) {
  return e2 == `string` || e2 == `[` || e2 == `]` || t2.current().match(/^(\.|\$)/) ? (t2.current().match(/^\.[\w-]+/i) && (N = `variable`), `variableName`) : H(e2, t2, n2);
};
const ie = { name: `stylus`, startState: function() {
  return { tokenize: null, state: `block`, context: new R(`block`, 0, null) };
}, token: function(e2, t2) {
  return !t2.tokenize && e2.eatSpace() ? null : (j = (t2.tokenize || P)(e2, t2), j && typeof j == `object` && (M = j[1], j = j[0]), N = j, t2.state = k[t2.state](M, e2, t2), N);
}, indent: function(e2, t2, n2) {
  var r2 = e2.context, i2 = t2 && t2.charAt(0), a2 = r2.indent, o2 = $(t2), s2 = r2.line.indent, c2 = e2.context.prev ? e2.context.prev.line.firstWord : ``, l2 = e2.context.prev ? e2.context.prev.line.indent : s2;
  return r2.prev && (i2 == `}` && (r2.type == `block` || r2.type == `atBlock` || r2.type == `keyframes`) || i2 == `)` && (r2.type == `parens` || r2.type == `atBlock_parens`) || i2 == `{` && r2.type == `at`) ? a2 = r2.indent - n2.unit : /(\})/.test(i2) || (/@|\$|\d/.test(i2) || /^\{/.test(t2) || /^\s*\/(\/|\*)/.test(t2) || /^\s*\/\*/.test(c2) || /^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(t2) || /^(\+|-)?[a-z][\w-]*\(/i.test(t2) || /^return/.test(t2) || G(o2) ? a2 = s2 : /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(i2) || U(o2) ? a2 = /\,\s*$/.test(c2) ? l2 : /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(c2) || U(c2) ? s2 <= l2 ? l2 : l2 + n2.unit : s2 : !/,\s*$/.test(t2) && (K(o2) || W(o2)) && (a2 = G(c2) ? s2 <= l2 ? l2 : l2 + n2.unit : /^\{/.test(c2) ? s2 <= l2 ? s2 : l2 + n2.unit : K(c2) || W(c2) ? s2 >= l2 ? l2 : s2 : /^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(c2) || /=\s*$/.test(c2) || U(c2) || /^\$[\w-\.\[\]\'\"]/.test(c2) ? l2 + n2.unit : s2)), a2;
}, languageData: { indentOnInput: /^\s*\}$/, commentTokens: { line: `//`, block: { open: `/*`, close: `*/` } }, autocomplete: f } };
export {
  ie as stylus
};
