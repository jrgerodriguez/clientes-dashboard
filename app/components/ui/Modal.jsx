'use client'

import { createPortal } from 'react-dom'
import { X } from "lucide-react"

export default function Modal({ isOpen, onClose, children, titulo, mensaje }) {
  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl relative fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{titulo}</h2>
            {mensaje && <p className="text-sm text-slate-500 mt-0.5">{mensaje}</p>}
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[72vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
