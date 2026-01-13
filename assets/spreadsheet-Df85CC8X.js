const e = { name: `spreadsheet`, startState: function() {
  return { stringType: null, stack: [] };
}, token: function(e2, t) {
  if (e2) {
    switch (t.stack.length === 0 && (e2.peek() == `"` || e2.peek() == `'`) && (t.stringType = e2.peek(), e2.next(), t.stack.unshift(`string`)), t.stack[0]) {
      case `string`:
        for (; t.stack[0] === `string` && !e2.eol(); ) e2.peek() === t.stringType ? (e2.next(), t.stack.shift()) : e2.peek() === `\\` ? (e2.next(), e2.next()) : e2.match(/^.[^\\\"\']*/);
        return `string`;
      case `characterClass`:
        for (; t.stack[0] === `characterClass` && !e2.eol(); ) e2.match(/^[^\]\\]+/) || e2.match(/^\\./) || t.stack.shift();
        return `operator`;
    }
    var n = e2.peek();
    switch (n) {
      case `[`:
        return e2.next(), t.stack.unshift(`characterClass`), `bracket`;
      case `:`:
        return e2.next(), `operator`;
      case `\\`:
        return e2.match(/\\[a-z]+/) ? `string.special` : (e2.next(), `atom`);
      case `.`:
      case `,`:
      case `;`:
      case `*`:
      case `-`:
      case `+`:
      case `^`:
      case `<`:
      case `/`:
      case `=`:
        return e2.next(), `atom`;
      case `$`:
        return e2.next(), `builtin`;
    }
    return e2.match(/\d+/) ? e2.match(/^\w+/) ? `error` : `number` : e2.match(/^[a-zA-Z_]\w*/) ? e2.match(/(?=[\(.])/, false) ? `keyword` : `variable` : [`[`, `]`, `(`, `)`, `{`, `}`].indexOf(n) == -1 ? (e2.eatSpace() || e2.next(), null) : (e2.next(), `bracket`);
  }
} };
export {
  e as spreadsheet
};
