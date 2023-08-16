import { ReactNode } from "react";

import styles from "./styles.module.css";

function Button({
  children,
  type = "default",
}: {
  children: ReactNode;
  type?: "primary" | "default";
}) {
  return (
    <button
      className={`${styles.button} ${
        type === "primary" ? styles.primary : styles.default
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
