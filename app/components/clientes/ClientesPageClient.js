
'use client'

import ClientesTabla from "../../components/clientes/ClientesTabla"
import BotonAccion from "../../components/ui/BotonAccion";
import { FiUserPlus  } from "react-icons/fi";
import { useState } from "react";
import Modal from "../ui/Modal";
import FormularioNuevoCliente from "./FormularioNuevoCliente";
import crearNuevoCliente from "../../../lib/clientes";
import { useRouter } from "next/navigation";

export default function ClientesPageClient({clientes}) {

    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formError, setFormError] = useState("")

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
            const nuevoCliente = await crearNuevoCliente(data)
            router.push(`/dashboard/clientes/${nuevoCliente.id}`)
            setIsModalOpen(false)
            e.target.reset();
        } catch (error) {
            alert(error.message || "Error al guardar al cliente");
        } finally {
            setIsSubmitting(false);
        }
    }

    function borrarError() {
        setFormError("");
    }

    return (
        <section className="p-6 md:p-5">
            <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Clientes
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Listado general de clientes registrados.
                    </p>
                </div>

                <BotonAccion 
                    texto={"Nuevo Cliente"} 
                    icono={FiUserPlus } 
                    onClick={() => setIsModalOpen(true)}
                />

            </div>

            <ClientesTabla clientes={clientes || []}/>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} titulo={"Registrar Cliente"} mensaje={"Agrega la información completa del cliente."}>
                <FormularioNuevoCliente 
                    onSubmit={handleSubmit} 
                    isSubmitting={isSubmitting} 
                    error={formError} 
                    onChange={borrarError} 
                />
            </Modal>

        </section>
    )
}