export const Contatos = () => {
  return (
    <div className="flex items-center justify-center py-10 bg-white">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-10 p-6 border border-black rounded-lg shadow-md">
        
        
        <div className="md:w-1/2">
          <h1 className="uppercase text-3xl font-semibold mb-4">Contato</h1>
          <p className="mb-2">
            <span className="font-semibold">Endereço:</span> Rua Catiguá 159 - sala 703, Tatuapé - SP
          </p>
          <p className="mb-2">
            <span className="font-semibold">E-mail:</span> contato@joicecamargoarquitetura.com.br
          </p>
          <p>
            <span className="font-semibold">Telefone:</span> (11) 97335-9681
          </p>
        </div>

        
        <div className="md:w-1/2 w-full">
          <iframe
            src="https://www.google.com/maps?q=Rua+Catiguá,+159,+Tatuapé,+SP&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            className="rounded shadow-md"
          ></iframe>
        </div>

      </div>
    </div>
  );
};
