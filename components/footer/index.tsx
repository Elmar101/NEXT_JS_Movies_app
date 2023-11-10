import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} >
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/Elmar101?tab=repositories" target="_blank">
        Elmar Amanov
      </Link>
    </footer>
  );
}
