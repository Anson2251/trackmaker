function e(e2) {
  for (var t2 = {}, n2 = e2.split(`,`), r2 = 0; r2 < n2.length; ++r2) {
    var i2 = n2[r2].toUpperCase(), a2 = n2[r2].charAt(0).toUpperCase() + n2[r2].slice(1);
    t2[n2[r2]] = true, t2[i2] = true, t2[a2] = true;
  }
  return t2;
}
function t(e2) {
  return e2.eatWhile(/[\w\$_]/), `meta`;
}
var n = e(`null`), r = { "`": t, $: t }, i = false, a = e(`abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor`), o = e(`architecture,entity,begin,case,port,else,elsif,end,for,function,if`), s = /[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/, c;
function l(e2, t2) {
  var i2 = e2.next();
  if (r[i2]) {
    var l2 = r[i2](e2, t2);
    if (l2 !== false) return l2;
  }
  if (i2 == `"`) return t2.tokenize = d(i2), t2.tokenize(e2, t2);
  if (i2 == `'`) return t2.tokenize = u(i2), t2.tokenize(e2, t2);
  if (/[\[\]{}\(\),;\:\.]/.test(i2)) return c = i2, null;
  if (/[\d']/.test(i2)) return e2.eatWhile(/[\w\.']/), `number`;
  if (i2 == `-` && e2.eat(`-`)) return e2.skipToEnd(), `comment`;
  if (s.test(i2)) return e2.eatWhile(s), `operator`;
  e2.eatWhile(/[\w\$_]/);
  var f2 = e2.current();
  return a.propertyIsEnumerable(f2.toLowerCase()) ? (o.propertyIsEnumerable(f2) && (c = `newstatement`), `keyword`) : n.propertyIsEnumerable(f2) ? `atom` : `variable`;
}
function u(e2) {
  return function(t2, n2) {
    for (var r2 = false, a2, o2 = false; (a2 = t2.next()) != null; ) {
      if (a2 == e2 && !r2) {
        o2 = true;
        break;
      }
      r2 = !r2 && a2 == `--`;
    }
    return (o2 || !(r2 || i)) && (n2.tokenize = l), `string`;
  };
}
function d(e2) {
  return function(t2, n2) {
    for (var r2 = false, a2, o2 = false; (a2 = t2.next()) != null; ) {
      if (a2 == e2 && !r2) {
        o2 = true;
        break;
      }
      r2 = !r2 && a2 == `--`;
    }
    return (o2 || !(r2 || i)) && (n2.tokenize = l), `string.special`;
  };
}
function f(e2, t2, n2, r2, i2) {
  this.indented = e2, this.column = t2, this.type = n2, this.align = r2, this.prev = i2;
}
function p(e2, t2, n2) {
  return e2.context = new f(e2.indented, t2, n2, null, e2.context);
}
function m(e2) {
  var t2 = e2.context.type;
  return (t2 == `)` || t2 == `]` || t2 == `}`) && (e2.indented = e2.context.indented), e2.context = e2.context.prev;
}
const h = { name: `vhdl`, startState: function(e2) {
  return { tokenize: null, context: new f(-e2, 0, `top`, false), indented: 0, startOfLine: true };
}, token: function(e2, t2) {
  var n2 = t2.context;
  if (e2.sol() && (n2.align ?? (n2.align = false), t2.indented = e2.indentation(), t2.startOfLine = true), e2.eatSpace()) return null;
  c = null;
  var r2 = (t2.tokenize || l)(e2, t2);
  if (r2 == `comment` || r2 == `meta`) return r2;
  if (n2.align ?? (n2.align = true), (c == `;` || c == `:`) && n2.type == `statement`) m(t2);
  else if (c == `{`) p(t2, e2.column(), `}`);
  else if (c == `[`) p(t2, e2.column(), `]`);
  else if (c == `(`) p(t2, e2.column(), `)`);
  else if (c == `}`) {
    for (; n2.type == `statement`; ) n2 = m(t2);
    for (n2.type == `}` && (n2 = m(t2)); n2.type == `statement`; ) n2 = m(t2);
  } else c == n2.type ? m(t2) : (n2.type == `}` || n2.type == `top` || n2.type == `statement` && c == `newstatement`) && p(t2, e2.column(), `statement`);
  return t2.startOfLine = false, r2;
}, indent: function(e2, t2, n2) {
  if (e2.tokenize != l && e2.tokenize != null) return 0;
  var r2 = t2 && t2.charAt(0), i2 = e2.context, a2 = r2 == i2.type;
  return i2.type == `statement` ? i2.indented + (r2 == `{` ? 0 : n2.unit) : i2.align ? i2.column + (a2 ? 0 : 1) : i2.indented + (a2 ? 0 : n2.unit);
}, languageData: { indentOnInput: /^\s*[{}]$/, commentTokens: { line: `--` } } };
export {
  h as vhdl
};
