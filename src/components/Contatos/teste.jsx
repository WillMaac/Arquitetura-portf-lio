function MyMapComponent() {
  // **AVISO:** O URL que você forneceu para o 'src'
  // (https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.39538847085!2d-46.92494297037979!3d-23.681434657529874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1747531886864!5m2!1spt-BR!2sbr)
  // NÃO é um URL válido para incorporar um mapa do Google Maps.
  // Você precisa gerar um código de incorporação REAL do Google Maps
  // ou usar a API de Incorporação do Google Maps.
  // O URL correto geralmente começa com algo como
  // "https://www.google.com/maps/embed/v1/..." ou obtido
  // diretamente da opção "Incorporar mapa" no Google Maps.

  const mapUrl = ""; // <<-- Substitua por um URL de incorporação válido

  return (
    <div>
      <h2>Meu Mapa</h2>
      <iframe
        src={mapUrl} // Use a variável com o URL correto
        width="600"
        height="450"
        // O atributo style em JSX usa um objeto JavaScript
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map" // É uma boa prática adicionar um título para acessibilidade
      ></iframe>
    </div>
  );
}

export default MyMapComponent;