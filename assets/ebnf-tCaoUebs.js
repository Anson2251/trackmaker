var e = { slash: 0, parenthesis: 1 }, t = { comment: 0, _string: 1, characterClass: 2 };
const n = { name: `ebnf`, startState: function() {
  return { stringType: null, commentType: null, braced: 0, lhs: true, localState: null, stack: [], inDefinition: false };
}, token: function(n2, r) {
  if (n2) {
    switch (r.stack.length === 0 && (n2.peek() == `"` || n2.peek() == `'` ? (r.stringType = n2.peek(), n2.next(), r.stack.unshift(t._string)) : n2.match(`/*`) ? (r.stack.unshift(t.comment), r.commentType = e.slash) : n2.match(`(*`) && (r.stack.unshift(t.comment), r.commentType = e.parenthesis)), r.stack[0]) {
      case t._string:
        for (; r.stack[0] === t._string && !n2.eol(); ) n2.peek() === r.stringType ? (n2.next(), r.stack.shift()) : n2.peek() === `\\` ? (n2.next(), n2.next()) : n2.match(/^.[^\\\"\']*/);
        return r.lhs ? `property` : `string`;
      case t.comment:
        for (; r.stack[0] === t.comment && !n2.eol(); ) r.commentType === e.slash && n2.match(`*/`) || r.commentType === e.parenthesis && n2.match(`*)`) ? (r.stack.shift(), r.commentType = null) : n2.match(/^.[^\*]*/);
        return `comment`;
      case t.characterClass:
        for (; r.stack[0] === t.characterClass && !n2.eol(); ) n2.match(/^[^\]\\]+/) || n2.match(`.`) || r.stack.shift();
        return `operator`;
    }
    var i = n2.peek();
    switch (i) {
      case `[`:
        return n2.next(), r.stack.unshift(t.characterClass), `bracket`;
      case `:`:
      case `|`:
      case `;`:
        return n2.next(), `operator`;
      case `%`:
        if (n2.match(`%%`)) return `header`;
        if (n2.match(/[%][A-Za-z]+/)) return `keyword`;
        if (n2.match(/[%][}]/)) return `bracket`;
        break;
      case `/`:
        if (n2.match(/[\/][A-Za-z]+/)) return `keyword`;
      case `\\`:
        if (n2.match(/[\][a-z]+/)) return `string.special`;
      case `.`:
        if (n2.match(`.`)) return `atom`;
      case `*`:
      case `-`:
      case `+`:
      case `^`:
        if (n2.match(i)) return `atom`;
      case `$`:
        if (n2.match(`$$`)) return `builtin`;
        if (n2.match(/[$][0-9]+/)) return `variableName.special`;
      case `<`:
        if (n2.match(/<<[a-zA-Z_]+>>/)) return `builtin`;
    }
    return n2.match(`//`) ? (n2.skipToEnd(), `comment`) : n2.match(`return`) ? `operator` : n2.match(/^[a-zA-Z_][a-zA-Z0-9_]*/) ? n2.match(/(?=[\(.])/) ? `variable` : n2.match(/(?=[\s\n]*[:=])/) ? `def` : `variableName.special` : [`[`, `]`, `(`, `)`].indexOf(n2.peek()) == -1 ? (n2.eatSpace() || n2.next(), null) : (n2.next(), `bracket`);
  }
} };
export {
  n as ebnf
};
