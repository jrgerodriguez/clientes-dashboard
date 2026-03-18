import { supabase } from "@/lib/supabase"

export async function obtenerTodasLasCitas() {
    const { data, error } = await supabase
        .from("citas")
        .select("*, clientes(nombre_completo)")
        .order("fecha", { ascending: true })

    if (error) throw error
    return data
}