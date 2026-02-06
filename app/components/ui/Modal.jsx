'use client';

import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children, titulo, mensaje }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 font-sans" onClick={onClose}>
      <div className="bg-white rounded-md w-full max-w-2xl shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        
        {/* Encabezado del modal */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-5 py-3 flex items-center justify-between rounded-t-md">
          <div className="flex flex-col ">
            <h2 className="text-xl font-semibold text-gray-900">{titulo}</h2>
            <p className="text-sm text-gray-500">
              {mensaje}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
}
