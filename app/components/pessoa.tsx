import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./pessoa.module.css";

export type PessoaType = {
  pessoa2Dsg?: string;
  ngela?: string;
  presidenteDaAssembleiaGer?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Pessoa: NextPage<PessoaType> = ({
  pessoa2Dsg,
  ngela,
  presidenteDaAssembleiaGer,
  propPadding,
  propPadding1,
  propMinWidth,
}) => {
  const pessoa11Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const ngelaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.pessoa11} style={pessoa11Style}>
      <img
        className={styles.pessoa2Dsg}
        loading="lazy"
        alt=""
        src={pessoa2Dsg}
      />
      <div className={styles.ngelaWrapper} style={frameDivStyle}>
        <h1 className={styles.ngela} style={ngelaStyle}>
          {ngela}
        </h1>
      </div>
      <div className={styles.presidenteDaAssembleia}>
        {presidenteDaAssembleiaGer}
      </div>
    </div>
  );
};

export default Pessoa;
