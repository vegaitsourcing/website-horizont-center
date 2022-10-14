// Prima propove type, onclick
// type -> string, koji moze biti "border" ili "filled"
// onclick -> callback function

import React from "react";

import styles from "./short.button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlay } from "@fortawesome/free-solid-svg-icons";

export const ShortButton = ({ type, onclick }) => {
  return (
    <button onClick={onclick} className={styles.button}>
      <FontAwesomeIcon icon={type == "next" ? faChevronRight : faPlay} className={styles.icon} />
    </button>
  );
};
