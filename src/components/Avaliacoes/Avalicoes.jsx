export const Avaliacoes = ({
  nomeCliente = "Dacir Maria Aranha Camargo",
  comentario,
}) => {
  return (
    <div className="w-full bg-[#6c7770] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="uppercase text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 md:mb-12">
          Avaliações
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-white w-full max-w-sm mx-auto rounded-xl shadow-md p-4 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {nomeCliente.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-sm md:text-base">
                    {nomeCliente}
                  </h3>
                  <p className="text-xs sm:text-xs text-gray-500">
                    2 comentários
                  </p>
                </div>
              </div>
              <div className="flex items-center text-yellow-500 text-sm mb-1">
                {"★★★★★".split("").map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-xs sm:text-xs text-gray-500 mb-2">
                4 meses atrás
              </p>
              <p className="text-sm sm:text-base text-gray-800 line-clamp-3 flex-grow">
                {comentario ||
                  "Há tempos estávamos querendo dar uma repaginada em nossa sala. Pra isso, fomos procurar uma arquiteta... Na busca pela internet, conhecemos Joice Camargo..."}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">👍 Gostei</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
