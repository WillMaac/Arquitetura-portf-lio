import Perfil from "../../assets/Group2.png";

export const AboutMe = () => {
  return (
    <section className="w-full px-4 py-10">
      <div className="flex flex-col items-center gap-8 2xl:flex-row 2xl:items-center 2xl:gap-12">
        <img
          src={Perfil}
          alt="Foto de perfil Joice Camargo"
          className="
            w-32 h-32
            sm:w-40 sm:h-40
            md:w-48 md:h-48
            lg:w-56 lg:h-56
            xl:w-64 xl:h-64
            2xl:w-[30%] 2xl:h-auto
            
          "
        />
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 2xl:w-2/5 text-center 2xl:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Joice Camargo
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Arquiteta com mais de 17 anos de experiência, atua em reformas e
            decoração de imóveis residenciais e comerciais. É{" "}
            <strong>especialista em paisagismo</strong> e possui portfólio com
            projetos inovadores na região de Tatuapé e Móoca.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center w-32 sm:w-36 md:w-40 bg-[#cccccc] rounded-lg py-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#536917]">
                +68
              </h2>
              <p className="text-sm sm:text-base text-center">
                IMÓVEIS
                <br />
                REFORMADOS
              </p>
            </div>
            <div className="flex flex-col items-center w-32 sm:w-36 md:w-40 bg-[#cccccc] rounded-lg py-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#536917]">
                +17
              </h2>
              <p className="text-sm sm:text-base text-center">
                ANOS DE
                <br />
                EXPERIÊNCIA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
