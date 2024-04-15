import Image from 'next/image';
import React from 'react';
import Galera from '@/public/assets/galera.png'
import styles from './Sobre.module.css';


function Sobre() {
  return (
    <div className={styles.containersobre}>
       <Image
        src={Galera}
        alt="Foto da galera da lista"
        width={450}
        height={450}
      />
      <div>
      <p className={styles.sobre}>Sobre </p>
        <p className={styles.nos}> nós</p>
        </div>
      <p>Bem-vindo à Associação de Estudantes, onde cada capítulo conta uma história 
        única e cada estudante é um protagonista em nossa jornada coletiva. Somos mais 
        que uma lista; somos uma comunidade vibrante, forjada pela paixão, inclusão e 
        ambição. Aqui, cada elo humano compõe o tecido de nossa trajetória, e cada sonho 
        alimenta nossa chama coletiva. Juntos, celebramos a diversidade, cultivamos 
        excelência acadêmica e trilhamos um caminho de aprendizado, onde cada passo 
        é uma conquista compartilhada. 
        #ContemConosco </p>
        
    </div>
  );
}

export default Sobre;
