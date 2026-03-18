export default function BotonAccion({ icono: Icono, texto, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="group relative mt-4 md:mt-0 px-6 py-3 rounded-lg font-semibold
                 bg-green-600 hover:bg-green-700
                 text-white flex items-center gap-2 transition-all duration-200
                 hover:shadow-lg
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-600
                 justify-center"
    >
      {Icono && <Icono className="w-5 h-5" />}
      <span>{texto}</span>
    </button>
  );
}