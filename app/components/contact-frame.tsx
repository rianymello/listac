import type { NextPage } from "next";
import styles from "./contact-frame.module.css";

const ContactFrame: NextPage = () => {
  return (
    <section className={styles.contactFrame}>
      <div className={styles.contactFrame1}>
        <div className={styles.maskGroupFrame}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group-5@2x.png"
          />
          <h1 className={styles.entreEmContato}>ENTRE EM CONTATO CONOSGO</h1>
          <div className={styles.textFrame}>
            <h1 className={styles.queremosTeOuvir}>Queremos te ouvir!</h1>
          </div>
          <div className={styles.frameFrame}>
            <div className={styles.ellipseFrames} />
            <div className={styles.vectorFrame}>
              <div className={styles.vectorFrame1} />
              <div className={styles.frameInstance}>
                <img className={styles.outlineChevronSmallDown} alt="" />
                <img
                  className={styles.textFrameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textFrame1}>
        <div className={styles.groupFrames}>
          <div className={styles.textFrame2}>
            <h1 className={styles.nossas}>NOSSAS</h1>
            <h1 className={styles.propostas}>PROPOSTAS</h1>
          </div>
          <div className={styles.parentSocialMedia}>
            <div className={styles.desejaConhecerMaisContainer}>
              <p className={styles.desejaConhecerMais}>
                Deseja conhecer mais sobre cada uma de nossas propostas e como
              </p>
              <p className={styles.estoProgredindoAqui}>
                {" "}
                estão progredindo? Aqui, mantemos você atualizado sobre o status
              </p>
              <p className={styles.deCadaIniciativa}>
                {" "}
                de cada iniciativa que molda o futuro da nossa Associação de
                Estudantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFrame;
