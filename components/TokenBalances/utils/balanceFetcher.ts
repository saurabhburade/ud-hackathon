

import axios from "axios";
import BigNumber from "bignumber.js";
import _ from "lodash";
import Web3 from "web3";
import balanceCheckAbi from "../../../config/abis/balanceCheck.json";
import contracts from "../../../config/contracts";
import RPC from "../../../config/rpc";
export const fetchTokenBalancesBatch = (
  chainId: any,
  tokenChunks: [],
  allTokens: [],
  account
) => {
  const web3Client = new Web3(RPC[chainId]);
  const contract = new web3Client.eth.Contract(
    balanceCheckAbi,
    contracts.balanceFetcher[chainId]
  );
  const bal = tokenChunks?.map(async (ch, chidx) => {
    const addresses = ch.map((token) => token.address);
    const balances = await contract.methods
      .balances([account ||"0x087e9c8ef2d97740340a471ff8bb49f5490f6cf6"], addresses)
      .call();

    return balances;
  });
  return Promise.allSettled(bal).then(async (resolved) => {
    console.log({ bal });

    const filteredData = resolved.map((chunkResp) => {
      return chunkResp?.value;
    });
    const tokenBlanacesData = _.flattenDepth(filteredData)
      ?.map((bal, idx) => {
        return {
          ...allTokens[idx],
          balance: bal,
        };
      })
      .filter((token) => token.balance > 0);
    // dispatch(tokensSlice.actions.setBalances(tokenBlanacesData));
    // dispatch(tokensSlice.actions.loadingBalances(false));
    // await dispatch(fetchTokenPrices(tokenBlanacesData));
    return tokenBlanacesData;
  });
};

export const fetchBalances = async (account: string) => {
  const ethTokens = await axios.get(
    "https://raw.githubusercontent.com/saurabhburade/token-list-data/main/eth-tokens.json"
  );
  const allTokens = {
    1: ethTokens.data,
    //   137: polygonTokens.data,
    //   43114: avaxTokens.data,
    //   250: ftmTokens.data,
    //   42161: arbTokens.data,
  };
  const allTokensChunks = {
    1: _.chunk(allTokens[1], 400),
    //   137: _.chunk(allTokens[137], 400),
    //   43114: _.chunk(allTokens[43114], 400),
    //   250: _.chunk(allTokens[250], 400),
    //   42161: _.chunk(allTokens[42161], 400),
  };
  const ethBalances = await fetchTokenBalancesBatch(
    1,
    allTokensChunks[1],
    allTokens[1],
    account
  );
  const mapBalanceTotalEth = ethBalances?.map((token) => {
    return {
      ...token,
      price_usd: token?.dexguru?.price_usd,
      total_usd: new BigNumber(token?.dexguru?.price_usd)
        .multipliedBy(new BigNumber(token?.balance).div(10 ** token.decimals))
        .toFixed(5),
    };
  });
  const sortedTokens = _.orderBy(
    [...mapBalanceTotalEth],
    function (token: any) {
      return Number(token?.issue ? 0 : token.total_usd);
    },
    "desc"
  );
  const ethtotalPortfolioBUSD = _.sumBy(
    [...mapBalanceTotalEth],
    function (token: any) {
      return Number(token?.issue ? 0 : token.total_usd);
    }
  );
  return { sortedTokens, ethtotalPortfolioBUSD };
};


