'use client'

import Link from "next/link"
import { FiChevronRight, FiChevronLeft, FiSearch  } from 'react-icons/fi'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ClientesTabla({ clientes }) {

  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(clientes)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const router = useRouter();

  useEffect(() => {
    const term = search.toLowerCase().trim()

    const data = (!term ? clientes : clientes.filter(c =>
      (c.nombre_completo ?? "").toLowerCase().includes(term) ||
      (c.email ?? "").toLowerCase().includes(term) ||
      (c.telefono ?? "").includes(term)
    )).sort((a, b) => a.nombre_completo.toLowerCase().localeCompare(b.nombre_completo.toLowerCase()))

    setFiltered(data)
    setCurrentPage(1)
  }, [search, clientes])

  // Clientes de la página actual
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filtered.length / itemsPerPage)

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <div className="space-y-6">

      {/* Input de búsqueda */}
        <div className="relative w-full flex gap-3">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
                type="text"
                placeholder="Buscar por nombre, email o teléfono..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 shadow-sm"
            />

            <button
                onClick={() => setSearch("")}
                className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
                Limpiar
            </button>
        </div>


      {/* Tabla de clientes */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">       

        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <FiSearch size={48} className="text-gray-300" />
                      <p className="text-lg font-medium">No se encontraron clientes</p>
                      <p className="text-sm">Intenta con otros términos de búsqueda</p>
                    </div>
                  </td>
                </tr>
              ) :
              currentItems.map(cliente => (
                  <tr 
                  key={cliente.id} 
                  className="hover:bg-gray-50 transition-colors cursor-pointer" 
                  onClick={() => router.push(`/dashboard/clientes/${cliente.id}`)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {cliente.nombre_completo}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">
                        {cliente.telefono}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">
                        {cliente.email}
                      </div>
                    </td>

                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-4">
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            Primera
          </button>

          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <FiChevronLeft size={20} />
          </button>

          <span className="px-4 py-2 text-sm font-medium text-gray-700">
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <FiChevronRight size={20} />
          </button>

          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            Última
          </button>
        </div>
      )}

    </div>
  )
}
