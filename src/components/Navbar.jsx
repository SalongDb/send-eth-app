import { useAccount } from "wagmi";
import Logo from "../svg/Logo.jsx"

function Navbar() {
    const {address, isConnected} = useAccount();

    return <div className="h-68px bg-gray-800 text-white flex justify-between items-center px-20">
        <div className="w-15 h-15 p-3 text-white">
            <Logo />
        </div>

        <div>
            {isConnected ? (
                <p>
                    {address.slice(0,6)}....{address.slice(-4)}
                </p>
            ) : (
                <p>Connect</p>
            )}
        </div>
    </div>
}

export default Navbar;