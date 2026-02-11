import { useEffect, useState } from "react";
import { isAddress, parseEther } from "viem";
import { useAccount, useSendTransaction } from "wagmi";

function SendEthForm() {
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const { isConnected } = useAccount();
    const { data: hash, sendTransaction } = useSendTransaction();

    // Reset form when wallet connection changes
    useEffect(() => {
        setTo("");
        setAmount("");
        setError("");
    }, [isConnected]);

    function sendEth() {

        // Basic validation
        if (!to.trim() || !amount.trim()) {
            setError("All fields are required !");
            return;
        }

        if (!isAddress(to)) {
            setError("Invalid Ethereum Address !")
            return;
        }

        let parsedAmount;

        try {
            parsedAmount = parseEther(amount); // Convert ETH to Wei
        } catch {
            setError("Invalid Amount Format !")
            return;
        }

        if (Number(amount) <= 0) {
            setError("Amount must be greater than 0 !")
            return;
        }

        // Send transaction
        sendTransaction({
            to,
            value: parsedAmount,
        })

    }

    return (
        !isConnected ? (
            <div className="flex justify-center">
                <p className="text-xl">Please Connect your wallet to send ETH !</p>
            </div>
        ) : (
            <div className="flex items-center justify-center flex-col">
                <div className="flex flex-col items-center gap-3 border-1 rounded-sm px-10 py-5">
                    <div className="text-xl flex flex-col gap-2">
                        <input onChange={(e) => setTo(e.target.value)}
                            onClick={(e) => setError("")}
                            className="bg-gray-300 px-3 rounded-sm"
                            placeholder="To" />
                        <input onChange={(e) => setAmount(e.target.value)}
                            onClick={(e) => setError("")}
                            className="bg-gray-300 px-3 rounded-sm"
                            placeholder="Amount" />
                    </div>
                    <div>
                        <button onClick={() => { sendEth() }}
                            className="bg-gray-800 text-white px-3 rounded-sm">
                            Send
                        </button>
                    </div>
                    <div>
                        {hash && <div>Transaction Hash: {hash}</div>}
                        {error && <p className="text-red-600">{error}</p>}
                    </div>
                </div>
            </div>
        )
    );
}

export default SendEthForm;