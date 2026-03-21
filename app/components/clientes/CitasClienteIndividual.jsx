import { FiCalendar, FiClock, FiPlus, FiEdit } from 'react-icons/fi'

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
          {citas.map(cita => (
            <div
              key={cita.id}
              className="flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <FiCalendar className="text-blue-500" size={17} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 capitalize">
                    {formatearFecha(cita.fecha)}
                  </p>
                  <div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
                    <FiClock size={11} />
                    <span>{formatearHora(cita.hora_inicio)} · {cita.duracion} min</span>
                  </div>
                  {cita.notas && (
                    <p className="text-xs text-slate-400 mt-0.5">{cita.notas}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end gap-1.5">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${estadoBadge(cita.estado)}`}>
                    {cita.estado}
                  </span>
                  {cita.metodo_pago && (
                    <span className="text-xs text-slate-400">{metodoPagoLabel[cita.metodo_pago]}</span>
                  )}
                </div>
                <button
                  type="button"
                  className="p-1.5 rounded-lg text-slate-300 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                  title="Editar cita"
                >
                  <FiEdit size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CitasClienteIndividual