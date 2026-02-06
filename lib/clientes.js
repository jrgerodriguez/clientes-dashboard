import { supabase } from "@/lib/supabase";

export async function obtenerClientes() {
    const {data, error} = await supabase.from('clientes').select("*")
    if(error) throw error;
    return data
}

export default async function crearNuevoCliente(data) {
    const {data: cliente, error} = await supabase
        .from("clientes")
        .insert([
            {
            nombre_completo: data.nombre,
            telefono: data.telefono,
            email: data.email,
            direccion: data.direccion,
            notas: data.notas
        },
    ])
    .select()
    .single();

    if(error) {
        throw error;
    }

    return cliente;

}

export async function obtenerClientePorId(id) {
    const {data, error} = await supabase
    .from("clientes")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    return null;
  }

  return data
} 

export async function editarCliente(id, data) {
  const { data: cliente, error } = await supabase
    .from("clientes")
    .update({
      nombre_completo: data.nombre,
      telefono: data.telefono,
      email: data.email,
      direccion: data.direccion,
      notas: data.notas,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return cliente;
}