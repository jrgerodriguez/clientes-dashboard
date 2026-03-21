import { supabase } from "@/lib/supabase"

export async function obtenerTodasLasCitas() {
    const { data, error } = await supabase
        .from("citas")
        .select("*, clientes(nombre_completo)")
        .order("fecha", { ascending: true })

    if (error) throw error
    return data
}

export async function obtenerCitasPorCliente(clienteId) {
    const { data, error } = await supabase
        .from("citas")
        .select("*")
        .eq("cliente_id", clienteId)
        .order("fecha", { ascending: true })

    if (error) throw error
    
    return data
}