import React from 'react';
import styles from './Membros.module.css';
import Image from 'next/image';

import Lua from '@/public/assets/lua.png';

function Membros() {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.containertitulo} >
        <p className={styles.conheca}>Conheça nossos</p>
        <p className={styles.membros}>Membros</p>
    </div>

    <div>
    <Image
        src={Lua}
        alt="Foto da galera da lista"
        width={550}
        height={450}
      />
    </div>
    </div>
    </>
  );
}

export default Membros;
