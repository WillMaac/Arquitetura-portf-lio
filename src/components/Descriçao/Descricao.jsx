import { Card } from "../Card/Card";

export const Descricao = () => {
  return (
    <section className="bg-[#F3F4F3] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase mb-4 sm:mb-6 md:mb-8 text-gray-800">
          O Que Fazemos
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12">
          Trabalhamos com o <strong>estilo contemporâneo e atemporal</strong>, onde buscamos entender o gosto do cliente e aplicar de forma personalizada, com um toque de decoração afetiva para ser sentida, com <strong>características únicas</strong> e sempre diferente uns dos outros, acreditamos que um lar deve refletir seus moradores.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center items-center">
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
