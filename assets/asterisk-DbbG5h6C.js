var e = [`exten`, `same`, `include`, `ignorepat`, `switch`], t = [`#include`, `#exec`], n = `addqueuemember.adsiprog.aelsub.agentlogin.agentmonitoroutgoing.agi.alarmreceiver.amd.answer.authenticate.background.backgrounddetect.bridge.busy.callcompletioncancel.callcompletionrequest.celgenuserevent.changemonitor.chanisavail.channelredirect.chanspy.clearhash.confbridge.congestion.continuewhile.controlplayback.dahdiacceptr2call.dahdibarge.dahdiras.dahdiscan.dahdisendcallreroutingfacility.dahdisendkeypadfacility.datetime.dbdel.dbdeltree.deadagi.dial.dictate.directory.disa.dumpchan.eagi.echo.endwhile.exec.execif.execiftime.exitwhile.extenspy.externalivr.festival.flash.followme.forkcdr.getcpeid.gosub.gosubif.goto.gotoif.gotoiftime.hangup.iax2provision.ices.importvar.incomplete.ivrdemo.jabberjoin.jabberleave.jabbersend.jabbersendgroup.jabberstatus.jack.log.macro.macroexclusive.macroexit.macroif.mailboxexists.meetme.meetmeadmin.meetmechanneladmin.meetmecount.milliwatt.minivmaccmess.minivmdelete.minivmgreet.minivmmwi.minivmnotify.minivmrecord.mixmonitor.monitor.morsecode.mp3player.mset.musiconhold.nbscat.nocdr.noop.odbc.odbc.odbcfinish.originate.ospauth.ospfinish.osplookup.ospnext.page.park.parkandannounce.parkedcall.pausemonitor.pausequeuemember.pickup.pickupchan.playback.playtones.privacymanager.proceeding.progress.queue.queuelog.raiseexception.read.readexten.readfile.receivefax.receivefax.receivefax.record.removequeuemember.resetcdr.retrydial.return.ringing.sayalpha.saycountedadj.saycountednoun.saycountpl.saydigits.saynumber.sayphonetic.sayunixtime.senddtmf.sendfax.sendfax.sendfax.sendimage.sendtext.sendurl.set.setamaflags.setcallerpres.setmusiconhold.sipaddheader.sipdtmfmode.sipremoveheader.skel.slastation.slatrunk.sms.softhangup.speechactivategrammar.speechbackground.speechcreate.speechdeactivategrammar.speechdestroy.speechloadgrammar.speechprocessingsound.speechstart.speechunloadgrammar.stackpop.startmusiconhold.stopmixmonitor.stopmonitor.stopmusiconhold.stopplaytones.system.testclient.testserver.transfer.tryexec.trysystem.unpausemonitor.unpausequeuemember.userevent.verbose.vmauthenticate.vmsayname.voicemail.voicemailmain.wait.waitexten.waitfornoise.waitforring.waitforsilence.waitmusiconhold.waituntil.while.zapateller`.split(`.`);
function r(n2, r2) {
  var i2 = ``, a = n2.next();
  if (r2.blockComment) return a == `-` && n2.match(`-;`, true) ? r2.blockComment = false : n2.skipTo(`--;`) ? (n2.next(), n2.next(), n2.next(), r2.blockComment = false) : n2.skipToEnd(), `comment`;
  if (a == `;`) return n2.match(`--`, true) && !n2.match(`-`, false) ? (r2.blockComment = true, `comment`) : (n2.skipToEnd(), `comment`);
  if (a == `[`) return n2.skipTo(`]`), n2.eat(`]`), `header`;
  if (a == `"`) return n2.skipTo(`"`), `string`;
  if (a == `'`) return n2.skipTo(`'`), `string.special`;
  if (a == `#` && (n2.eatWhile(/\w/), i2 = n2.current(), t.indexOf(i2) !== -1)) return n2.skipToEnd(), `strong`;
  if (a == `$` && n2.peek() == `{`) return n2.skipTo(`}`), n2.eat(`}`), `variableName.special`;
  if (n2.eatWhile(/\w/), i2 = n2.current(), e.indexOf(i2) !== -1) {
    switch (r2.extenStart = true, i2) {
      case `same`:
        r2.extenSame = true;
        break;
      case `include`:
      case `switch`:
      case `ignorepat`:
        r2.extenInclude = true;
        break;
      default:
        break;
    }
    return `atom`;
  }
}
const i = { name: `asterisk`, startState: function() {
  return { blockComment: false, extenStart: false, extenSame: false, extenInclude: false, extenExten: false, extenPriority: false, extenApplication: false };
}, token: function(e2, t2) {
  var i2 = ``;
  if (e2.eatSpace()) return null;
  if (t2.extenStart) return e2.eatWhile(/[^\s]/), i2 = e2.current(), /^=>?$/.test(i2) ? (t2.extenExten = true, t2.extenStart = false, `strong`) : (t2.extenStart = false, e2.skipToEnd(), `error`);
  if (t2.extenExten) return t2.extenExten = false, t2.extenPriority = true, e2.eatWhile(/[^,]/), t2.extenInclude && (t2.extenInclude = (e2.skipToEnd(), t2.extenPriority = false, false)), t2.extenSame && (t2.extenPriority = false, t2.extenSame = false, t2.extenApplication = true), `tag`;
  if (t2.extenPriority) return t2.extenPriority = false, t2.extenApplication = true, e2.next(), t2.extenSame ? null : (e2.eatWhile(/[^,]/), `number`);
  if (t2.extenApplication) {
    if (e2.eatWhile(/,/), i2 = e2.current(), i2 === `,`) return null;
    if (e2.eatWhile(/\w/), i2 = e2.current().toLowerCase(), t2.extenApplication = false, n.indexOf(i2) !== -1) return `def`;
  } else return r(e2, t2);
  return null;
}, languageData: { commentTokens: { line: `;`, block: { open: `;--`, close: `--;` } } } };
export {
  i as asterisk
};
