import type { NextPage } from "next";
import Meta from "./meta";
import FrameComponent from "./frame-component";
import styles from "./propostas.module.css";

const Propostas: NextPage = () => {
  return (
    <div className={styles.propostas} data-scroll-to="propostasContainer">
      <img
        className={styles.propostasChild}
        loading="lazy"
        alt=""
        src="/vector-15.svg"
      />
      <div className={styles.metas1234}>
        <Meta prop="01" meta1="Meta 1" />
        <FrameComponent prop="02" meta2="Meta 2" />
        <FrameComponent
          prop="03"
          meta2="Meta 3"
          propWidth="12.875rem"
          propPadding="0rem 0.5rem 0rem 0rem"
          propGap="1.438rem"
          propLeft="1.125rem"
          propLeft1="2.438rem"
          propPadding1="0rem 2.25rem"
        />
        <Meta
          prop="04"
          meta1="Meta 4"
          propGap="1.438rem"
          propLeft="1.25rem"
          propLeft1="2.25rem"
          propMinWidth="5.5rem"
          propPadding="0rem 2.313rem"
          propAlignSelf="stretch"
          propMinWidth1="5.438rem"
        />
      </div>
    </div>
  );
};

export default Propostas;
