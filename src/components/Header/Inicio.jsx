import Fundo from "../../assets/Rectangle.png";

export const Inicio = () => {
  return (
    <div className="relative w-full h-80 sm:h-96 md:h-[32rem] lg:h-[40rem]">
      <img
        src={Fundo}
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight text-center">
          BUSCAMOS ENTENDER
          <br />
          O GOSTO DO CLIENTE
        </h1>
        <button className="border-2 border-amber-50 rounded-full text-amber-50 text-sm sm:text-base md:text-lg py-2 px-6 sm:px-8 md:px-10 hover:bg-amber-50 hover:text-black transition">
          VER PROJETOS
        </button>
      </div>
    </div>
  );
};
