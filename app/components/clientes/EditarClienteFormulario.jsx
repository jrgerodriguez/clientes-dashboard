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
        <div
        className={`
            fixed inset-0 bg-black/20 backdrop-blur-[1px] z-40
            transition-opacity duration-300 ease-out
            ${editOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setEditOpen(false)}
        />
        
        {/* Header y Titulo */}
        {editOpen && (
            <div
            className={`
                fixed top-0 right-0 h-screen w-[500px]
                bg-white border-l border-gray-200 shadow-xl z-50
                flex flex-col gap-7
                transform transition-transform duration-300 ease-out
                ${editOpen ? "translate-x-0" : "translate-x-full"}
            `}
            >

                <div className="sticky top-0 bg-white border-b border-gray-200 px-5 py-3 flex items-center justify-between rounded-t-md">
                    
                    <div className="flex flex-col ">
                        <h2 className="text-xl font-semibold text-gray-900">Editar</h2>
                        <p className="text-sm text-gray-500">
                        Edita la Información del cliente.
                        </p>
                    </div>

                    <button
                        onClick={() => setEditOpen(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Formulario y Campos */}

                <form className="px-5 flex flex-col gap-7" onSubmit={handleSubmit} onChange={onChange}>

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
                            value={nuevoNombre}
                            onChange={(e) => setNuevoNombre(e.target.value)}
                        />
                    </div>

                  <div className="grid grid-cols-2 gap-4">
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
                                  focus:outline-none focus:border-transparent
                                  focus:ring-2 focus:ring-gray-800
                              "
                              value={nuevoTelefono}
                              onChange={(e) => setNuevoTelefono(e.target.value)}
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
                                  focus:outline-none focus:border-transparent
                                  focus:ring-2 focus:ring-gray-800
                              "
                              value={nuevoEmail}
                              onChange={(e) => setNuevoEmail(e.target.value)}
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
                          className="
                              w-full px-4 py-2
                              border border-gray-300 rounded-md
                              focus:outline-none focus:border-transparent
                              focus:ring-2 focus:ring-gray-800
                          "
                          value={nuevaDireccion}
                          onChange={(e) => setNuevaDireccion(e.target.value)}
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                          Notas
                      </label>
                      <textarea
                          name="notas"
                          rows={4}
                          className="
                              w-full px-4 py-2
                              border border-gray-300 rounded-md
                              resize-none
                              focus:outline-none focus:border-transparent
                              focus:ring-2 focus:ring-gray-800
                          "
                          value={nuevasNotas}
                          onChange={(e) => setNuevasNotas(e.target.value)}
                      />
                  </div>

                    {error && (
                        <p className="text-sm text-red-600 mt-2">
                        {error}
                        </p>
                    )}

                  <BotonAccion texto={isSubmitting ? "Guardando Cambios..." : "Guardar Cambios"} disabled={isSubmitting}/>

                </form>

            </div>
        )}
    </>
  )
}

export default EditarClienteFormulario