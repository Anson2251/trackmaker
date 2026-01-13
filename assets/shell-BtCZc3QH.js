var e = {};
function t(t2, n2) {
  for (var r2 = 0; r2 < n2.length; r2++) e[n2[r2]] = t2;
}
var n = [`true`, `false`], r = [`if`, `then`, `do`, `else`, `elif`, `while`, `until`, `for`, `in`, `esac`, `fi`, `fin`, `fil`, `done`, `exit`, `set`, `unset`, `export`, `function`], i = `ab.awk.bash.beep.cat.cc.cd.chown.chmod.chroot.clear.cp.curl.cut.diff.echo.find.gawk.gcc.get.git.grep.hg.kill.killall.ln.ls.make.mkdir.openssl.mv.nc.nl.node.npm.ping.ps.restart.rm.rmdir.sed.service.sh.shopt.shred.source.sort.sleep.ssh.start.stop.su.sudo.svn.tee.telnet.top.touch.vi.vim.wall.wc.wget.who.write.yes.zsh`.split(`.`);
t(`atom`, n), t(`keyword`, r), t(`builtin`, i);
function a(t2, n2) {
  if (t2.eatSpace()) return null;
  var r2 = t2.sol(), i2 = t2.next();
  if (i2 === `\\`) return t2.next(), null;
  if (i2 === `'` || i2 === `"` || i2 === "`") return n2.tokens.unshift(o(i2, i2 === "`" ? `quote` : `string`)), u(t2, n2);
  if (i2 === `#`) return r2 && t2.eat(`!`) ? (t2.skipToEnd(), `meta`) : (t2.skipToEnd(), `comment`);
  if (i2 === `$`) return n2.tokens.unshift(c), u(t2, n2);
  if (i2 === `+` || i2 === `=`) return `operator`;
  if (i2 === `-`) return t2.eat(`-`), t2.eatWhile(/\w/), `attribute`;
  if (i2 == `<`) {
    if (t2.match(`<<`)) return `operator`;
    var a2 = t2.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);
    if (a2) return n2.tokens.unshift(l(a2[1] || a2[2])), `string.special`;
  }
  if (/\d/.test(i2) && (t2.eatWhile(/\d/), t2.eol() || !/\w/.test(t2.peek()))) return `number`;
  t2.eatWhile(/[\w-]/);
  var s2 = t2.current();
  return t2.peek() === `=` && /\w+/.test(s2) ? `def` : e.hasOwnProperty(s2) ? e[s2] : null;
}
function o(e2, t2) {
  var n2 = e2 == `(` ? `)` : e2 == `{` ? `}` : e2;
  return function(r2, i2) {
    for (var a2, l2 = false; (a2 = r2.next()) != null; ) {
      if (a2 === n2 && !l2) {
        i2.tokens.shift();
        break;
      } else if (a2 === `$` && !l2 && e2 !== `'` && r2.peek() != n2) {
        l2 = true, r2.backUp(1), i2.tokens.unshift(c);
        break;
      } else if (!l2 && e2 !== n2 && a2 === e2) return i2.tokens.unshift(o(e2, t2)), u(r2, i2);
      else if (!l2 && /['"]/.test(a2) && !/['"]/.test(e2)) {
        i2.tokens.unshift(s(a2, `string`)), r2.backUp(1);
        break;
      }
      l2 = !l2 && a2 === `\\`;
    }
    return t2;
  };
}
function s(e2, t2) {
  return function(n2, r2) {
    return r2.tokens[0] = o(e2, t2), n2.next(), u(n2, r2);
  };
}
var c = function(e2, t2) {
  t2.tokens.length > 1 && e2.eat(`$`);
  var n2 = e2.next();
  return /['"({]/.test(n2) ? (t2.tokens[0] = o(n2, n2 == `(` ? `quote` : n2 == `{` ? `def` : `string`), u(e2, t2)) : (/\d/.test(n2) || e2.eatWhile(/\w/), t2.tokens.shift(), `def`);
};
function l(e2) {
  return function(t2, n2) {
    return t2.sol() && t2.string == e2 && n2.tokens.shift(), t2.skipToEnd(), `string.special`;
  };
}
function u(e2, t2) {
  return (t2.tokens[0] || a)(e2, t2);
}
const d = { name: `shell`, startState: function() {
  return { tokens: [] };
}, token: function(e2, t2) {
  return u(e2, t2);
}, languageData: { autocomplete: n.concat(r, i), closeBrackets: { brackets: [`(`, `[`, `{`, `'`, `"`, "`"] }, commentTokens: { line: `#` } } };
export {
  d as shell
};
