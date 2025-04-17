import React from 'react';
import styles from './Gallery.module.css';


type GalleryProps = {
  imagens: string[];
};

const Gallery: React.FC<GalleryProps> = ({ imagens }) => {
  return (
    <div className={styles.gallery}>
      {imagens.map((imagem, index) => (
        <div key={index} className={styles.item}>
          <img src={imagem} alt={`Galeria ${index + 1}`} className={styles.imagem} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
