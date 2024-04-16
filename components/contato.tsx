import React from 'react';
import styles from './Contato.module.css';
import Image from 'next/image';

import Lua from '@/public/assets/lua.png';

function Contato() {
  return (
    <>
      <div className={styles.container}>
     

        <div className={styles.imagemContainer}>
          <Image
            src={Lua}
            alt="Foto da galera da lista"
            width={1000}
            height={150}
            className={styles.imagem}
          />
          <div className={styles.sobreposicao}></div>
          <p className={styles.textosobreposto}>Entre em contato conosco</p>
          <p className={styles.textosobreposto2}>Queremos te ouvir</p>
        </div>
      </div>
    </>
  );
}

export default Contato;
