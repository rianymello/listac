import React from 'react';
import styles from './Metas.module.css';
import Image from 'next/image';

function Contato() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.propostastitulos}>
        <div className={styles.esquerda}>
        <p>Nossas</p>
        <p>Propostas</p>
        </div>

        <p>Deseja conhecer mais sobre cada uma de nossas propostas e como
        estão progredindo? Aqui, mantemos você atualizado sobre o status
        de cada iniciativa que molda o futuro da nossa Associação de Estudantes.</p>
        </div>

        <div className={styles.propostaspropostas}>

            <div className={styles.containermeta}>
            <p className={styles.meta}>01</p>
            <p>Meta 1</p>
            </div>
            <div className={styles.containermeta}>
            <p className={styles.meta}>02</p>
            <p>Meta 2</p>
            </div>
            <div className={styles.containermeta}>
            <p className={styles.meta}>03</p>
            <p>Meta 3</p>
            </div>
            <div className={styles.containermeta}>
            <p className={styles.meta}>04</p>
            <p>Meta 4</p>
            </div>

        </div>

      </div>
    </>
  );
}

export default Contato;
