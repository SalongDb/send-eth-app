import { useState } from "react";
import { ethers } from 'ethers';

function ConnectForm() {

    const [account, setAccount] = useState();

    async function connectWallet(){
        if (!window.ethereum) {
            alert("please install Metamask");
            return;
        }

        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();

            setAccount(address);
        } catch (error) {
            console.error(error);
        }
    }

    return <div className="flex justify-center h-full">
        {!account ? (
            <button onClick={()=>{connectWallet()}} >Connect wallet</button>
        ) : (
            <div>
                <p>Connected Account: {account}</p>
            </div>
        )}
    </div>
}

export default ConnectForm;