export const Card = ({title, descricao}) =>{
    return(
        <div className="w-[260px] h-[223px] bg-[#ffff] rounded-[5px] text-center items-center">
            <h2 className="text-center text-[15px] font-bold uppercase">{title}</h2>
            <p className="text-[px] text-center mt-1 ">{descricao}</p>
        </div>
    )
} 