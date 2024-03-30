import type { NextPage } from "next";
import styles from "./logic-gate-a-n-d.module.css";

const LogicGateAND: NextPage = () => {
  return (
    <div className={styles.logicGateAND}>
      <div
        className={styles.footerSection}
        data-scroll-to="footerSectionContainer"
      >
        <div className={styles.logicGateNOT}>
          <div className={styles.logicGateXOR}>
            <div className={styles.logicGateNAND}>
              <img
                className={styles.logicGateNOR}
                alt=""
                src="/logic-gate-n-o-r.svg"
              />
              <div className={styles.logicGateXNOR}>
                <div className={styles.logicGateNXOR}>
                  <div className={styles.signalSplitter}>
                    <b className={styles.socializeComA}>
                      Socialize com a Lista C!
                    </b>
                  </div>
                  <div className={styles.twitterParent}>
                    <img
                      className={styles.twitterIcon}
                      loading="lazy"
                      alt=""
                      src="/twitter.svg"
                    />
                    <img
                      className={styles.linkedinIcon}
                      loading="lazy"
                      alt=""
                      src="/linkedin.svg"
                    />
                    <img
                      className={styles.youtubeIcon}
                      loading="lazy"
                      alt=""
                      src="/youtube.svg"
                    />
                    <div className={styles.instagramWrapper}>
                      <img
                        className={styles.instagramIcon}
                        loading="lazy"
                        alt=""
                        src="/instagram.svg"
                      />
                    </div>
                    <img
                      className={styles.pinterestIcon}
                      loading="lazy"
                      alt=""
                      src="/pinterest.svg"
                    />
                  </div>
                  <div className={styles.logicGateNXORInner}>
                    <button className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <b className={styles.buildYourWorld}>BUILD YOUR WORLD</b>
                    </button>
                  </div>
                </div>
              </div>
              <img
                className={styles.logicGateNOR1}
                alt=""
                src="/logic-gate-n-o-r.svg"
              />
            </div>
          </div>
          <img
            className={styles.logicGateNOTChild}
            alt=""
            src="/vector-17.svg"
          />
        </div>
        <div className={styles.listaCByRianyMelloPedrWrapper}>
          <b className={styles.listaC}>
            2024 © Lista C - BY Riany Mello. Pedro Elias e Diogo Fragoso. -
            Todos direitos reservados.
          </b>
        </div>
      </div>
    </div>
  );
};

export default LogicGateAND;
