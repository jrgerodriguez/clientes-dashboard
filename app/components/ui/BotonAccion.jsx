export default function BotonAccion({ icono: Icono, texto, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="mt-4 md:mt-0 px-6 py-3 rounded-md font-semibold
                 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
                 text-white flex items-center gap-2 transition-colors cursor-pointer
                 hover:brightness-110 justify-center"
    >
      {Icono && <Icono className="w-5 h-5" />}
      {texto}
    </button>
  );
}
