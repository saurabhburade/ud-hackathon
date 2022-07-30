import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import AllBalances from "../components/TokenBalances/AllBalances";
import { uauth, uauthCore } from "../config/connectors";

const Home: NextPage = () => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    console.log({ uauthCore });

    if (uauthCore) {
      uauthCore
        ?.user()
        ?.then(setUser)
        ?.catch((error) => {
          console.error("profile error:", error);
        });
    }
  }, [uauthCore, uauth]);
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-white dark:from-cyan-900/10">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <AllBalances username={user||null}/>
    </div>
  );
};

export default Home;
