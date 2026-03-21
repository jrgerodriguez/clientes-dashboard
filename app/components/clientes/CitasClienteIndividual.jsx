import { FiCalendar, FiClock, FiPlus, FiEdit } from 'react-icons/fi'

const CitasClienteIndividual = ({ citas }) => {

  const formatearFecha = (fecha) => {
    return new Date(fecha + 'T00:00:00').toLocaleDateString('es-SV', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatearHora = (hora) => {
    const [h, m] = hora.split(':')
    const date = new Date()
    date.setHours(h, m)
    return date.toLocaleTimeString('es-SV', { hour: '2-digit', minute: '2-digit' })
  }

  const estadoStyle = (estado) => {
    return estado === 'completado'
      ? 'bg-green-100 text-green-700'
      : 'bg-yellow-100 text-yellow-700'
  }

  const metodoPagoLabel = {
    efectivo: 'Efectivo',
    tarjeta: 'Tarjeta',
    transferencia: 'Transferencia'
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 lg:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
            <FiCalendar className="text-orange-600" size={18} />
          </div>
          Citas
        </h2>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors">
          <FiPlus size={16} />
          Nueva Cita
        </button>
      </div>

      {citas.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-8 text-gray-400">
          <FiCalendar size={40} className="text-gray-300" />
          <p className="font-medium">No hay citas registradas</p>
          <p className="text-sm">Agrega una nueva cita para este cliente</p>
        </div>
      ) : (
        <div className="space-y-3">
          {citas.map(cita => (
            <div key={cita.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-orange-50 text-orange-600">
                  <FiCalendar size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 capitalize">
                    {formatearFecha(cita.fecha)}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                    <FiClock size={12} />
                    <span>{formatearHora(cita.hora_inicio)} — {cita.duracion} min</span>
                  </div>
                  {cita.notas && (
                    <p className="text-xs text-gray-400 mt-1">{cita.notas}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full capitalize ${estadoStyle(cita.estado)}`}>
                    {cita.estado}
                  </span>
                  {cita.metodo_pago && (
                    <span className="text-xs text-gray-500">
                      {metodoPagoLabel[cita.metodo_pago]}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  title="Editar cita"
                >
                  <FiEdit size={16} />
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