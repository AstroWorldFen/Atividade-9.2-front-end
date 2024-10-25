const Galeria = () => {
    const imagens = [
      {
        src: "src/assets/Thomas shelby 1.jpg", 
        alt: "Imagem 1 de Thomas Shelby",
        link: "https://www.netflix.com/title/80002479", 
      },
      {
        src: "src/assets/Thomas shelby 2.jpg", 
        alt: "Imagem 2 de Thomas Shelby", 
      },
      {
        src: "src/assets/Thomas shelby 3.jpg", 
        alt: "Imagem 3 de Thomas Shelby",
      },
      
    ];
  
    return (
      <div className="galeria-container">
        <h1>Galeria de Thomas Shelby</h1>
        <p>
          A galeria é um tributo visual a Thomas Shelby e seu mundo. 
          Aqui, você encontrará imagens icônicas da série Peaky Blinders.
        </p>
        <div className="imagens-galeria">
          {imagens.map((imagem, index) => (
            <div key={index} className="imagem-item">
              <a href={imagem.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={imagem.src} 
                  alt={imagem.alt} 
                  className="galeria-imagem" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Galeria;
  