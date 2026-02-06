'use client'

import Link from "next/link"
import { FiChevronRight, FiChevronLeft, FiSearch  } from 'react-icons/fi'
import { useState, useEffect } from "react"

export default function ClientesTabla({ clientes }) {

  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(clientes)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  useEffect(() => {
    const term = search.toLowerCase().trim()
    
    if (!term) {
      setFiltered(clientes)
      return
    }

    const data = clientes.filter(c =>
      (c.nombre_completo ?? "").toLowerCase().includes(term) ||
      (c.email ?? "").toLowerCase().includes(term) ||
      (c.telefono ?? "").includes(term)
    )

    setFiltered(data)
    setCurrentPage(1)
  }, [search, clientes])

  // Clientes de la página actual
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filtered
    .sort((a, b) => a.nombre_completo.toLowerCase().localeCompare(b.nombre_completo.toLowerCase()))
    .slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filtered.length / itemsPerPage)

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <div className="space-y-6">

      {/* Input de búsqueda */}
        <div className="relative w-full flex gap-3">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
                type="text"
                placeholder="Buscar clientes por nombre o email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white"
            />

            <button
                onClick={() => setSearch("")}
                className="cursor-pointer w-24 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white text-center hover:bg-gray-100 transition"
            >
                Limpiar
            </button>
        </div>


      {/* Tabla de clientes */}
      <div className="bg-white rounded-md border border-gray-200 max-h-140 overflow-y-auto">       

        <table className="min-w-full  border-collapse">
          <thead className="sticky top-0 bg-gray-50 text-sm text-gray-800">
              <tr className="text-left ">
                <th className="px-4 py-3 font-semibold">NOMBRE</th>
                <th className="px-4 py-3 font-semibold">TELEFONO</th>
                <th className="px-4 py-3 font-semibold">EMAIL</th>
              </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-sm">
            {currentItems.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-6 text-center text-gray-500">
                  No se encontró ningún cliente.
                </td>
              </tr>
            ) :
            currentItems.map(cliente => (
                <tr 
                key={cliente.id} 
                className="hover:bg-gray-50 transition cursor-pointer text-gray-700 font-medium" 
                onClick={() => window.location.href = `/dashboard/clientes/${cliente.id}`}
                >
                  <td className="px-4 py-4">
                    {cliente.nombre_completo}
                  </td>
                  <td className="px-4 py-4">
                    {cliente.telefono}
                  </td>
                  <td className="px-4 py-4">
                    {cliente.email}
                  </td>

                </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 py-4">
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 font-medium bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Primera
          </button>

          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 font-medium bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiChevronLeft size={20} />
          </button>

          <span>{currentPage} de {totalPages}</span>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 font-medium bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiChevronRight size={20} />
          </button>

          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 font-medium bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Última
          </button>
        </div>
      )}

    </div>
  )
}
