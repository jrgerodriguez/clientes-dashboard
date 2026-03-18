'use client'
import { FiHome, FiUsers, FiBarChart2, FiCalendar } from 'react-icons/fi'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Sidebar() {

  const pathname = usePathname()
  

  const links = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: FiHome
    },
    {
      href: '/dashboard/clientes',
      label: 'Clientes',
      icon: FiUsers
    },
    {
      href: '/dashboard/calendario',
      label: 'Calendario',
      icon: FiCalendar
    },
  ]
  
    return (
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col gap-8 shadow-sm">
        
        {/* Logo y título */}
        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-md">
            <FiBarChart2 className="text-white" size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              Dashboard
            </h2>
            <p className="text-xs text-gray-500">Sistema de Gestión</p>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex flex-col gap-1">
          {links.map(({href, label, icon: Icon}) => {
            const isActive =
              href === "/dashboard"
                ? pathname === href
                : pathname === href || pathname.startsWith(`${href}/`);

            return(
            
            <Link
              key={label}
              href={href}
              className={`
                group relative
                text-sm font-medium
                px-4 py-3
                rounded-lg
                transition-all duration-200
                flex items-center gap-3
                ${isActive
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"}
                `}
            >
              <Icon size={20} className={`${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}`} />
              <span>{label}</span>
              
              {/* Indicador activo */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-green-800 rounded-r-full"></div>
              )}
            </Link>
            )
          })}
        </nav>

        {/* Información adicional */}
        <div className="mt-auto pt-6 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-600 text-xs font-medium mb-1">Versión</p>
            <p className="text-gray-900 text-sm font-semibold">Clientes v1.0</p>
          </div>
        </div>

      </aside>
    )
}
