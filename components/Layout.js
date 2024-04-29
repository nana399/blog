import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../src/styles/utils.module.css";

const name = 'Banana';
export const siteTitle = 'Net.js blog'

function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          src="/images/profile.png"
          className={utilsStyles.borderCircle}
        ></img>
        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;