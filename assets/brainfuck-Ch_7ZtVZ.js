var e = `><+-.,[]`.split(``);
const t = { name: `brainfuck`, startState: function() {
  return { commentLine: false, left: 0, right: 0, commentLoop: false };
}, token: function(t2, n) {
  if (t2.eatSpace()) return null;
  t2.sol() && (n.commentLine = false);
  var r = t2.next().toString();
  if (e.indexOf(r) !== -1) {
    if (n.commentLine === true) return t2.eol() && (n.commentLine = false), `comment`;
    if (r === `]` || r === `[`) return r === `[` ? n.left++ : n.right++, `bracket`;
    if (r === `+` || r === `-`) return `keyword`;
    if (r === `<` || r === `>`) return `atom`;
    if (r === `.` || r === `,`) return `def`;
  } else return n.commentLine = true, t2.eol() && (n.commentLine = false), `comment`;
  t2.eol() && (n.commentLine = false);
} };
export {
  t as brainfuck
};
