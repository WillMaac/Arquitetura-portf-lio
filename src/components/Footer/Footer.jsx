export const Footer = () => {
  return (
    <footer className="bg-[#6c7770] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        
        
        <div className="md:w-1/3">
          
          
          <p className="text-sm leading-relaxed">
            Formada em Arquitetura e Designer de interiores pelo Centro Universitário Belas Artes de São Paulo, atua há quase 17 anos no mercado, onde adquiriu experiência em escritórios renomados da grande São Paulo. Focada em reformas e decoração, hoje comanda sua própria equipe, onde já soma mais de 60 projetos residenciais e comerciais.
          </p>
        </div>

        
        <div className="md:w-1/3">
          <h3 className="uppercase font-semibold mb-2">O que fazemos</h3>
          <ul className="space-y-1 text-sm">
            <li>Arquitetura</li>
            <li>Design de interiores</li>
            <li>Assessoria de Obra</li>
            <li>Consultoria decorativa</li>
          </ul>
        </div>

        
        <div className="md:w-1/3">
          <h3 className="uppercase font-semibold mb-2">Navegação</h3>
          <ul className="space-y-1 text-sm">
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Avaliação</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
