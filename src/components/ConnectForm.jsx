import { useState } from "react";
import { ethers, formatEther } from 'ethers';

function ConnectForm() {

    const [account, setAccount] = useState();
    const [balance, setBalance] = useState();

    async function connectWallet(){
        if (!window.ethereum) {
            alert("please install Metamask");
            return;
        }

        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            const address = await signer.getAddress();
            const balance = await provider.getBalance(address);
            const ethbalnce = formatEther(balance);

            setAccount(address);
            setBalance(ethbalnce);
        } catch (error) {
            console.error(error);
        }
    }

    return <div className="flex justify-center h-full">
        {!account ? (
            <button onClick={() =>{
                connectWallet()
            }} >Connect wallet</button>
        ) : (
            <div>
                <p>Connected Account: {account}</p>
                <p>Balance : {balance} ETH</p>
            </div>
        )}
    </div>
}

export default ConnectForm;