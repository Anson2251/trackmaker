function e(e2) {
  e2 = { ...C, ...e2 };
  var t2 = e2.inline, n2 = e2.tokenHooks, r2 = e2.documentTypes || {}, i2 = e2.mediaTypes || {}, a2 = e2.mediaFeatures || {}, o2 = e2.mediaValueKeywords || {}, s2 = e2.propertyKeywords || {}, c2 = e2.nonStandardPropertyKeywords || {}, l2 = e2.fontProperties || {}, u2 = e2.counterDescriptors || {}, d2 = e2.colorKeywords || {}, f2 = e2.valueKeywords || {}, p2 = e2.allowNested, m2 = e2.lineComment, h2 = e2.supportsAtComponent === true, g2 = e2.highlightNonStandardPropertyKeywords !== false, _2, v2;
  function y2(e3, t3) {
    return _2 = t3, e3;
  }
  function b2(e3, t3) {
    var r3 = e3.next();
    if (n2[r3]) {
      var i3 = n2[r3](e3, t3);
      if (i3 !== false) return i3;
    }
    if (r3 == `@`) return e3.eatWhile(/[\w\\\-]/), y2(`def`, e3.current());
    if (r3 == `=` || (r3 == `~` || r3 == `|`) && e3.eat(`=`)) return y2(null, `compare`);
    if (r3 == `"` || r3 == `'`) return t3.tokenize = S2(r3), t3.tokenize(e3, t3);
    if (r3 == `#`) return e3.eatWhile(/[\w\\\-]/), y2(`atom`, `hash`);
    if (r3 == `!`) return e3.match(/^\s*\w*/), y2(`keyword`, `important`);
    if (/\d/.test(r3) || r3 == `.` && e3.eat(/\d/)) return e3.eatWhile(/[\w.%]/), y2(`number`, `unit`);
    if (r3 === `-`) {
      if (/[\d.]/.test(e3.peek())) return e3.eatWhile(/[\w.%]/), y2(`number`, `unit`);
      if (e3.match(/^-[\w\\\-]*/)) return e3.eatWhile(/[\w\\\-]/), e3.match(/^\s*:/, false) ? y2(`def`, `variable-definition`) : y2(`variableName`, `variable`);
      if (e3.match(/^\w+-/)) return y2(`meta`, `meta`);
    } else if (/[,+>*\/]/.test(r3)) return y2(null, `select-op`);
    else if (r3 == `.` && e3.match(/^-?[_a-z][_a-z0-9-]*/i)) return y2(`qualifier`, `qualifier`);
    else if (/[:;{}\[\]\(\)]/.test(r3)) return y2(null, r3);
    else if (e3.match(/^[\w-.]+(?=\()/)) return /^(url(-prefix)?|domain|regexp)$/i.test(e3.current()) && (t3.tokenize = w2), y2(`variableName.function`, `variable`);
    else if (/[\w\\\-]/.test(r3)) return e3.eatWhile(/[\w\\\-]/), y2(`property`, `word`);
    else return y2(null, null);
  }
  function S2(e3) {
    return function(t3, n3) {
      for (var r3 = false, i3; (i3 = t3.next()) != null; ) {
        if (i3 == e3 && !r3) {
          e3 == `)` && t3.backUp(1);
          break;
        }
        r3 = !r3 && i3 == `\\`;
      }
      return (i3 == e3 || !r3 && e3 != `)`) && (n3.tokenize = null), y2(`string`, `string`);
    };
  }
  function w2(e3, t3) {
    return e3.next(), e3.match(/^\s*[\"\')]/, false) ? t3.tokenize = null : t3.tokenize = S2(`)`), y2(null, `(`);
  }
  function T2(e3, t3, n3) {
    this.type = e3, this.indent = t3, this.prev = n3;
  }
  function E2(e3, t3, n3, r3) {
    return e3.context = new T2(n3, t3.indentation() + (r3 === false ? 0 : t3.indentUnit), e3.context), n3;
  }
  function D2(e3) {
    return e3.context.prev && (e3.context = e3.context.prev), e3.context.type;
  }
  function O2(e3, t3, n3) {
    return j[n3.context.type](e3, t3, n3);
  }
  function k(e3, t3, n3, r3) {
    for (var i3 = r3 || 1; i3 > 0; i3--) n3.context = n3.context.prev;
    return O2(e3, t3, n3);
  }
  function A(e3) {
    var t3 = e3.current().toLowerCase();
    v2 = f2.hasOwnProperty(t3) ? `atom` : d2.hasOwnProperty(t3) ? `keyword` : `variable`;
  }
  var j = {};
  return j.top = function(e3, t3, n3) {
    if (e3 == `{`) return E2(n3, t3, `block`);
    if (e3 == `}` && n3.context.prev) return D2(n3);
    if (h2 && /@component/i.test(e3)) return E2(n3, t3, `atComponentBlock`);
    if (/^@(-moz-)?document$/i.test(e3)) return E2(n3, t3, `documentTypes`);
    if (/^@(media|supports|(-moz-)?document|import)$/i.test(e3)) return E2(n3, t3, `atBlock`);
    if (/^@(font-face|counter-style)/i.test(e3)) return n3.stateArg = e3, `restricted_atBlock_before`;
    if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e3)) return `keyframes`;
    if (e3 && e3.charAt(0) == `@`) return E2(n3, t3, `at`);
    if (e3 == `hash`) v2 = `builtin`;
    else if (e3 == `word`) v2 = `tag`;
    else if (e3 == `variable-definition`) return `maybeprop`;
    else if (e3 == `interpolation`) return E2(n3, t3, `interpolation`);
    else if (e3 == `:`) return `pseudo`;
    else if (p2 && e3 == `(`) return E2(n3, t3, `parens`);
    return n3.context.type;
  }, j.block = function(e3, t3, n3) {
    if (e3 == `word`) {
      var r3 = t3.current().toLowerCase();
      return s2.hasOwnProperty(r3) ? (v2 = `property`, `maybeprop`) : c2.hasOwnProperty(r3) ? (v2 = g2 ? `string.special` : `property`, `maybeprop`) : p2 ? (v2 = t3.match(/^\s*:(?:\s|$)/, false) ? `property` : `tag`, `block`) : (v2 = `error`, `maybeprop`);
    } else if (e3 == `meta`) return `block`;
    else if (!p2 && (e3 == `hash` || e3 == `qualifier`)) return v2 = `error`, `block`;
    else return j.top(e3, t3, n3);
  }, j.maybeprop = function(e3, t3, n3) {
    return e3 == `:` ? E2(n3, t3, `prop`) : O2(e3, t3, n3);
  }, j.prop = function(e3, t3, n3) {
    if (e3 == `;`) return D2(n3);
    if (e3 == `{` && p2) return E2(n3, t3, `propBlock`);
    if (e3 == `}` || e3 == `{`) return k(e3, t3, n3);
    if (e3 == `(`) return E2(n3, t3, `parens`);
    if (e3 == `hash` && !/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(t3.current())) v2 = `error`;
    else if (e3 == `word`) A(t3);
    else if (e3 == `interpolation`) return E2(n3, t3, `interpolation`);
    return `prop`;
  }, j.propBlock = function(e3, t3, n3) {
    return e3 == `}` ? D2(n3) : e3 == `word` ? (v2 = `property`, `maybeprop`) : n3.context.type;
  }, j.parens = function(e3, t3, n3) {
    return e3 == `{` || e3 == `}` ? k(e3, t3, n3) : e3 == `)` ? D2(n3) : e3 == `(` ? E2(n3, t3, `parens`) : e3 == `interpolation` ? E2(n3, t3, `interpolation`) : (e3 == `word` && A(t3), `parens`);
  }, j.pseudo = function(e3, t3, n3) {
    return e3 == `meta` ? `pseudo` : e3 == `word` ? (v2 = `variableName.constant`, n3.context.type) : O2(e3, t3, n3);
  }, j.documentTypes = function(e3, t3, n3) {
    return e3 == `word` && r2.hasOwnProperty(t3.current()) ? (v2 = `tag`, n3.context.type) : j.atBlock(e3, t3, n3);
  }, j.atBlock = function(e3, t3, n3) {
    if (e3 == `(`) return E2(n3, t3, `atBlock_parens`);
    if (e3 == `}` || e3 == `;`) return k(e3, t3, n3);
    if (e3 == `{`) return D2(n3) && E2(n3, t3, p2 ? `block` : `top`);
    if (e3 == `interpolation`) return E2(n3, t3, `interpolation`);
    if (e3 == `word`) {
      var r3 = t3.current().toLowerCase();
      v2 = r3 == `only` || r3 == `not` || r3 == `and` || r3 == `or` ? `keyword` : i2.hasOwnProperty(r3) ? `attribute` : a2.hasOwnProperty(r3) ? `property` : o2.hasOwnProperty(r3) ? `keyword` : s2.hasOwnProperty(r3) ? `property` : c2.hasOwnProperty(r3) ? g2 ? `string.special` : `property` : f2.hasOwnProperty(r3) ? `atom` : d2.hasOwnProperty(r3) ? `keyword` : `error`;
    }
    return n3.context.type;
  }, j.atComponentBlock = function(e3, t3, n3) {
    return e3 == `}` ? k(e3, t3, n3) : e3 == `{` ? D2(n3) && E2(n3, t3, p2 ? `block` : `top`, false) : (e3 == `word` && (v2 = `error`), n3.context.type);
  }, j.atBlock_parens = function(e3, t3, n3) {
    return e3 == `)` ? D2(n3) : e3 == `{` || e3 == `}` ? k(e3, t3, n3, 2) : j.atBlock(e3, t3, n3);
  }, j.restricted_atBlock_before = function(e3, t3, n3) {
    return e3 == `{` ? E2(n3, t3, `restricted_atBlock`) : e3 == `word` && n3.stateArg == `@counter-style` ? (v2 = `variable`, `restricted_atBlock_before`) : O2(e3, t3, n3);
  }, j.restricted_atBlock = function(e3, t3, n3) {
    return e3 == `}` ? (n3.stateArg = null, D2(n3)) : e3 == `word` ? (v2 = n3.stateArg == `@font-face` && !l2.hasOwnProperty(t3.current().toLowerCase()) || n3.stateArg == `@counter-style` && !u2.hasOwnProperty(t3.current().toLowerCase()) ? `error` : `property`, `maybeprop`) : `restricted_atBlock`;
  }, j.keyframes = function(e3, t3, n3) {
    return e3 == `word` ? (v2 = `variable`, `keyframes`) : e3 == `{` ? E2(n3, t3, `top`) : O2(e3, t3, n3);
  }, j.at = function(e3, t3, n3) {
    return e3 == `;` ? D2(n3) : e3 == `{` || e3 == `}` ? k(e3, t3, n3) : (e3 == `word` ? v2 = `tag` : e3 == `hash` && (v2 = `builtin`), `at`);
  }, j.interpolation = function(e3, t3, n3) {
    return e3 == `}` ? D2(n3) : e3 == `{` || e3 == `;` ? k(e3, t3, n3) : (e3 == `word` ? v2 = `variable` : e3 != `variable` && e3 != `(` && e3 != `)` && (v2 = `error`), `interpolation`);
  }, { name: e2.name, startState: function() {
    return { tokenize: null, state: t2 ? `block` : `top`, stateArg: null, context: new T2(t2 ? `block` : `top`, 0, null) };
  }, token: function(e3, t3) {
    if (!t3.tokenize && e3.eatSpace()) return null;
    var n3 = (t3.tokenize || b2)(e3, t3);
    return n3 && typeof n3 == `object` && (_2 = n3[1], n3 = n3[0]), v2 = n3, _2 != `comment` && (t3.state = j[t3.state](_2, e3, t3)), v2;
  }, indent: function(e3, t3, n3) {
    var r3 = e3.context, i3 = t3 && t3.charAt(0), a3 = r3.indent;
    return r3.type == `prop` && (i3 == `}` || i3 == `)`) && (r3 = r3.prev), r3.prev && (i3 == `}` && (r3.type == `block` || r3.type == `top` || r3.type == `interpolation` || r3.type == `restricted_atBlock`) ? (r3 = r3.prev, a3 = r3.indent) : (i3 == `)` && (r3.type == `parens` || r3.type == `atBlock_parens`) || i3 == `{` && (r3.type == `at` || r3.type == `atBlock`)) && (a3 = Math.max(0, r3.indent - n3.unit))), a3;
  }, languageData: { indentOnInput: /^\s*\}$/, commentTokens: { line: m2, block: { open: `/*`, close: `*/` } }, autocomplete: x } };
}
function t(e2) {
  for (var t2 = {}, n2 = 0; n2 < e2.length; ++n2) t2[e2[n2].toLowerCase()] = true;
  return t2;
}
var n = [`domain`, `regexp`, `url`, `url-prefix`], r = t(n), i = [`all`, `aural`, `braille`, `handheld`, `print`, `projection`, `screen`, `tty`, `tv`, `embossed`], a = t(i), o = `width.min-width.max-width.height.min-height.max-height.device-width.min-device-width.max-device-width.device-height.min-device-height.max-device-height.aspect-ratio.min-aspect-ratio.max-aspect-ratio.device-aspect-ratio.min-device-aspect-ratio.max-device-aspect-ratio.color.min-color.max-color.color-index.min-color-index.max-color-index.monochrome.min-monochrome.max-monochrome.resolution.min-resolution.max-resolution.scan.grid.orientation.device-pixel-ratio.min-device-pixel-ratio.max-device-pixel-ratio.pointer.any-pointer.hover.any-hover.prefers-color-scheme.dynamic-range.video-dynamic-range`.split(`.`), s = t(o), c = [`landscape`, `portrait`, `none`, `coarse`, `fine`, `on-demand`, `hover`, `interlace`, `progressive`, `dark`, `light`, `standard`, `high`], l = t(c), u = `align-content.align-items.align-self.alignment-adjust.alignment-baseline.all.anchor-point.animation.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-timing-function.appearance.azimuth.backdrop-filter.backface-visibility.background.background-attachment.background-blend-mode.background-clip.background-color.background-image.background-origin.background-position.background-position-x.background-position-y.background-repeat.background-size.baseline-shift.binding.bleed.block-size.bookmark-label.bookmark-level.bookmark-state.bookmark-target.border.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-decoration-break.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.caret-color.clear.clip.color.color-profile.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.column-span.column-width.columns.contain.content.counter-increment.counter-reset.crop.cue.cue-after.cue-before.cursor.direction.display.dominant-baseline.drop-initial-after-adjust.drop-initial-after-align.drop-initial-before-adjust.drop-initial-before-align.drop-initial-size.drop-initial-value.elevation.empty-cells.fit.fit-content.fit-position.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.float-offset.flow-from.flow-into.font.font-family.font-feature-settings.font-kerning.font-language-override.font-optical-sizing.font-size.font-size-adjust.font-stretch.font-style.font-synthesis.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-ligatures.font-variant-numeric.font-variant-position.font-variation-settings.font-weight.gap.grid.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-column.grid-column-end.grid-column-gap.grid-column-start.grid-gap.grid-row.grid-row-end.grid-row-gap.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.hanging-punctuation.height.hyphens.icon.image-orientation.image-rendering.image-resolution.inline-box-align.inset.inset-block.inset-block-end.inset-block-start.inset-inline.inset-inline-end.inset-inline-start.isolation.justify-content.justify-items.justify-self.left.letter-spacing.line-break.line-height.line-height-step.line-stacking.line-stacking-ruby.line-stacking-shift.line-stacking-strategy.list-style.list-style-image.list-style-position.list-style-type.margin.margin-bottom.margin-left.margin-right.margin-top.marks.marquee-direction.marquee-loop.marquee-play-count.marquee-speed.marquee-style.mask-clip.mask-composite.mask-image.mask-mode.mask-origin.mask-position.mask-repeat.mask-size.mask-type.max-block-size.max-height.max-inline-size.max-width.min-block-size.min-height.min-inline-size.min-width.mix-blend-mode.move-to.nav-down.nav-index.nav-left.nav-right.nav-up.object-fit.object-position.offset.offset-anchor.offset-distance.offset-path.offset-position.offset-rotate.opacity.order.orphans.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-style.overflow-wrap.overflow-x.overflow-y.padding.padding-bottom.padding-left.padding-right.padding-top.page.page-break-after.page-break-before.page-break-inside.page-policy.pause.pause-after.pause-before.perspective.perspective-origin.pitch.pitch-range.place-content.place-items.place-self.play-during.position.presentation-level.punctuation-trim.quotes.region-break-after.region-break-before.region-break-inside.region-fragment.rendering-intent.resize.rest.rest-after.rest-before.richness.right.rotate.rotation.rotation-point.row-gap.ruby-align.ruby-overhang.ruby-position.ruby-span.scale.scroll-behavior.scroll-margin.scroll-margin-block.scroll-margin-block-end.scroll-margin-block-start.scroll-margin-bottom.scroll-margin-inline.scroll-margin-inline-end.scroll-margin-inline-start.scroll-margin-left.scroll-margin-right.scroll-margin-top.scroll-padding.scroll-padding-block.scroll-padding-block-end.scroll-padding-block-start.scroll-padding-bottom.scroll-padding-inline.scroll-padding-inline-end.scroll-padding-inline-start.scroll-padding-left.scroll-padding-right.scroll-padding-top.scroll-snap-align.scroll-snap-type.shape-image-threshold.shape-inside.shape-margin.shape-outside.size.speak.speak-as.speak-header.speak-numeral.speak-punctuation.speech-rate.stress.string-set.tab-size.table-layout.target.target-name.target-new.target-position.text-align.text-align-last.text-combine-upright.text-decoration.text-decoration-color.text-decoration-line.text-decoration-skip.text-decoration-skip-ink.text-decoration-style.text-emphasis.text-emphasis-color.text-emphasis-position.text-emphasis-style.text-height.text-indent.text-justify.text-orientation.text-outline.text-overflow.text-rendering.text-shadow.text-size-adjust.text-space-collapse.text-transform.text-underline-position.text-wrap.top.touch-action.transform.transform-origin.transform-style.transition.transition-delay.transition-duration.transition-property.transition-timing-function.translate.unicode-bidi.user-select.vertical-align.visibility.voice-balance.voice-duration.voice-family.voice-pitch.voice-range.voice-rate.voice-stress.voice-volume.volume.white-space.widows.width.will-change.word-break.word-spacing.word-wrap.writing-mode.z-index.clip-path.clip-rule.mask.enable-background.filter.flood-color.flood-opacity.lighting-color.stop-color.stop-opacity.pointer-events.color-interpolation.color-interpolation-filters.color-rendering.fill.fill-opacity.fill-rule.image-rendering.marker.marker-end.marker-mid.marker-start.paint-order.shape-rendering.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.text-rendering.baseline-shift.dominant-baseline.glyph-orientation-horizontal.glyph-orientation-vertical.text-anchor.writing-mode`.split(`.`), d = t(u), f = `accent-color.aspect-ratio.border-block.border-block-color.border-block-end.border-block-end-color.border-block-end-style.border-block-end-width.border-block-start.border-block-start-color.border-block-start-style.border-block-start-width.border-block-style.border-block-width.border-inline.border-inline-color.border-inline-end.border-inline-end-color.border-inline-end-style.border-inline-end-width.border-inline-start.border-inline-start-color.border-inline-start-style.border-inline-start-width.border-inline-style.border-inline-width.content-visibility.margin-block.margin-block-end.margin-block-start.margin-inline.margin-inline-end.margin-inline-start.overflow-anchor.overscroll-behavior.padding-block.padding-block-end.padding-block-start.padding-inline.padding-inline-end.padding-inline-start.scroll-snap-stop.scrollbar-3d-light-color.scrollbar-arrow-color.scrollbar-base-color.scrollbar-dark-shadow-color.scrollbar-face-color.scrollbar-highlight-color.scrollbar-shadow-color.scrollbar-track-color.searchfield-cancel-button.searchfield-decoration.searchfield-results-button.searchfield-results-decoration.shape-inside.zoom`.split(`.`), p = t(f), m = [`font-display`, `font-family`, `src`, `unicode-range`, `font-variant`, `font-feature-settings`, `font-stretch`, `font-weight`, `font-style`], h = t(m), g = t([`additive-symbols`, `fallback`, `negative`, `pad`, `prefix`, `range`, `speak-as`, `suffix`, `symbols`, `system`]), _ = `aliceblue.antiquewhite.aqua.aquamarine.azure.beige.bisque.black.blanchedalmond.blue.blueviolet.brown.burlywood.cadetblue.chartreuse.chocolate.coral.cornflowerblue.cornsilk.crimson.cyan.darkblue.darkcyan.darkgoldenrod.darkgray.darkgreen.darkgrey.darkkhaki.darkmagenta.darkolivegreen.darkorange.darkorchid.darkred.darksalmon.darkseagreen.darkslateblue.darkslategray.darkslategrey.darkturquoise.darkviolet.deeppink.deepskyblue.dimgray.dimgrey.dodgerblue.firebrick.floralwhite.forestgreen.fuchsia.gainsboro.ghostwhite.gold.goldenrod.gray.grey.green.greenyellow.honeydew.hotpink.indianred.indigo.ivory.khaki.lavender.lavenderblush.lawngreen.lemonchiffon.lightblue.lightcoral.lightcyan.lightgoldenrodyellow.lightgray.lightgreen.lightgrey.lightpink.lightsalmon.lightseagreen.lightskyblue.lightslategray.lightslategrey.lightsteelblue.lightyellow.lime.limegreen.linen.magenta.maroon.mediumaquamarine.mediumblue.mediumorchid.mediumpurple.mediumseagreen.mediumslateblue.mediumspringgreen.mediumturquoise.mediumvioletred.midnightblue.mintcream.mistyrose.moccasin.navajowhite.navy.oldlace.olive.olivedrab.orange.orangered.orchid.palegoldenrod.palegreen.paleturquoise.palevioletred.papayawhip.peachpuff.peru.pink.plum.powderblue.purple.rebeccapurple.red.rosybrown.royalblue.saddlebrown.salmon.sandybrown.seagreen.seashell.sienna.silver.skyblue.slateblue.slategray.slategrey.snow.springgreen.steelblue.tan.teal.thistle.tomato.turquoise.violet.wheat.white.whitesmoke.yellow.yellowgreen`.split(`.`), v = t(_), y = `above.absolute.activeborder.additive.activecaption.afar.after-white-space.ahead.alias.all.all-scroll.alphabetic.alternate.always.amharic.amharic-abegede.antialiased.appworkspace.arabic-indic.armenian.asterisks.attr.auto.auto-flow.avoid.avoid-column.avoid-page.avoid-region.axis-pan.background.backwards.baseline.below.bidi-override.binary.bengali.blink.block.block-axis.blur.bold.bolder.border.border-box.both.bottom.break.break-all.break-word.brightness.bullets.button.buttonface.buttonhighlight.buttonshadow.buttontext.calc.cambodian.capitalize.caps-lock-indicator.caption.captiontext.caret.cell.center.checkbox.circle.cjk-decimal.cjk-earthly-branch.cjk-heavenly-stem.cjk-ideographic.clear.clip.close-quote.col-resize.collapse.color.color-burn.color-dodge.column.column-reverse.compact.condensed.conic-gradient.contain.content.contents.content-box.context-menu.continuous.contrast.copy.counter.counters.cover.crop.cross.crosshair.cubic-bezier.currentcolor.cursive.cyclic.darken.dashed.decimal.decimal-leading-zero.default.default-button.dense.destination-atop.destination-in.destination-out.destination-over.devanagari.difference.disc.discard.disclosure-closed.disclosure-open.document.dot-dash.dot-dot-dash.dotted.double.down.drop-shadow.e-resize.ease.ease-in.ease-in-out.ease-out.element.ellipse.ellipsis.embed.end.ethiopic.ethiopic-abegede.ethiopic-abegede-am-et.ethiopic-abegede-gez.ethiopic-abegede-ti-er.ethiopic-abegede-ti-et.ethiopic-halehame-aa-er.ethiopic-halehame-aa-et.ethiopic-halehame-am-et.ethiopic-halehame-gez.ethiopic-halehame-om-et.ethiopic-halehame-sid-et.ethiopic-halehame-so-et.ethiopic-halehame-ti-er.ethiopic-halehame-ti-et.ethiopic-halehame-tig.ethiopic-numeric.ew-resize.exclusion.expanded.extends.extra-condensed.extra-expanded.fantasy.fast.fill.fill-box.fixed.flat.flex.flex-end.flex-start.footnotes.forwards.from.geometricPrecision.georgian.grayscale.graytext.grid.groove.gujarati.gurmukhi.hand.hangul.hangul-consonant.hard-light.hebrew.help.hidden.hide.higher.highlight.highlighttext.hiragana.hiragana-iroha.horizontal.hsl.hsla.hue.hue-rotate.icon.ignore.inactiveborder.inactivecaption.inactivecaptiontext.infinite.infobackground.infotext.inherit.initial.inline.inline-axis.inline-block.inline-flex.inline-grid.inline-table.inset.inside.intrinsic.invert.italic.japanese-formal.japanese-informal.justify.kannada.katakana.katakana-iroha.keep-all.khmer.korean-hangul-formal.korean-hanja-formal.korean-hanja-informal.landscape.lao.large.larger.left.level.lighter.lighten.line-through.linear.linear-gradient.lines.list-item.listbox.listitem.local.logical.loud.lower.lower-alpha.lower-armenian.lower-greek.lower-hexadecimal.lower-latin.lower-norwegian.lower-roman.lowercase.ltr.luminosity.malayalam.manipulation.match.matrix.matrix3d.media-play-button.media-slider.media-sliderthumb.media-volume-slider.media-volume-sliderthumb.medium.menu.menulist.menulist-button.menutext.message-box.middle.min-intrinsic.mix.mongolian.monospace.move.multiple.multiple_mask_images.multiply.myanmar.n-resize.narrower.ne-resize.nesw-resize.no-close-quote.no-drop.no-open-quote.no-repeat.none.normal.not-allowed.nowrap.ns-resize.numbers.numeric.nw-resize.nwse-resize.oblique.octal.opacity.open-quote.optimizeLegibility.optimizeSpeed.oriya.oromo.outset.outside.outside-shape.overlay.overline.padding.padding-box.painted.page.paused.persian.perspective.pinch-zoom.plus-darker.plus-lighter.pointer.polygon.portrait.pre.pre-line.pre-wrap.preserve-3d.progress.push-button.radial-gradient.radio.read-only.read-write.read-write-plaintext-only.rectangle.region.relative.repeat.repeating-linear-gradient.repeating-radial-gradient.repeating-conic-gradient.repeat-x.repeat-y.reset.reverse.rgb.rgba.ridge.right.rotate.rotate3d.rotateX.rotateY.rotateZ.round.row.row-resize.row-reverse.rtl.run-in.running.s-resize.sans-serif.saturate.saturation.scale.scale3d.scaleX.scaleY.scaleZ.screen.scroll.scrollbar.scroll-position.se-resize.searchfield.searchfield-cancel-button.searchfield-decoration.searchfield-results-button.searchfield-results-decoration.self-start.self-end.semi-condensed.semi-expanded.separate.sepia.serif.show.sidama.simp-chinese-formal.simp-chinese-informal.single.skew.skewX.skewY.skip-white-space.slide.slider-horizontal.slider-vertical.sliderthumb-horizontal.sliderthumb-vertical.slow.small.small-caps.small-caption.smaller.soft-light.solid.somali.source-atop.source-in.source-out.source-over.space.space-around.space-between.space-evenly.spell-out.square.square-button.start.static.status-bar.stretch.stroke.stroke-box.sub.subpixel-antialiased.svg_masks.super.sw-resize.symbolic.symbols.system-ui.table.table-caption.table-cell.table-column.table-column-group.table-footer-group.table-header-group.table-row.table-row-group.tamil.telugu.text.text-bottom.text-top.textarea.textfield.thai.thick.thin.threeddarkshadow.threedface.threedhighlight.threedlightshadow.threedshadow.tibetan.tigre.tigrinya-er.tigrinya-er-abegede.tigrinya-et.tigrinya-et-abegede.to.top.trad-chinese-formal.trad-chinese-informal.transform.translate.translate3d.translateX.translateY.translateZ.transparent.ultra-condensed.ultra-expanded.underline.unidirectional-pan.unset.up.upper-alpha.upper-armenian.upper-greek.upper-hexadecimal.upper-latin.upper-norwegian.upper-roman.uppercase.urdu.url.var.vertical.vertical-text.view-box.visible.visibleFill.visiblePainted.visibleStroke.visual.w-resize.wait.wave.wider.window.windowframe.windowtext.words.wrap.wrap-reverse.x-large.x-small.xor.xx-large.xx-small`.split(`.`), b = t(y), x = n.concat(i).concat(o).concat(c).concat(u).concat(f).concat(_).concat(y);
const S = { properties: u, colors: _, fonts: m, values: y, all: x };
var C = { documentTypes: r, mediaTypes: a, mediaFeatures: s, mediaValueKeywords: l, propertyKeywords: d, nonStandardPropertyKeywords: p, fontProperties: h, counterDescriptors: g, colorKeywords: v, valueKeywords: b, tokenHooks: { "/": function(e2, t2) {
  return e2.eat(`*`) ? (t2.tokenize = T, T(e2, t2)) : false;
} } };
const w = e({ name: `css` });
function T(e2, t2) {
  for (var n2 = false, r2; (r2 = e2.next()) != null; ) {
    if (n2 && r2 == `/`) {
      t2.tokenize = null;
      break;
    }
    n2 = r2 == `*`;
  }
  return [`comment`, `comment`];
}
const E = e({ name: `scss`, mediaTypes: a, mediaFeatures: s, mediaValueKeywords: l, propertyKeywords: d, nonStandardPropertyKeywords: p, colorKeywords: v, valueKeywords: b, fontProperties: h, allowNested: true, lineComment: `//`, tokenHooks: { "/": function(e2, t2) {
  return e2.eat(`/`) ? (e2.skipToEnd(), [`comment`, `comment`]) : e2.eat(`*`) ? (t2.tokenize = T, T(e2, t2)) : [`operator`, `operator`];
}, ":": function(e2) {
  return e2.match(/^\s*\{/, false) ? [null, null] : false;
}, $: function(e2) {
  return e2.match(/^[\w-]+/), e2.match(/^\s*:/, false) ? [`def`, `variable-definition`] : [`variableName.special`, `variable`];
}, "#": function(e2) {
  return e2.eat(`{`) ? [null, `interpolation`] : false;
} } }), D = e({ name: `less`, mediaTypes: a, mediaFeatures: s, mediaValueKeywords: l, propertyKeywords: d, nonStandardPropertyKeywords: p, colorKeywords: v, valueKeywords: b, fontProperties: h, allowNested: true, lineComment: `//`, tokenHooks: { "/": function(e2, t2) {
  return e2.eat(`/`) ? (e2.skipToEnd(), [`comment`, `comment`]) : e2.eat(`*`) ? (t2.tokenize = T, T(e2, t2)) : [`operator`, `operator`];
}, "@": function(e2) {
  return e2.eat(`{`) ? [null, `interpolation`] : e2.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false) ? false : (e2.eatWhile(/[\w\\\-]/), e2.match(/^\s*:/, false) ? [`def`, `variable-definition`] : [`variableName`, `variable`]);
}, "&": function() {
  return [`atom`, `atom`];
} } }), O = e({ name: `gss`, documentTypes: r, mediaTypes: a, mediaFeatures: s, propertyKeywords: d, nonStandardPropertyKeywords: p, fontProperties: h, counterDescriptors: g, colorKeywords: v, valueKeywords: b, supportsAtComponent: true, tokenHooks: { "/": function(e2, t2) {
  return e2.eat(`*`) ? (t2.tokenize = T, T(e2, t2)) : false;
} } });
export {
  w as css,
  O as gss,
  S as keywords,
  D as less,
  e as mkCSS,
  E as sCSS
};
