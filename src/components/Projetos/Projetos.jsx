import Rec from "../../assets/Rectangle 32.png";
import Rec2 from "../../assets/Rectangle 35.png";
import Rec3 from "../../assets/Rectangle 34.png";
import Rec4 from "../../assets/Rectangle 33.png";
import Rec5 from "../../assets/Rectangle 37.png";
import Rec6 from "../../assets/Rectangle 36.png";

export const Projetos = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="uppercase font-bold text-center text-3xl sm:text-4xl md:text-5xl">
        Projetos realizados
      </h1>
      <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
        Trabalhamos com o estilo contemporâneo e atemporal, onde buscamos
        entender o gosto do cliente e aplicar de forma personalizada, com um
        toque de decoração afetiva para ser sentida, com características únicas
        e sempre diferentes uns dos outros. Acreditamos que um lar deve refletir
        seus moradores.
      </p>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <img
          src={Rec}
          alt=""
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl shadow-md object-cover"
        />
        <img
          src={Rec2}
          alt=""
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl shadow-md object-cover"
        />
        <img
          src={Rec3}
          alt=""
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl shadow-md object-cover"
        />
        <img
          src={Rec4}
          alt=""
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl shadow-md object-cover"
        />
        <img
          src={Rec5}
          alt=""
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl shadow-md object-cover"
        />
        <img
          src={Rec6}
          alt=""
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl shadow-md object-cover"
        />
      </div>
    </div>
  );
};
