import { UAuthConnector } from "@uauth/web3-react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import type { AbstractConnector } from "@web3-react/abstract-connector";
import { ChainId } from "./chainIds";

import UAuth from "@uauth/js";
import RPC from "./rpc";
export const supportedChainIds = Object.values(ChainId) as number[];
console.log({ supportedChainIds });
// Instanciate your other connectors.
export const injected = new InjectedConnector({ supportedChainIds });

export const walletconnect = new WalletConnectConnector({
  qrcode: true,
});
export const uauthCore = new UAuth({
  // postLogoutRedirectUri: "http://localhost:3000/logout",
  clientID: process.env.NEXT_PUBLIC_UD_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_UD_REDIRECT,
  scope: "openid wallet",
  // Scope must include openid and wallet
});
export const uauth = new UAuthConnector({
  // postLogoutRedirectUri: "http://localhost:3000/logout",
  clientID: process.env.NEXT_PUBLIC_UD_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_UD_REDIRECT,
  scope: "openid wallet",
  // Scope must include openid and wallet

  // Injected and walletconnect connectors are required.
  connectors: { injected, walletconnect },
});

const connectors: Record<string, AbstractConnector> = {
  injected,
  walletconnect,
  uauth,
};

export const wallets = [
  {
    name: "Injected",
    connector: injected,
    logo: "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png",
  },
  {
    connector: new WalletConnectConnector({
      rpc: RPC,
      bridge: "https://bridge.walletconnect.org",
      qrcode: true,
    }),
    name: "WalletConnect",
    iconName: "wallet-connect.svg",
    description: "Connect to Trust Wallet, Rainbow Wallet and more...",
    href: null,
    color: "#4196FC",
    mobile: true,
    logo: "https://raw.githubusercontent.com/sushiswap/sushiswap-interface/5c63034ea6b9dcad78cd0f8fad958544a6a7fe23/public/images/wallets/wallet-connect.svg",
  },
];
export default connectors;
