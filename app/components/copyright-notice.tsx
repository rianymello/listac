import type { NextPage } from "next";
import styles from "./copyright-notice.module.css";

const CopyrightNotice: NextPage = () => {
  return (
    <section className={styles.copyrightNotice}>
      <div className={styles.nestedFramesSet}>
        <div className={styles.socializeFrame}>
          <div className={styles.socialMediaLogos}>
            <div className={styles.buildWorldLabel}>
              <img
                className={styles.vectorClusterIcon}
                alt=""
                src="/vector-cluster.svg"
              />
              <div className={styles.buildWorldLabelInner}>
                <div className={styles.frameParent}>
                  <div className={styles.socializeComAListaCWrapper}>
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
                  <button className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <b className={styles.buildYourWorld}>BUILD YOUR WORLD</b>
                  </button>
                </div>
              </div>
              <img
                className={styles.vectorClusterIcon1}
                alt=""
                src="/vector-cluster1.svg"
              />
            </div>
          </div>
          <img
            className={styles.socializeFrameChild}
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
    </section>
  );
};

export default CopyrightNotice;
