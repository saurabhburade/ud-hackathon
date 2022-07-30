import { Dialog, Transition } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core";
import { Fragment, useEffect, useState } from "react";
import connectors, { uauth, uauthCore, wallets } from "../../config/connectors";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";

export default function ConnectWalletModal() {
  let [isOpen, setIsOpen] = useState(false);
  const { activate, account } = useWeb3React();
  const [loading, setloading] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const loginUdHandler = async () => {
    await setloading(true);
  await  activate(uauth)
      .then((res) => {
        console.log({ res });

        setloading(false);

        if (uauthCore) {
          uauthCore
            ?.user()
            ?.then(setUser)
            ?.catch((error) => {
              console.error("profile error:", error);
            });
          closeModal();
        }
      })
      .catch((err) => {
        console.log({ err });
        closeModal();
        setloading(false);
      });
    // await uauth
    //   .activate()
  };
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
  console.log({ user, account });

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {account ? (user?.sub ? user?.sub : account) : "Connect"}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                  >
                    <p> Connect Wallet</p>
                    <button
                      type="button"
                      className="flex items-center grid-cols-2 px-3 py-1 text-sm font-medium text-blue-900 border border-transparent rounded-md bg-blue-100/50 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 "
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </Dialog.Title>

                  <div className="grid gap-4 mt-4">
                    {wallets?.map((wallet) => {
                      return (
                        <button
                          type="button"
                          className="flex items-center w-full grid-cols-2 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 "
                          onClick={() => {
                            activate(wallet?.connector)
                              .then((res) => {
                                console.log({ res });

                                setloading(false);

                                if (uauthCore) {
                                  uauthCore
                                    ?.user()
                                    ?.then(setUser)
                                    ?.catch((error) => {
                                      console.error("profile error:", error);
                                    });
                                  closeModal();
                                }
                              })
                              .catch((err) => {
                                console.log({ err });
                                closeModal();
                                setloading(false);
                              });
                          }}
                        >
                          <ImageWithFallback
                            src={wallet?.logo}
                            width={30}
                            height={30}
                            className="rounded-md"
                          />
                          <p className="mx-2 text-left">{wallet?.name}</p>
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      className="flex items-center justify-center w-full grid-cols-2 px-4 py-2 text-sm bg-[#0D67FE] hover:bg-[#0546B7] active:bg-[#478BFE] text-white rounded-md font-bold"
                      onClick={loginUdHandler}
                      style={{ background: loading ? "#0D67FE" : "" }}
                    >
                      {loading ? (
                        <svg
                          className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <ImageWithFallback
                          src="/ud-login-buttons/ud-logo.svg"
                          width={30}
                          height={30}
                          className="rounded-md"
                        />
                      )}

                      <p className="mx-2 text-left">Login With Unstoppable</p>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
