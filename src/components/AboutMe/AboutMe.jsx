import Perfil from "../../assets/Group2.png";

export const AboutMe = () => {
  return (
    <section className="w-full px-4 py-8 md:py-12 lg:py-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center md:flex-row md:items-start md:gap-8 lg:gap-12">
        {/* FOTO */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src={Perfil}
            alt="Foto de perfil Joice Camargo"
            className="
              w-32 h-32            /* mobile: 128px x 128px */
              sm:w-40 sm:h-40      /* ≥640px: 160px x 160px */
              md:w-48 md:h-48      /* ≥768px: 192px x 192px */
              lg:w-56 lg:h-56      /* ≥1024px: 224px x 224px */
              rounded-full
              object-cover
            "
          />
        </div>

        {/* TEXTO E ESTATÍSTICAS */}
        <div className="w-full text-center md:text-left">
          {/* NOME */}
          <h1
            className="
              text-2xl font-semibold mb-2    /* mobile: 2xl (~24px) */
              sm:text-3xl                    /* ≥640px: 3xl (~30px) */
              md:text-4xl                    /* ≥768px: 4xl (~36px) */
            "
          >
            Joice Camargo
          </h1>

          {/* DESCRIÇÃO */}
          <p
            className="
              text-base mb-6                 /* mobile: base (~16px) */
              sm:text-lg                     /* ≥640px: lg (~18px) */
              md:text-xl                     /* ≥768px: xl (~20px) */
              leading-relaxed
            "
          >
            Arquiteta com mais de 17 anos de experiência, atua em reformas
            e decoração de imóveis residenciais e comerciais. É{" "}
            <strong>especialista em paisagismo</strong> e possui portfólio com
            projetos inovadores na região de Tatuapé e Móoca.
          </p>

          {/* ESTATÍSTICAS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div
              className="
                flex flex-col items-center
                w-28 h-auto                         /* mobile: largura fixa */
                sm:w-32                             /* ≥640px */
                md:w-36                             /* ≥768px */
                bg-[#cccccc] rounded-lg py-4
              "
            >
              <h2
                className="
                  text-xl font-bold                   /* mobile: xl (~20px) */
                  sm:text-2xl                         /* ≥640px: 2xl (~24px) */
                  text-[#536917]
                "
              >
                +68
              </h2>
              <p className="text-sm sm:text-base text-center">
                IMÓVEIS
                <br />
                REFORMADOS
              </p>
            </div>

            <div
              className="
                flex flex-col items-center
                w-28 h-auto
                sm:w-32
                md:w-36
                bg-[#cccccc] rounded-lg py-4
              "
            >
              <h2
                className="
                  text-xl font-bold
                  sm:text-2xl
                  text-[#536917]
                "
              >
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
