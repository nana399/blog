import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../src/styles/utils.module.css";
import Link from "next/link";

const name = "Banana";
export const siteTitle = "Bananaのblog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile1.jpg"
              className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
            ></img>
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile1.jpg"
              className={`${utilsStyles.borderCircle} ${styles.headerDefaultImage}`}
            ></img>
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
