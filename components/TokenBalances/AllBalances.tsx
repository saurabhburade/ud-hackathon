import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import React, { useEffect, useState } from "react";
import { uauthCore } from "../../config/connectors";
import Row from "./TokenRow";
import { fetchBalances } from "./utils/balanceFetcher";

function AllBalances({ username }) {
  const [tokenBalanceList, setTokenBalanceList] = useState([]);
  const [lodingBalances, setLodingBalances] = useState(true);
  const [tvl, setTvl] = useState(0);
  const { account } = useWeb3React();
  console.log("uauthCore", { username });

  useEffect(() => {
    const fetcher = async () => {
      await setLodingBalances(true);

      const d = await fetchBalances(
        "0x087e9c8ef2d97740340a471ff8bb49f5490f6cf6"
      );
      console.log({ d });
      await setLodingBalances(false);

      if (d?.sortedTokens) {
        setTokenBalanceList(d?.sortedTokens || []);
        setTvl(d?.ethtotalPortfolioBUSD);
      }
    };
    if (account) {
      fetcher();
    }
  }, [account]);
  return (
    <div className="mx-20 my-5">
      <div className="flex items-center justify-between p-5 py-10 my-2 bg-gray-100 rounded-md dark:bg-gray-800">
        {account ? (
          <div className="">
            <img
              src={`https://avatars.dicebear.com/api/big-smile/${
                account || "unknown"
              }.svg`}
              alt=""
              className="w-16 rounded-xl"
            />
            {username && account && (
              <h1 className="text-xl font-bold">Account : {username?.sub}</h1>
            )}
            <h1 className="text-xl font-bold">Address : {account}</h1>
          </div>
        ) : (
          <h1 className="text-xl font-bold">Please Connect your wallet</h1>
        )}
        {lodingBalances ? (
          <div className="overflow-hidden w-[10em] text-ellipsis animate-pulse">
            <div className="h-10 rounded bg-slate-700"></div>
          </div>
        ) : (
          <h1 className="text-5xl font-bold">
            ${new BigNumber(tvl).toFormat(2)}
          </h1>
        )}
       
      </div>

      {tokenBalanceList?.length > 0 && (
        <div className="text-sm">
          <div className="grid grid-cols-7 mt-10">
            <p className="pb-6"></p>
            <p className="pb-6">Token</p>
            <p className="pb-6 pr-8">Balance</p>

            <p className="pb-6 pr-8">Price</p>
            <p className="pb-6 pr-8">Total</p>
            <p className="pb-6 pr-8">Tags</p>
            <p className="pb-6 pr-8">Remark</p>
          </div>
          {tokenBalanceList?.map((token) => {
            return <Row token={token} />;
          })}
        </div>
      )}
      {/* <Row /> */}
    </div>
  );
}

export default AllBalances;
