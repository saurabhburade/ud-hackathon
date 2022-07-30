import { Disclosure } from "@headlessui/react";
import BigNumber from "bignumber.js";
import { NETWORK_LABEL } from "../../config/networks";

// import { NETWORK_LABEL } from "../../constants/networks";

const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const Row = ({ token, loadingPrices, totalTvl = 0 }) => {
  const allocation = new BigNumber(token?.total_usd)
    .div(totalTvl)
    .multipliedBy(100)
    ?.toFormat(4);
  return (
    <>
      {" "}
      <div className="grid items-center content-center grid-cols-7 py-3 text-sm hover:bg-gray-900/10 hover:cursor-pointer">
        <div className="relative">
          <img
            src={
              token?.logoURI ||
              "https://assets.coingecko.com/coins/images/13920/thumb/venus_dai.png?1612844411"
            }
            alt=""
            className="p-3 mx-3 w-14 backdrop-blur-sm bg-white/5 rounded-2xl"
          />
        </div>
        <div>
          <p className=" text-ellipsis">{token?.name || "Venus DAI"}</p>
          <p>{token?.symbol || "vDAI"}</p>
        </div>

        <div className="max-w-[8em] overflow-hidden text-ellipsis">
          {new BigNumber(token?.balance)
            ?.div(Math.pow(10, token?.decimals))
            ?.toFormat(5) || "11579207.58401"}
        </div>

        {token?.price_usd ? (
          <div className="max-w-[5em] overflow-hidden text-ellipsis">
            {new BigNumber(token?.price_usd)?.toFormat(4)}
          </div>
        ) : (
          <div className="overflow-hidden max-w-[5em] text-ellipsis animate-pulse">
            <div className="h-6 rounded bg-slate-700"></div>
          </div>
        )}
        {token?.price_usd ? (
          <div className="max-w-[9em] overflow-hidden text-ellipsis">
            {new BigNumber(token?.total_usd)?.toFormat(4)}
          </div>
        ) : (
          <div className="overflow-hidden max-w-[5em] text-ellipsis animate-pulse">
            <div className="h-6 rounded bg-slate-700"></div>
          </div>
        )}
        <div>
          <p className="p-1 px-3 text-xs text-blue-100 bg-gray-800 rounded-lg w-fit">
            {NETWORK_LABEL[token?.chainId]}
          </p>
        </div>
        <div className="">
          <p className="p-1 px-3 text-xs text-blue-100 bg-gray-800 rounded-lg w-fit">
            {token?.issue || null}
          </p>
        </div>
      </div>
    </>
  );
};

export default Row;
