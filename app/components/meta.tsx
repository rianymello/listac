import type { NextPage } from "next";
import styles from "./meta.module.css";

export type MetaType = {
  onClose?: () => void;
};

const Meta: NextPage<MetaType> = ({ onClose }) => {
  return (
    <div className={styles.meta1}>
      <section className={styles.modal1}>
        <div className={styles.content}>
          <div className={styles.fRAMEinner}>
            <div className={styles.icon}>
              <div className={styles.mainIcon}>
                <p className={styles.p}>1</p>
              </div>
            </div>
          </div>
          <div className={styles.content1}>
            <b className={styles.title}>Baile de Finalistas</b>
            <div className={styles.message}>
              Essa nossa proposta foi vetada pro motivos de força maior mas
              faremos o possivel para que em breve a decisão seja revista
            </div>
          </div>
        </div>
        <div className={styles.buttongroup}>
          <div className={styles.button}>
            <div className={styles.content2}>
              <div className={styles.aaa}>+</div>
              <div className={styles.m}>Mais</div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.content3}>
              <div className={styles.icon1}>􀈒</div>
              <div className={styles.cancel}>Voltar</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meta;
