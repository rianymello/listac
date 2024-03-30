import type { NextPage } from "next";
import GroupText from "./group-text";
import styles from "./frame-component.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.arrowSmallRightInstanceParent}>
        <div className={styles.arrowSmallRightInstance}>
          <div className={styles.metaFrame}>
            <b className={styles.contemConoscoEContainer}>
              <span className={styles.contem}>Contem</span>
              <span className={styles.conoscoENos}> conosco e nos</span>
            </b>
            <b className={styles.contamosComVocsContainer}>
              <span>{`Contamos `}</span>
              <span className={styles.comVocs}>com vocês</span>
            </b>
          </div>
          <div className={styles.twitterLinkedinYouTubePintParent}>
            <img
              className={styles.twitterLinkedinYouTubePint}
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
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
          <button className={styles.buildYourWorldText}>
            <div className={styles.buildYourWorldTextChild} />
            <b className={styles.vejaNossaAo}>Veja nossa ação mais recente</b>
          </button>
        </div>
        <div className={styles.headerFrame}>
          <h1 className={styles.rectangleText}>{` `}</h1>
          <GroupText />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
