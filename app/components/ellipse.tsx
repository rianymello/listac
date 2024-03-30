import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./ellipse.module.css";

export type EllipseType = {
  maskGroup?: string;
  pEDROELIAS?: string;
  text?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const Ellipse: NextPage<EllipseType> = ({
  maskGroup,
  pEDROELIAS,
  text,
  propPadding,
  propPadding1,
}) => {
  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.ellipse}>
      <div className={styles.ellipseChild} />
      <div className={styles.ellipseInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.pedroEliasWrapper} style={frameDiv6Style}>
          <h1 className={styles.pedroElias}>{pEDROELIAS}</h1>
        </div>
        <div className={styles.arrow}>
          <div className={styles.rectangle} style={rectangleStyle}>
            <img className={styles.textIcon} loading="lazy" alt="" src={text} />
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
      </div>
    </div>
  );
};

export default Ellipse;
