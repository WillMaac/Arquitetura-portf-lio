import Rectangle from "../../assets/Rec.png";

export const Orcamento = () => {
  return (
    <section className="bg-[#F7F8F6] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        
        <div className="md:w-1/2 w-full">
          <img
            src= {Rectangle}
            alt="Sala decorada"
            className="rounded-lg w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Transforme seu apartamento em um espaço único e especial com a ajuda dos nossos arquitetos e designers experientes. Solicite um orçamento hoje mesmo e garanta um resultado perfeito!
          </p>

          <button className="bg-[#6c7770] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#5a645e] transition">
            FAZER ORÇAMENTO
          </button>
        </div>
      </div>
    </section>
  );
};