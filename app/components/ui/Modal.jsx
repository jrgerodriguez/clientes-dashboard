'use client';

import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children, titulo, mensaje }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-xl w-full max-w-2xl shadow-2xl relative animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
        
        {/* Encabezado del modal */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900">{titulo}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {mensaje}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg p-2 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
