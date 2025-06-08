import Rectangle from "../../assets/Rec.png";

export const Orcamento = () => {
  return (
    <section className="bg-[#F7F8F6] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={Rectangle}
            alt="Sala decorada"
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Transforme seu apartamento em um espaço único e especial com a
            ajuda dos nossos arquitetos e designers experientes. Solicite um
            orçamento hoje mesmo e garanta um resultado perfeito!
          </p>
          <button className="bg-[#6c7770] text-white font-semibold text-sm sm:text-base py-2 px-6 rounded-md hover:bg-[#5a645e] transition">
            FAZER ORÇAMENTO
          </button>
        </div>
      </div>
    </section>
  );
};
