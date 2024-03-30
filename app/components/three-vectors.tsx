import type { NextPage } from "next";
import styles from "./three-vectors.module.css";

const ThreeVectors: NextPage = () => {
  return (
    <div className={styles.threeVectors}>
      <img
        className={styles.unnamedVectorIcon}
        alt=""
        src="/unnamed-vector.svg"
      />
      <img
        className={styles.rectangularMaskIcon}
        alt=""
        src="/rectangular-mask.svg"
      />
      <img
        className={styles.michelangeloImageIcon}
        loading="lazy"
        alt=""
        src="/vector-1.svg"
      />
      <div className={styles.maskGroupFrame}>
        <div className={styles.maskGroupFrameChild} />
        <img className={styles.maskGroupIcon} alt="" />
      </div>
      <img
        className={styles.pexelsMichelangeloBuonarrotiIcon}
        alt=""
        src="/pexelsmichelangelobuonarroti8728382-11@2x.png"
      />
    </div>
  );
};

export default ThreeVectors;
