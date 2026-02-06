import BotonAccion from "../ui/BotonAccion";
import { FaAddressBook   } from "react-icons/fa";

export default function FormularioNuevoCliente({ onSubmit, isSubmitting, error, onChange }) {
  return (
    <form onSubmit={onSubmit} onChange={onChange} className="">
      <div className="space-y-4">
        <div className="flex gap-2">
          <FaAddressBook size={20} className="text-gray-800 hover:bg-gray-100"/>
          <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
            Información Personal
          </h3>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre Completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            required
            className="
            w-full px-4 py-2
            border border-gray-300 rounded-md
            focus:outline-none
            focus:border-transparent
            focus:ring-2 focus:ring-gray-800
          "
            placeholder="Ej: María González López"
          />
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  className="
                  w-full px-4 py-2
                  border border-gray-300 rounded-md
                  focus:outline-none
                  focus:border-transparent
                  focus:ring-2 focus:ring-gray-800
                "
                  placeholder="71234567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  className="
                  w-full px-4 py-2
                  border border-gray-300 rounded-md
                  focus:outline-none
                  focus:border-transparent
                  focus:ring-2 focus:ring-gray-800
                "
                  placeholder="ejemplo@correo.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección
              </label>
              <input
                type="text"
                name="direccion"
                required
                className="
                w-full px-4 py-2
                border border-gray-300 rounded-md
                focus:outline-none
                focus:border-transparent
                focus:ring-2 focus:ring-gray-800
              "
                placeholder="Ej: Calle Los Jazmines, Pasaje 2, Casa #9, Colonia Jardines de Cuscatlán, San Salvador"
              />
            </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notas
            </label>
            <textarea
              name="notas"
              rows={3}
              className="
                w-full px-4 py-2
                border border-gray-300 rounded-md
                resize-none
                focus:outline-none
                focus:border-transparent
                focus:ring-2 focus:ring-gray-800
              "
              placeholder="Ej: Cliente prefiere atención por la mañana, mascota nerviosa, llamar antes de llegar..."
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 mt-2">
              {error}
            </p>
          )}

          <BotonAccion texto={isSubmitting ? "Registrando..." : "Registrar Cliente"} disabled={isSubmitting}/>
      </div>

    </form>
  );
}
