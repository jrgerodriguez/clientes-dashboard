'use client'

import Link from "next/link";
import { FiChevronLeft, FiEdit } from 'react-icons/fi'
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
    <section className="font-sans">
      <Link
        href="/dashboard/clientes"
        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors leading-none text-md"
      >
      <FiChevronLeft
        size={25}
        strokeWidth={1.7}
        className="block translate-y-px"
      />

        <span>Clientes</span>
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 max-h-140 overflow-y-auto p-6 mt-6 flex gap-6 shadow-sm">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold text-gray-700 leading-tight">
            {cliente.nombre_completo}
          </h2>
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-gray-500 font-semibold uppercase text-xs tracking-wide">
            Email
          </p>
          <p className="text-base text-gray-700 break-all">
            {cliente.email}
          </p>

          <p className="mt-4 text-gray-500 font-semibold uppercase text-xs tracking-wide">
            Teléfono
          </p>
          <p className="text-base text-gray-700">
            {cliente.telefono}
          </p>

          <p className="mt-4 text-gray-500 font-semibold uppercase text-xs tracking-wide">
            Dirección
          </p>
          <p className="text-base text-gray-700 leading-snug">
            {cliente.direccion}
          </p>
        </div>

        <div className="flex-1">
          <p className="text-gray-500 font-semibold uppercase text-xs tracking-wide mb-1">
            Notas
          </p>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {cliente.notas || "—"}
          </p>
        </div>

        <div className="flex-1">
          <p className="text-gray-500 font-semibold uppercase text-xs tracking-wide mb-1">
            Acciones
          </p>

          <div className="flex gap-3 items-center ">
            <a
              href={`https://wa.me/503${cliente.telefono}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-sm cursor-pointer"
              title="Contactar por WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
            </a>

            <button
            onClick={() => setEditOpen(true)}
            className="text-gray-600 hover:bg-gray-100 cursor-pointer"
            type="button"
            >
            <FiEdit size={25} />
            </button>
          </div>

        </div>
      </div>

      {/* ------ Slider de edicion ------ */}
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
