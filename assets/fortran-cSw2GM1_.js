function e(e2) {
  for (var t2 = {}, n2 = 0; n2 < e2.length; ++n2) t2[e2[n2]] = true;
  return t2;
}
var t = e(`abstract.accept.allocatable.allocate.array.assign.asynchronous.backspace.bind.block.byte.call.case.class.close.common.contains.continue.cycle.data.deallocate.decode.deferred.dimension.do.elemental.else.encode.end.endif.entry.enumerator.equivalence.exit.external.extrinsic.final.forall.format.function.generic.go.goto.if.implicit.import.include.inquire.intent.interface.intrinsic.module.namelist.non_intrinsic.non_overridable.none.nopass.nullify.open.optional.options.parameter.pass.pause.pointer.print.private.program.protected.public.pure.read.recursive.result.return.rewind.save.select.sequence.stop.subroutine.target.then.to.type.use.value.volatile.where.while.write`.split(`.`)), n = e(`abort.abs.access.achar.acos.adjustl.adjustr.aimag.aint.alarm.all.allocated.alog.amax.amin.amod.and.anint.any.asin.associated.atan.besj.besjn.besy.besyn.bit_size.btest.cabs.ccos.ceiling.cexp.char.chdir.chmod.clog.cmplx.command_argument_count.complex.conjg.cos.cosh.count.cpu_time.cshift.csin.csqrt.ctime.c_funloc.c_loc.c_associated.c_null_ptr.c_null_funptr.c_f_pointer.c_null_char.c_alert.c_backspace.c_form_feed.c_new_line.c_carriage_return.c_horizontal_tab.c_vertical_tab.dabs.dacos.dasin.datan.date_and_time.dbesj.dbesj.dbesjn.dbesy.dbesy.dbesyn.dble.dcos.dcosh.ddim.derf.derfc.dexp.digits.dim.dint.dlog.dlog.dmax.dmin.dmod.dnint.dot_product.dprod.dsign.dsinh.dsin.dsqrt.dtanh.dtan.dtime.eoshift.epsilon.erf.erfc.etime.exit.exp.exponent.extends_type_of.fdate.fget.fgetc.float.floor.flush.fnum.fputc.fput.fraction.fseek.fstat.ftell.gerror.getarg.get_command.get_command_argument.get_environment_variable.getcwd.getenv.getgid.getlog.getpid.getuid.gmtime.hostnm.huge.iabs.iachar.iand.iargc.ibclr.ibits.ibset.ichar.idate.idim.idint.idnint.ieor.ierrno.ifix.imag.imagpart.index.int.ior.irand.isatty.ishft.ishftc.isign.iso_c_binding.is_iostat_end.is_iostat_eor.itime.kill.kind.lbound.len.len_trim.lge.lgt.link.lle.llt.lnblnk.loc.log.logical.long.lshift.lstat.ltime.matmul.max.maxexponent.maxloc.maxval.mclock.merge.move_alloc.min.minexponent.minloc.minval.mod.modulo.mvbits.nearest.new_line.nint.not.or.pack.perror.precision.present.product.radix.rand.random_number.random_seed.range.real.realpart.rename.repeat.reshape.rrspacing.rshift.same_type_as.scale.scan.second.selected_int_kind.selected_real_kind.set_exponent.shape.short.sign.signal.sinh.sin.sleep.sngl.spacing.spread.sqrt.srand.stat.sum.symlnk.system.system_clock.tan.tanh.time.tiny.transfer.transpose.trim.ttynam.ubound.umask.unlink.unpack.verify.xor.zabs.zcos.zexp.zlog.zsin.zsqrt`.split(`.`)), r = e(`c_bool.c_char.c_double.c_double_complex.c_float.c_float_complex.c_funptr.c_int.c_int16_t.c_int32_t.c_int64_t.c_int8_t.c_int_fast16_t.c_int_fast32_t.c_int_fast64_t.c_int_fast8_t.c_int_least16_t.c_int_least32_t.c_int_least64_t.c_int_least8_t.c_intmax_t.c_intptr_t.c_long.c_long_double.c_long_double_complex.c_long_long.c_ptr.c_short.c_signed_char.c_size_t.character.complex.double.integer.logical.real`.split(`.`)), i = /[+\-*&=<>\/\:]/, a = /^\.(and|or|eq|lt|le|gt|ge|ne|not|eqv|neqv)\./i;
function o(e2, o2) {
  if (e2.match(a)) return `operator`;
  var c2 = e2.next();
  if (c2 == `!`) return e2.skipToEnd(), `comment`;
  if (c2 == `"` || c2 == `'`) return o2.tokenize = s(c2), o2.tokenize(e2, o2);
  if (/[\[\]\(\),]/.test(c2)) return null;
  if (/\d/.test(c2)) return e2.eatWhile(/[\w\.]/), `number`;
  if (i.test(c2)) return e2.eatWhile(i), `operator`;
  e2.eatWhile(/[\w\$_]/);
  var l = e2.current().toLowerCase();
  return t.hasOwnProperty(l) ? `keyword` : n.hasOwnProperty(l) || r.hasOwnProperty(l) ? `builtin` : `variable`;
}
function s(e2) {
  return function(t2, n2) {
    for (var r2 = false, i2, a2 = false; (i2 = t2.next()) != null; ) {
      if (i2 == e2 && !r2) {
        a2 = true;
        break;
      }
      r2 = !r2 && i2 == `\\`;
    }
    return (a2 || !r2) && (n2.tokenize = null), `string`;
  };
}
const c = { name: `fortran`, startState: function() {
  return { tokenize: null };
}, token: function(e2, t2) {
  return e2.eatSpace() ? null : (t2.tokenize || o)(e2, t2);
} };
export {
  c as fortran
};
