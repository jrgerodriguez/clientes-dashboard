import { FiCalendar, FiClock, FiPlus, FiEdit, FiCreditCard, FiDollarSign, FiRepeat, FiTrash2 } from 'react-icons/fi'

const CitasClienteIndividual = ({ citas }) => {

  const formatearFecha = (fecha) => {
    return new Date(fecha + 'T00:00:00').toLocaleDateString('es-SV', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  const formatearHora = (hora) => {
    const [h, m] = hora.split(':')
    const date = new Date()
    date.setHours(h, m)
    return date.toLocaleTimeString('es-SV', { hour: '2-digit', minute: '2-digit' })
  }

  const estadoBadge = (estado) =>
    estado === 'completado'
      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
      : 'bg-amber-50 text-amber-700 border border-amber-200'

  const PagoIcono = ({ metodo }) => {
    if (metodo === 'tarjeta') return <FiCreditCard size={10} className="text-blue-500" />
    if (metodo === 'transferencia') return <FiRepeat size={10} className="text-indigo-500" />
    return <FiDollarSign size={10} className="text-emerald-500" />
  }

  const metodoPagoLabel = { efectivo: 'Efectivo', tarjeta: 'Tarjeta', transferencia: 'Transferencia' }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 lg:col-span-2">


      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
            <FiCalendar className="text-blue-600" size={15} />
          </div>
          Citas
        </h2>
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm">
          <FiPlus size={14} />
          Nueva Cita
        </button>
      </div>

      {citas.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-10 text-slate-400">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
            <FiCalendar size={22} className="text-slate-400" />
          </div>
          <p className="text-sm font-medium text-slate-600">No hay citas registradas</p>
          <p className="text-xs text-slate-400">Agrega una nueva cita para este cliente</p>
        </div>
      ) : (
        <div className="space-y-2">
          {citas.map(cita => {
            const fechaObj = new Date(cita.fecha + 'T00:00:00')
            const dia = fechaObj.getDate()
            const mes = fechaObj.toLocaleDateString('es-SV', { month: 'short' }).replace('.', '')
            const anio = fechaObj.getFullYear()
            const completado = cita.estado === 'completado'

            return (
              <div
                key={cita.id}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/60 transition-all duration-150 group"
              >
                {/* Mini-calendario + info */}
                <div className="flex items-center gap-4">

                  {/* Badge de fecha con Dia, Mes y Año */}
                  <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl shrink-0 border py-1.5
                    ${completado ? 'bg-emerald-50 border-emerald-200' : 'bg-blue-50 border-blue-200'}`}
                  >
                    <span className={`text-[9px] font-bold uppercase tracking-tight ${completado ? 'text-emerald-500' : 'text-blue-400'}`}>
                      {mes}
                    </span>
                    <span className={`text-lg font-bold leading-none my-0.5 ${completado ? 'text-emerald-700' : 'text-blue-700'}`}>
                      {dia}
                    </span>
                    <span className={`text-[8px] font-semibold ${completado ? 'text-emerald-400' : 'text-blue-300'}`}>
                      {anio}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                        <FiClock size={12} className="text-slate-400" />
                        {formatearHora(cita.hora_inicio)}
                      </span>
                      <span className="text-slate-300 text-xs">·</span>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {cita.duracion} min
                      </span>
                      {cita.metodo_pago && (
                        <>
                          <span className="text-slate-300 text-xs">·</span>
                          <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 bg-slate-50 px-2 py-1 rounded-lg">
                            <PagoIcono metodo={cita.metodo_pago} />
                            {metodoPagoLabel[cita.metodo_pago]}
                          </span>
                        </>
                      )}
                    </div>
                    {cita.notas && (
                      <p className="text-xs text-slate-400 mt-1.5 line-clamp-1">{cita.notas}</p>
                    )}
                  </div>
                </div>

                {/* Acciones: Editar + Eliminar */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${estadoBadge(cita.estado)} mr-1`}>
                    {cita.estado}
                  </span>

                  {/* Botón Editar */}
                  <button
                    type="button"
                    title="Editar cita"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-150"
                  >
                    <FiEdit size={14} />
                  </button>

                  {/* Botón Eliminar */}
                  <button
                    type="button"
                    title="Eliminar cita"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all duration-150"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CitasClienteIndividual