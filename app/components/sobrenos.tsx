import type { NextPage } from "next";
import styles from "./sobrenos.module.css";

const SobreNos: NextPage = () => {
  return (
    <>
  <div className={styles.vector}>
        <div className={styles.sobreParent}>
          <h1 className={styles.sobre}>SOBRE</h1>
          <h1 className={styles.ns}>NÓS</h1>
        </div>
        <div className={styles.bemVindoAssociaoContainer}>
          <p
            className={styles.bemVindoAssociao}
          >{`Bem-vindo à Associação de Estudantes, onde cada capítulo conta uma história `}</p>
          <p
            className={styles.nicaECada}
          >{`única e cada estudante é um protagonista em nossa jornada coletiva. Somos mais `}</p>
          <p
            className={styles.queUmaLista}
          >{`que uma lista; somos uma comunidade vibrante, forjada pela paixão, inclusão e `}</p>
          <p
            className={styles.ambioAquiCada}
          >{`ambição. Aqui, cada elo humano compõe o tecido de nossa trajetória, e cada sonho `}</p>
          <p
            className={styles.alimentaNossaChama}
          >{`alimenta nossa chama coletiva. Juntos, celebramos a diversidade, cultivamos `}</p>
          <p
            className={styles.excelnciaAcadmicaE}
          >{`excelência acadêmica e trilhamos um caminho de aprendizado, onde cada passo `}</p>
          <p
            className={styles.umaConquistaCompartilhada}
          >{`é uma conquista compartilhada. `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.contemconosco}>
            <b>{`#ContemConosco `}</b>
          </p>
          <button className={styles.path}>
              <div className={styles.pathChild} />
              <b className={styles.letsGetIn}>LET’S GET IN TOUCH</b>
            </button>
        </div>
      </div>
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src="/mask-group@2x.png"
      />
      <section className={styles.line}>
        <div className={styles.vector1}>
          <div className={styles.rectangleParent}>
            <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreNos;