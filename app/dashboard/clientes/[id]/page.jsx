import { notFound } from "next/navigation";
import { obtenerClientePorId } from "@/lib/clientes";
import DetallesClienteIndividual from "../../../components/clientes/DetallesClienteIndividual";

export default async function IndividualClientPage({params}) {
  
  const { id } = await params
  const cliente = await obtenerClientePorId(id)

  if(!cliente) {
    notFound();
  }

  return (  
    <>
      <DetallesClienteIndividual cliente={cliente}/>
    </>
  )
}