import Image from 'next/image';
import React from 'react';
import MiguelAngelo from '@/public/assets/miguelangelo.png'
import styles from './Banner.module.css';


function Banner() {
  return (
    <>
    <div className={styles.bannercontainer}>
      <div className={styles.text}>
        <div className={styles.textdiferente}>
      <p >Contem conosco e nós</p>
      <p >Contamos com vocês</p>
      </div>
      <p>Explore os bastidores da nossa Lísta! Projetos, progresso e metas futuras - tudo aqui. 
          Somos uma comunidade unida, apaixonada por fazer a diferença. 
          Conheça nossos membros e faça parte dessa jornada.
          Todos contam, todos são bem-vindos!</p>
          </div>
      <Image
        src={MiguelAngelo}
        alt="Crocodilo"
        width={450}
        height={400}
      />
      
    </div>
    </>
  );
}

export default Banner;
