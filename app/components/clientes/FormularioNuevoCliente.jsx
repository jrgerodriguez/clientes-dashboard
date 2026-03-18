import BotonAccion from "../ui/BotonAccion";
import { FaAddressBook } from "react-icons/fa";

export default function FormularioNuevoCliente({ onSubmit, isSubmitting, error, onChange }) {
  return (
    <form onSubmit={onSubmit} onChange={onChange} className="space-y-5">
      
      <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
          <FaAddressBook size={20} className="text-white"/>
        </div>
        <h3 className="font-bold text-gray-900 text-lg">
          Información del Cliente
        </h3>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Nombre Completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="nombre"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                     text-gray-900 placeholder-gray-400"
          placeholder="Ej: María González López"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                       text-gray-900 placeholder-gray-400"
            placeholder="71234567"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                       text-gray-900 placeholder-gray-400"
            placeholder="ejemplo@correo.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Dirección
        </label>
        <input
          type="text"
          name="direccion"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                     text-gray-900 placeholder-gray-400"
          placeholder="Ej: Calle Los Jazmines, Pasaje 2, Casa #9"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Notas
        </label>
        <textarea
          name="notas"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                     text-gray-900 placeholder-gray-400"
          placeholder="Información adicional sobre el cliente..."
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-600 font-medium">
            {error}
          </p>
        </div>
      )}

      <BotonAccion texto={isSubmitting ? "Registrando..." : "Registrar Cliente"} disabled={isSubmitting}/>
    </form>
  );
}
