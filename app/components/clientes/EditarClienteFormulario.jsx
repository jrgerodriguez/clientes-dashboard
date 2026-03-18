'use client'

import BotonAccion from "../ui/BotonAccion";
import { X } from "lucide-react";
import { FaAddressBook } from "react-icons/fa";
import { useState } from "react";

function EditarClienteFormulario({editOpen, setEditOpen, cliente, handleSubmit, error, onChange, isSubmitting}) {

    const [nuevoNombre, setNuevoNombre] = useState(cliente.nombre_completo);
    const [nuevoTelefono, setNuevoTelefono] = useState(cliente.telefono);
    const [nuevoEmail, setNuevoEmail] = useState(cliente.email);
    const [nuevaDireccion, setNuevaDireccion] = useState(cliente.direccion);
    const [nuevasNotas, setNuevasNotas] = useState(cliente.notas || "");

  return (
    <>
        {/* Overlay */}
        <div
        className={`
            fixed inset-0 bg-black/50 backdrop-blur-sm z-40
            transition-opacity duration-300 ease-out
            ${editOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setEditOpen(false)}
        />
        
        {/* Sidebar Panel */}
        <div
        className={`
            fixed top-0 right-0 h-screen w-full md:w-[500px]
            bg-white shadow-2xl z-50
            flex flex-col
            transform transition-transform duration-300 ease-out
            ${editOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >

            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900">Editar Cliente</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Actualiza la información del cliente
                    </p>
                </div>

                <button
                    onClick={() => setEditOpen(false)}
                    className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg p-2 transition-all"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Formulario */}
            <div className="flex-1 overflow-y-auto p-6">
                <form className="space-y-5" onSubmit={handleSubmit} onChange={onChange}>

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
                                       text-gray-900"
                            value={nuevoNombre}
                            onChange={(e) => setNuevoNombre(e.target.value)}
                        />
                    </div>

                  <div className="grid grid-cols-2 gap-4">
                      <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Teléfono
                          </label>
                          <input
                              type="tel"
                              name="telefono"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                                         text-gray-900"
                              value={nuevoTelefono}
                              onChange={(e) => setNuevoTelefono(e.target.value)}
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
                                         text-gray-900"
                              value={nuevoEmail}
                              onChange={(e) => setNuevoEmail(e.target.value)}
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg
                                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                                     text-gray-900"
                          value={nuevaDireccion}
                          onChange={(e) => setNuevaDireccion(e.target.value)}
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
                                     text-gray-900"
                          value={nuevasNotas}
                          onChange={(e) => setNuevasNotas(e.target.value)}
                      />
                  </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <p className="text-sm text-red-600 font-medium">
                                {error}
                            </p>
                        </div>
                    )}

                  <BotonAccion texto={isSubmitting ? "Guardando..." : "Guardar Cambios"} disabled={isSubmitting}/>

                </form>
            </div>

        </div>
    </>
  )
}

export default EditarClienteFormulario
