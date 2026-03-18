'use client'

import Link from "next/link";
import { FiChevronLeft, FiEdit, FiMail, FiPhone, FiMapPin, FiFileText } from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import EditarClienteFormulario from "./EditarClienteFormulario";
import { useParams, useRouter } from "next/navigation";
import { editarCliente } from "@/lib/clientes";


export default function DetallesClienteIndividual({cliente}) {

  const [editOpen, setEditOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")

  const router = useRouter();
  const { id } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const data = {
        nombre: formData.get("nombre"),
        telefono: formData.get("telefono"),
        email: formData.get("email"),
        direccion: formData.get("direccion"),
        notas: formData.get("notas")
    }

    setFormError("");

    const telefono = formData.get("telefono");
    const email = formData.get("email");

        if (telefono && !/^\d{8}$/.test(telefono)) {
        setFormError("Número de teléfono no válido.");
        setIsSubmitting(false);
        return;
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFormError("Correo electrónico no válido.");
        setIsSubmitting(false);
        return;
        }

        try {
          await editarCliente(id, data);
          setEditOpen(false);
          router.refresh()
        } catch (error) {
          alert(error.message || "Error al editar al cliente");
        } finally {
            setIsSubmitting(false);
        }
  }

    function borrarError() {
        setFormError("");
    }

  return (
    <section className="fade-in-up">
      <Link
        href="/dashboard/clientes"
        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors mb-6"
      >
        <FiChevronLeft size={20} />
        <span>Volver a Clientes</span>
      </Link>

      {/* Header con nombre y acciones */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {cliente.nombre_completo}
            </h1>
            <p className="text-gray-600">Información detallada del cliente</p>
          </div>

          <div className="flex gap-3">
            <a
              href={`https://wa.me/503${cliente.telefono}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors shadow-md"
              title="Contactar por WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>

            <button
              onClick={() => setEditOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-medium"
              type="button"
            >
              <FiEdit size={20} />
              Editar
            </button>
          </div>
        </div>
      </div>

      {/* Grid de información */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Información de contacto */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
              <FiPhone className="text-green-600" size={18} />
            </div>
            Información de Contacto
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                Teléfono
              </label>
              <p className="text-base text-gray-900 font-medium">
                {cliente.telefono || "—"}
              </p>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                Email
              </label>
              <p className="text-base text-gray-900 font-medium break-all">
                {cliente.email || "—"}
              </p>
            </div>
          </div>
        </div>

        {/* Dirección */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <FiMapPin className="text-blue-600" size={18} />
            </div>
            Dirección
          </h2>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Ubicación
            </label>
            <p className="text-base text-gray-900 leading-relaxed">
              {cliente.direccion || "—"}
            </p>
          </div>
        </div>

        {/* Notas - ocupa todo el ancho */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 lg:col-span-2">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
              <FiFileText className="text-purple-600" size={18} />
            </div>
            Notas Adicionales
          </h2>

          <div>
            <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
              {cliente.notas || "No hay notas adicionales para este cliente."}
            </p>
          </div>
        </div>

      </div>

      {/* Slider de edición */}
      <EditarClienteFormulario 
        editOpen={editOpen} 
        setEditOpen={setEditOpen} 
        cliente={cliente} 
        handleSubmit={handleSubmit}
        error={formError}
        onChange={borrarError}
        isSubmitting={isSubmitting} 
      />

    </section>
  )
}
