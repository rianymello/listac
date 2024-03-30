import type { NextPage } from "next";
import styles from "./nested-frames.module.css";

const NestedFrames: NextPage = () => {
  return (
    <section className={styles.nestedFrames}>
      <div className={styles.quadrupleFrames}>
        <div className={styles.linkedEllipses}>
          <div className={styles.arrowFrames}>
            <div className={styles.linkedArrows} />
            <div className={styles.metaFrames}>
              <div className={styles.frameFrames} />
              <b className={styles.textFrame}>01</b>
            </div>
          </div>
          <div className={styles.socialMediaIcons}>
            <div className={styles.vectorAlignment}>
              <img
                className={styles.outlineArrowSmallRight}
                loading="lazy"
                alt=""
                src="/outline--arrowsmallright.svg"
              />
              <h1 className={styles.meta1}>meta 1</h1>
            </div>
          </div>
        </div>
        <div className={styles.linkedEllipses1}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.ellipseGroup}>
              <div className={styles.frameItem} />
              <b className={styles.b}>02</b>
            </div>
          </div>
          <div className={styles.linkedEllipsesInner}>
            <div className={styles.outlineArrowSmallRightParent}>
              <img
                className={styles.outlineArrowSmallRight1}
                alt=""
                src="/outline--arrowsmallright.svg"
              />
              <h1 className={styles.meta2}>meta 2</h1>
            </div>
          </div>
        </div>
        <div className={styles.linkedEllipses2}>
          <div className={styles.ellipseContainer}>
            <div className={styles.frameInner} />
            <div className={styles.frameDiv}>
              <div className={styles.ellipseDiv} />
              <b className={styles.b1}>03</b>
            </div>
          </div>
          <div className={styles.linkedEllipsesChild}>
            <div className={styles.outlineArrowSmallRightGroup}>
              <img
                className={styles.outlineArrowSmallRight2}
                alt=""
                src="/outline--arrowsmallright.svg"
              />
              <h1 className={styles.meta3}>meta 3</h1>
            </div>
          </div>
        </div>
        <div className={styles.linkedEllipses3}>
          <div className={styles.ellipseParent1}>
            <div className={styles.frameChild1} />
            <div className={styles.ellipseParent2}>
              <div className={styles.frameChild2} />
              <div className={styles.vectorLinesParent}>
                <b className={styles.metaElements}>04</b>
              </div>
            </div>
          </div>
          <div className={styles.linkedEllipsesInner1}>
            <div className={styles.outlineArrowSmallRightContainer}>
              <img
                className={styles.outlineArrowSmallRight3}
                alt=""
                src="/outline--arrowsmallright.svg"
              />
              <h1 className={styles.meta4}>meta 4</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NestedFrames;
