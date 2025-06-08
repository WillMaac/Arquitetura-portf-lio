export const Contatos = () => {
  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-6 border border-black rounded-lg shadow-md">
        <div className="w-full md:w-1/2">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Contato
          </h1>
          <p className="text-base sm:text-lg mb-2">
            <span className="font-semibold">Endereço:</span> Rua Catiguá 159 - sala 703, Tatuapé - SP
          </p>
          <p className="text-base sm:text-lg mb-2">
            <span className="font-semibold">E-mail:</span> contato@joicecamargoarquitetura.com.br
          </p>
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Telefone:</span> (11) 97335-9681
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps?q=Rua+Catiguá,+159,+Tatuapé,+SP&output=embed"
            className="w-full h-48 sm:h-56 md:h-64 lg:h-80 rounded shadow-md"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
