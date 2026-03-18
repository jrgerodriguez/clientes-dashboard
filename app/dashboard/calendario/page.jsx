import { obtenerTodasLasCitas } from "@/lib/citas"

export default async function CalendarioPage() {
    const citas = await obtenerTodasLasCitas()

    return (
        <section className="fade-in-up">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Calendario</h1>
                <p className="text-gray-600 mt-2">Visualiza y gestiona todas tus citas</p>
            </div>
        </section>
    )
}