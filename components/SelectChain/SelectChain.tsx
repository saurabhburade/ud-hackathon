import { Dialog, Transition } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core";
import { Fragment, useEffect, useState } from "react";
import connectors, {
  supportedChainIds,
  uauth,
  uauthCore,
} from "../../config/connectors";
import { NETWORK_ICON, NETWORK_LABEL } from "../../config/networks";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";

export default function SelectChainModal() {
  let [isOpen, setIsOpen] = useState(false);
  const { activate, account, chainId = 1 } = useWeb3React();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const loginHandler = () => {
    activate(uauth);
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
  console.log({ user, chainId });

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
        //   onClick={openModal}
          className="px-4 py-2 text-sm font-medium rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <img
            src={NETWORK_ICON[Number(chainId)]}
            className="w-8 rounded-md"
            alt=""
          />
       
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
                    <p> Select Chain</p>
                    <button
                      type="button"
                      className="flex items-center grid-cols-2 px-3 py-1 text-sm font-medium text-blue-900 border border-transparent rounded-md bg-blue-100/50 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 "
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </Dialog.Title>
                  {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div> */}

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {supportedChainIds?.map((id) => {
                      if (Number(id) && NETWORK_LABEL[id]) {
                        return (
                          <button
                            type="button"
                            className="flex items-center w-full grid-cols-2 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 "
                          >
                            <ImageWithFallback
                              src={NETWORK_ICON[id]}
                              width={30}
                              height={30}
                              className="rounded-md"
                            />
                            <p className="mx-2 text-left">
                              {NETWORK_LABEL[id]}
                            </p>
                          </button>
                        );
                      }
                    })}
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
