import type { NextPage } from "next";
import styles from "./meta2.module.css";

export type Meta2Type = {
  onClose?: () => void;
};

const Meta2: NextPage<Meta2Type> = ({ onClose }) => {
  return (
    <div className={styles.meta3}>
      <section className={styles.modal1}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>
              <div className={styles.mainIcon}>
                <p className={styles.p}>3</p>
              </div>
            </div>
          </div>
          <div className={styles.content1}>
            <b className={styles.title}>Titulo</b>
            <div
              className={styles.message}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis risus non eros venenatis elementum. `}</div>
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

export default Meta2;
