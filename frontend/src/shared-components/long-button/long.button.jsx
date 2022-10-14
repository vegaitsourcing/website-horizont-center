// Prima propove value, type, onclick
// value -> string
// type -> string, koji moze biti "border" ili "filled"
// onclick -> callback function
// style -> inline stilovi koji ce biti dodati na dugme
import React from "react";

import styles from "./long.button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const LongButton = ({ value, type, onclick, style }) => {
  return (
    <button
      onClick={onclick}
      className={styles.button + " " + (type == "border" ? styles.border : styles.filled)}
      style={style}
    >
      {value}
      <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
    </button>
  );
};
