export const Avaliacoes = ({ nomeCliente = "Dacir Maria Aranha Camargo", comentario }) => {
  return (
    <div className="w-full bg-[#6c7770] py-12">
      <div className="container mx-auto px-4">
        <h1 className="uppercase text-center text-3xl font-bold text-white mb-10">
          Avaliações
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white w-full md:w-[320px] rounded-xl shadow-md p-4">
              
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {nomeCliente.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{nomeCliente}</h3>
                  <p className="text-xs text-gray-500">2 comentários</p>
                </div>
              </div>

              
              <div className="flex items-center text-yellow-500 text-sm mb-1">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-2">4 meses atrás</p>

              
              <p className="text-sm text-gray-800 line-clamp-3">
                {comentario ||
                  'Há tempos estávamos querendo dar uma repaginada em nossa sala. Pra isso, fomos procurar uma arquiteta... Na busca pela internet, conhecemos Joice Camargo...'}
              </p>

              
              <p className="text-xs text-gray-500 mt-2">👍 Gostei</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
