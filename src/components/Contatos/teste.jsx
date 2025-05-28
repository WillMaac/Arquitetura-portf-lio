function MyMapComponent() {

  const mapUrl = "";

  return (
    <div>
      <h2>Meu Mapa</h2>
      <iframe
        src={mapUrl}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default MyMapComponent;