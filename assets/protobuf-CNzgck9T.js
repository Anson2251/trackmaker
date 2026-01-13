function e(e2) {
  return RegExp(`^((` + e2.join(`)|(`) + `))\\b`, `i`);
}
var t = `package.message.import.syntax.required.optional.repeated.reserved.default.extensions.packed.bool.bytes.double.enum.float.string.int32.int64.uint32.uint64.sint32.sint64.fixed32.fixed64.sfixed32.sfixed64.option.service.rpc.returns`.split(`.`), n = e(t), r = RegExp(`^[_A-Za-z\xA1-\uFFFF][_A-Za-z0-9\xA1-\uFFFF]*`);
function i(e2) {
  return e2.eatSpace() ? null : e2.match(`//`) ? (e2.skipToEnd(), `comment`) : e2.match(/^[0-9\.+-]/, false) && (e2.match(/^[+-]?0x[0-9a-fA-F]+/) || e2.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/) || e2.match(/^[+-]?\d+([EeDd][+-]?\d+)?/)) ? `number` : e2.match(/^"([^"]|(""))*"/) || e2.match(/^'([^']|(''))*'/) ? `string` : e2.match(n) ? `keyword` : e2.match(r) ? `variable` : (e2.next(), null);
}
const a = { name: `protobuf`, token: i, languageData: { autocomplete: t } };
export {
  a as protobuf
};
