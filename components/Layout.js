import Head from "next/head";

function Layout() {
  return (
    <div>
      <Head>
        <link rel= 'icon' href="/favicon.ico" />
      </Head>
      <header>
        <img src= '/images/profile.png'></img>
      </header>
    </div>
  );
}

export default Layout;