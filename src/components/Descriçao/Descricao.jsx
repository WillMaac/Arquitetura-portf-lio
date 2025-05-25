import { Card } from "../Card/Card";

export const Descricao = () => {
  return (
    <section className="bg-[#F3F4F3] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        <h1 className="text-3xl md:text-4xl font-semibold uppercase mb-6 text-gray-800">
          O Que Fazemos
        </h1>

        
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Trabalhamos com o <strong>estilo contemporâneo e atemporal</strong>, onde buscamos entender o gosto do cliente e aplicar de forma personalizada, com um toque de decoração afetiva para ser sentida, com <strong>características únicas</strong> e sempre diferente uns dos outros, acreditamos que um lar deve refletir seus moradores.
        </p>

        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="Arquitetura"
            descricao="A empresa de design de interiores oferece um serviço completo, que atende às necessidades dos clientes e cria projetos que atendam aos seus sonhos."
          />
          <Card
            title="Design de Interiores"
            descricao="Planejamos o desenvolvimento de projetos para áreas residenciais e comerciais especificando itens necessários para que o ambiente fique completo."
          />
          <Card
            title="Assessoria de Obra"
            descricao="Tem caráter preventivo e busca conferir a qualidade dos serviços, atestando e documentando a instalação do projeto executado."
          />
          <Card
            title="Consultoria Decorativa"
            descricao="Para ambientes com a arquitetura pronta que não precisem de reforma, apenas melhorar o espaço de forma rápida, eficaz com itens de decoração."
          />
        </div>
      </div>
    </section>
  );
};
