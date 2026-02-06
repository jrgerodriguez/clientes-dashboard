'use client'
import { FiHome, FiUsers, FiCalendar, FiLogOut } from 'react-icons/fi'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Sidebar() {

  const pathname = usePathname()
  

  const links = [
    {
      href: '/dashboard',
      label: 'Home',
      icon: FiHome
    },
    {
      href: '/dashboard/clientes',
      label: 'Clientes',
      icon: FiUsers
    },
  ]
  
    return (
      <aside className="w-64  backdrop-blur-sm p-4 font-sans flex flex-col gap-10 border border-gray-200">

        <h2 className="text-2xl font-semibold tracking-wide">
          Dashboard
        </h2>

        <nav className="flex flex-col gap-2 font-medium">
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
                text-md font-normal
                text-gray-700
                px-3 py-3
                rounded
                transition-colors
                flex items-center gap-4
                ${isActive
                  ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-semibold shadow-lg"
                  : "hover:bg-gray-100"}

                `}
            >
              <Icon size={20} />
              {label}
            </Link>
            )
          })}
        </nav>

      </aside>
    )
}