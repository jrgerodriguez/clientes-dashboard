import { FiUsers, FiTrendingUp, FiActivity, FiCalendar } from 'react-icons/fi'
import Link from 'next/link'

export default function DashboardPage() {
    return (
      <div className="space-y-8 fade-in-up">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Bienvenido al Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Gestiona tu negocio de manera eficiente
          </p>
        </div>

        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tarjeta 1 */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-purple-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <FiUsers className="text-white" size={24} />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  +12%
                </span>
              </div>
              
              <h3 className="text-gray-600 text-sm font-medium mb-1">Total Clientes</h3>
              <p className="text-3xl font-bold text-gray-800">1,234</p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-blue-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <FiTrendingUp className="text-white" size={24} />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  +8%
                </span>
              </div>
              
              <h3 className="text-gray-600 text-sm font-medium mb-1">Ventas del Mes</h3>
              <p className="text-3xl font-bold text-gray-800">$45,678</p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-orange-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-600 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                  <FiActivity className="text-white" size={24} />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  +15%
                </span>
              </div>
              
              <h3 className="text-gray-600 text-sm font-medium mb-1">Actividad</h3>
              <p className="text-3xl font-bold text-gray-800">892</p>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-green-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <FiCalendar className="text-white" size={24} />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  +5%
                </span>
              </div>
              
              <h3 className="text-gray-600 text-sm font-medium mb-1">Citas Hoy</h3>
              <p className="text-3xl font-bold text-gray-800">24</p>
            </div>
          </div>

        </div>

        {/* Sección de acceso rápido */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Acceso Rápido</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/dashboard/clientes" className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 hover:shadow-md">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <FiUsers className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">Ver Clientes</p>
                <p className="text-sm text-gray-600">Gestiona tu base de datos</p>
              </div>
            </Link>

            <div className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 hover:shadow-md cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <FiTrendingUp className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Reportes</p>
                <p className="text-sm text-gray-600">Analiza tus métricas</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 hover:shadow-md cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <FiCalendar className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">Calendario</p>
                <p className="text-sm text-gray-600">Organiza tus citas</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
}
