import { useState } from "react";
import { parseEther } from "viem";
import { useAccount, useSendTransaction } from "wagmi";

function SendEthForm() {
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [empty, setEmpty] = useState(false);
    const { isConnected } = useAccount();
    const { data: hash, sendTransaction } = useSendTransaction();

    function sendEth() {

        if(!to.trim() || !amount.trim()){
            setEmpty(true);

            setTimeout(() =>{
                setEmpty(false);
            },5000)

            return;
        }

        setEmpty(false);

        sendTransaction({
            to,
            value: parseEther(amount),
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
                        <input onChange={(e) => {setTo(e.target.value); 
                            setEmpty(false);
                            }} className="bg-gray-300 px-3 rounded-sm" placeholder="To"></input>
                        <input onChange={(e) => {setAmount(e.target.value); 
                            setEmpty(false);
                            }} className="bg-gray-300 px-3 rounded-sm" placeholder="Amount"></input>
                    </div>
                    <div>
                        <button onClick={() => { sendEth() }} className="bg-gray-800 text-white px-3 rounded-sm">Send</button>
                    </div>
                    <div>
                        {hash && <div>Transaction Hash: {hash}</div>}
                        {empty && <p className="text-red-600">Error ! One or both credentials missing</p>}
                    </div>
                </div>
            </div>
        )
    );
}

export default SendEthForm;