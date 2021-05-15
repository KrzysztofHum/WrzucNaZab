import React from "react";
import {useStyles} from '../styles';

export default function Logo() {
	const styles = useStyles();
  return (
    <img
      src="/images/logo.png"
      alt="Zamów jedzenie"
      className={styles.largeLogo}
    ></img>
  );
}
