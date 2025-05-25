import Perfil from "../../assets/Group2.png"
export const AboutMe = () =>{
    return(
        <section>
                    <div className="flex items-center">
                 <img src={Perfil} alt="Foto de perfil"
                 className="ml-5"
                 />
                 <div>
                 <h1 className="text-4xl mb-2">Joice Camargo</h1>
                 <p className="text-xl mt-8">Arquiteta com mais de 17 anos de experiência, atua em reformas e decoração de imóveis residencias e comerciais. É <strong>especialista em paisagismo</strong> e possui portfólio com projetos inovadores na região de Tatuapé e Moca</p>
                 <div className="flex gap-5 justify-center items-center">
                 <div className="w-50 h-auto bg-[#cccccc] text-center rounded-[10px] mt-5">
                    <h1 className="text-[#536917] font-bold">+68</h1>
                    <h2>IMÓVEIS REFORMADOS</h2>
                 </div>
                 <div className="w-45 h-auto bg-[#cccccc] text-center rounded-[10px] mt-5">
                    <h1  className="text-[#536917] font-bold">+17</h1>
                    <h2>ANOS DE EXPERIÊNCIA</h2>
                    </div>
                 </div>
                 </div>
                    </div>
                </section>
    )
}