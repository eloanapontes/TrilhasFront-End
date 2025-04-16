import React from 'react';
import styles from './Card.module.css';

type ProfileCardProps = {
  nome: string;
  descricao: string;
  imagemUrl: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ nome, descricao, imagemUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imagemUrl} alt={nome} className={styles.imagem} />
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.descricao}>{descricao}</p>
    </div>
  );
};

export default ProfileCard;
