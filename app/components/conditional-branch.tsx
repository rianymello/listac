import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./conditional-branch.module.css";

const ConditionalBranch: NextPage = () => {
  const onSobreTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sobreNosContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPropostasTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='propostasContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactosTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='footerSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.conditionalBranch}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.capturaDeTela20240228100Wrapper}>
                <img
                  className={styles.capturaDeTela20240228100Icon}
                  alt=""
                  src="/captura-de-tela-20240228-100645removebgpreviewphotoroom-1@2x.png"
                />
              </div>
              <nav className={styles.frameNav}>
                <div className={styles.sobreWrapper}>
                  <b className={styles.sobre} onClick={onSobreTextClick}>
                    Sobre
                  </b>
                </div>
                <div className={styles.membrosWrapper}>
                  <b className={styles.membros}>Membros</b>
                </div>
                <div className={styles.propostasWrapper}>
                  <b
                    className={styles.propostas}
                    onClick={onPropostasTextClick}
                  >
                    Propostas
                  </b>
                </div>
                <div className={styles.contactosWrapper}>
                  <b
                    className={styles.contactos}
                    onClick={onContactosTextClick}
                  >
                    Contactos
                  </b>
                </div>
                <div className={styles.sujestaobotao}>
                  <div className={styles.sujestaobotaoChild} />
                  <b className={styles.sujestes}>Sujestões?</b>
                </div>
              </nav>
            </div>
            <div className={styles.vectorWrapper}>
              <img className={styles.frameChild} alt="" src="/vector-3.svg" />
            </div>
          </div>
          <div className={styles.listaCParent}>
            <h1 className={styles.listaC}>{`Lista C `}</h1>
            <img className={styles.frameItem} alt="" src="/vector-4.svg" />
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.contemConoscoENsParent}>
            <b className={styles.contemConoscoEContainer}>
              <span className={styles.contem}>Contem</span>
              <span className={styles.conoscoENs}> conosco e nós</span>
            </b>
            <b className={styles.contamosComVocsContainer}>
              <span>{`Contamos `}</span>
              <span className={styles.comVocs}>com vocês</span>
            </b>
          </div>
          <div className={styles.exploreOsBastidoresContainer}>
            <p
              className={styles.exploreOsBastidores}
            >{`Explore os bastidores da nossa Lísta! Projetos, progresso e metas futuras - tudo aqui. `}</p>
            <p
              className={styles.somosUmaComunidade}
            >{`Somos uma comunidade unida, apaixonada por fazer a diferença. `}</p>
            <p className={styles.conheaNossosMembros}>
              Conheça nossos membros e faça parte dessa jornada.
            </p>
            <p className={styles.todosContamTodos}>
              Todos contam, todos são bem-vindos!
            </p>
          </div>
        </div>
      </div>
      <img
        className={styles.conditionalBranchChild}
        alt=""
        src="/vector-1.svg"
      />
    </section>
  );
};

export default ConditionalBranch;
