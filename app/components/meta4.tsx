import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import Meta from "./meta";
import PortalPopup from "./portal-popup";
import styles from "./meta4.module.css";

export type MetaType = {
  prop?: string;
  meta1?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Meta: NextPage<MetaType> = ({
  prop,
  meta1,
  propGap,
  propLeft,
  propLeft1,
  propMinWidth,
  propPadding,
  propAlignSelf,
  propMinWidth1,
}) => {
  const [isMeta1Open, setMeta1Open] = useState(false);
  const meta1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      minWidth: propMinWidth,
    };
  }, [propLeft1, propMinWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const meta11Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const openMeta1 = useCallback(() => {
    setMeta1Open(true);
  }, []);

  const closeMeta1 = useCallback(() => {
    setMeta1Open(false);
  }, []);

  return (
    <>
      <div className={styles.meta1} onClick={openMeta1} style={meta1Style}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.ellipseGroup} style={frameDiv1Style}>
            <div className={styles.frameItem} />
            <b className={styles.b} style={bStyle}>
              {prop}
            </b>
          </div>
        </div>
        <div className={styles.meta1Inner} style={frameDiv2Style}>
          <div className={styles.outlineArrowSmallRightParent}>
            <img
              className={styles.outlineArrowSmallRight}
              loading="lazy"
              alt=""
              src="/outline--arrowsmallright.svg"
            />
            <h1 className={styles.meta11} style={meta11Style}>
              {meta1}
            </h1>
          </div>
        </div>
      </div>
      {isMeta1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMeta1}
        >
          <Meta onClose={closeMeta1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Meta;
