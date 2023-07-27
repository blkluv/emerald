import { useEffect, useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import emeraldLogo from "@/assets/images/emeraldlogo-mini.png";
import Image from "next/image";

export default function Header() {
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowHeaderOptions(window.innerWidth >= 768);
    }

    // Call the handleResize function initially and add a resize event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <header className="flex z-50 items-center justify-between px-8 py-4 bg-dark text-white">
        {/* Left part with brand icon */}
        <div className="flex items-center">
          <Image src={emeraldLogo} alt="" className="h-8 w-8 mr-2 w-1/8 h-1/8 ml-2" />
          <h1 className="text-lg  text-gold">Emerald</h1>
        </div>

        {/* Right part with connect wallet button and links */}
        <div className="flex items-center">
          {/* Connect wallet button */}
          {showHeaderOptions && (
            <div className="mr-4" id="header-options">
              <a href="/marketplace" className="text-white hover:text-gray-200 px-2 py-1">
                Marketplace
              </a>
              <a href="/portfolio" className="text-white hover:text-gray-200 px-2 py-1">
                Portfolio
              </a>
              <a href="/" className="text-white hover:text-gray-200 px-2 py-1">
                Company
              </a>
            </div>
          )}
          <ConnectWallet className="py-2 px-4 mr-3" />
          {/* Links */}
        </div>
      </header>
    </div>
  );
}
