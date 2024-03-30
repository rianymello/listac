import type { NextPage } from "next";
import styles from "./logo-frame.module.css";

const LogoFrame: NextPage = () => {
  return (
    <header className={styles.logoFrame}>
      <div className={styles.textFrame}>
        <div className={styles.groupVector}>
          <div className={styles.maskGroupFrame} />
          <h1 className={styles.listaC}>{`Lista C `}</h1>
        </div>
        <div className={styles.outlineArrowSmallDownInsta}>
          <b className={styles.sobre}>Sobre</b>
          <div className={styles.membrosWrapper}>
            <b className={styles.membros}>Membros</b>
          </div>
          <div className={styles.propostasWrapper}>
            <b className={styles.propostas}>Propostas</b>
          </div>
          <b className={styles.contactos}>Contactos</b>
        </div>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <b className={styles.sujestes}>Sujestões?</b>
        </button>
      </div>
    </header>
  );
};

export default LogoFrame;
