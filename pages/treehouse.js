import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import confetti from "canvas-confetti";
import { SemipolarSpinner } from "react-epic-spinners";

const connector = new WalletConnectConnector({
  infuraId: "9fb83dcc98ca424d887a2ac6348090ee",
});

const tokenAddress = "0x34428Ca4A01E19161133Fe7ab0c94295b5C90b63";

const minABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];

function getLibrary(provider) {
  return new Web3(provider);
}

export default function WrappedTreehousePage() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <TreehousePage />
    </Web3ReactProvider>
  );
}

function TreehousePage() {
  const web3react = useWeb3React();
  const { activate, active, account, library } = web3react;

  const [isLoading, setIsLoading] = useState(false);
  const [isFren, setIsFren] = useState(false);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (!library) return;

    const contract = new library.eth.Contract(minABI, tokenAddress);
    contract.methods
      .balanceOf(account)
      .call()
      .then((balance) => {
        if (balance >= 1) {
          confetti();
          setIsFren(true);
          setBalance(balance);
        }
      });
  }, [account]);

  return (
    <Layout active="treehouse">
      <div className="p-5 mx-auto text-center">
        {!active && (
          <ConnectSection
            onConnectClick={() => {
              activate(connector);
            }}
          />
        )}
        {active && (
          <div>
            {isLoading && <SemipolarSpinner />}
            {!isLoading && (
              <div className='text-center leading-loose'>
                <img src='/mudasir.jpg' className='inline' />
                <h2 className="font-bold">hi {account}</h2>
                <p>You hold {balance} $MIKKER and are certifiably my best fren</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

const ConnectSection = ({ onConnectClick }) => (
  <div>
    <p className="max-w-prose mx-auto text-center">
      If you're the lucky holder of some{" "}
      <a
        href="https://twitter.com/mikker/status/1397909545335201793"
        className="link"
      >
        $MIKKER
      </a>
      , there's more for you…
    </p>
    <div className="h-4"></div>
    <button
      className="btn font-normal text-white dark:text-black bg-gradient-to-r dark:from-sunset-300 dark:to-gold-500 from-blue-400 to-purple-500"
      onClick={onConnectClick}
    >
      Connect wallet
    </button>
  </div>
);
