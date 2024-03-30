import type { NextPage } from "next";
import Ellipse from "./ellipse";
import styles from "./group.module.css";

const Group: NextPage = () => {
  return (
    <section className={styles.group}>
      <div className={styles.line}>
        <div className={styles.text}>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/vector-8.svg"
          />
          <h1 className={styles.conheaNossos}>CONHEÇA NOSSOS</h1>
          <div className={styles.textContainer}>
            <h1 className={styles.membros}>MEMBROS</h1>
          </div>
          <div className={styles.component2} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ellipse}>
            <div className={styles.ellipseChild} />
            <div className={styles.quadrantDivider}>
              <div className={styles.text1}>
                <div className={styles.rectangle}>
                  <div className={styles.line1} />
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.maskGroup}>
                <h1 className={styles.anaCarlaA}>ANA CARLA A</h1>
                <div className={styles.ellipseWrapper}>
                  <img
                    className={styles.ellipseIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-10.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.vitaeSapienPellentesqueContainer}>
              <p className={styles.vitaeSapienPellentesque}>
                Vitae sapien pellentesque habitant morbi
              </p>
              <p
                className={styles.nuncViverraAliquet}
              >{`nunc. Viverra aliquet  porttitor rhoncus `}</p>
              <p className={styles.liberoJustoLaoreet}>
                libero justo laoreet sit amet vitae.
              </p>
            </div>
          </div>
          <Ellipse
            maskGroup="/mask-group-2@2x.png"
            pEDROELIAS="PEDRO ELIAS"
            text="/vector-10.svg"
          />
          <Ellipse
            maskGroup="/mask-group-3@2x.png"
            pEDROELIAS="DIOGO ALVES"
            text="/vector-12.svg"
            propPadding="0rem 0.938rem"
            propPadding1="0rem 0rem 0rem 0.625rem"
          />
          <div className={styles.ellipse1}>
            <div className={styles.ellipseItem} />
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.maskGroupIcon1}
                    alt=""
                    src="/mask-group-4@2x.png"
                  />
                </div>
              </div>
              <h1 className={styles.pandaPele}>PANDA PELE</h1>
            </div>
            <div className={styles.ellipseInner}>
              <div className={styles.frameContainer}>
                <div className={styles.textWrapper}>
                  <img
                    className={styles.textIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-10.svg"
                  />
                </div>
                <div className={styles.vitaeSapienPellentesqueContainer1}>
                  <p className={styles.vitaeSapienPellentesque1}>
                    Vitae sapien pellentesque habitant morbi
                  </p>
                  <p
                    className={styles.nuncViverraAliquet1}
                  >{`nunc. Viverra aliquet  porttitor rhoncus `}</p>
                  <p className={styles.liberoJustoLaoreet1}>
                    libero justo laoreet sit amet vitae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Group;
