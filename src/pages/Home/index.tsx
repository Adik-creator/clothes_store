import React from "react";
// import { redirect } from "react-router-dom";

import styles from "./Home.module.scss";
import { Header } from "../../components/Header";

export const Home: React.FC = () => {
  // const [value, setValue] = React.useState<boolean>(true);
  // if (value) {
  //   return redirect("/login");
  // }
  return (
    <div className={styles.home}>
      <Header />
      home
    </div>
  );
};
