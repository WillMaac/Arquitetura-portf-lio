import Rec from "../../assets/Rectangle 32.png";
import Rec2 from "../../assets/Rectangle 35.png";
import Rec3 from "../../assets/Rectangle 34.png";
import Rec4 from "../../assets/Rectangle 33.png";
import Rec5 from "../../assets/Rectangle 37.png";
import Rec6 from "../../assets/Rectangle 36.png";
export const Projetos = () => {
  return (
    <div className="text-center">
      <h1 className="uppercase text-center font-bold mt-20 text-3xl">
        Projetos realizados
      </h1>
      <p className="mt-5 w-200 mx-auto text-xl text-">
        Trabalhamos com o estilo contemporâneo e atemporal, onde buscamos
        entender o gosto do cliente e aplicar de forma personalizada, com um
        toque de decoração afetiva para ser sentida, com características únicas
        e sempre diferente uns dos outros, acreditamos que um lar deve refletir
        seus moradores.
      </p>

      <div className="max-w-6xl mx-auto p-6 ">
        <div>
          <div className="flex gap-4">
            <img
              src={Rec}
              className="rounded-xl shadow-md w-full object-cover mt-20"
            />
            <img
              src={Rec2}
              className="rounded-xl shadow-md w-full  object-cover mt-20"
            />
          </div>
          <div className="flex gap-7 mt-5">
            <img
              src={Rec3}
              className="rounded-xl shadow-md w-full object-cover "
            />
            <img
              src={Rec4}
              className="rounded-xl shadow-md w-full object-cover"
            />
            <img
              src={Rec5}
              className="rounded-xl shadow-md w-full object-cover"
            />
            <img
              src={Rec6}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
