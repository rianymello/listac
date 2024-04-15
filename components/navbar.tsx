import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

function Navbar() {
  return (
  <div className={styles.nav}>
      
        <p>LISTA C</p>
      <div className={styles.navitens}>

      
            <p>Sobre</p>
            
           
            <p>Membros</p>
            
       
            <p>Propostas</p>
         
         
            <p>Contatos</p>
         
          </div>
   
        <p className={styles.bntsugestoes}>Sugestões</p>
     
      </div>

  );
}

export default Navbar;
