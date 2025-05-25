import Fundo from "../../assets/Rectangle.png"
export const Inicio = () =>{
return(
    <div className="relative w-full h-96">
        <img
        src={Fundo}
        className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4 mr-[500px] mt-25">
<h1 className="text-white text-3xl font-serif font-semibold mb-6 leading-tight">BUSCAMOS ENTENDER <br/>
        O GOSTO DO CLIENTE
        </h1>
        <button className="border-2 border-amber-50 rounded-[20px] text-amber-50 py-2 px-10 text-center mr-45">VER  PROJETOS</button>
        </div>
    </div>
)
}