import { useAccount, useBalance, useConnect, useConnectors, useDisconnect } from "wagmi";

function ConnectForm() {

    // Wallet connection actions
    const { connect } = useConnect();
    const connectors = useConnectors();
    const { disconnect } = useDisconnect();

    // Account state
    const { address, isConnected } = useAccount();

    // Fetch wallet balance only when connected
    const { data, isLoading } = useBalance({
        address,
        enabled: isConnected,
    })

    // Show available wallets if not connected
    if (!isConnected)
        return (
            <div className="flex flex-col items-center p-20 gap-1">
                {connectors.map((connector) => (
                    <button
                        className="flex justify-center w-48 bg-gray-300 rounded-sm"
                        key={connector.uid}
                        onClick={() => connect({ connector })}>
                        {connector.name}
                    </button>
                ))}
            </div>
        )

    // Show balance and disconnect option when connected
    return (
        <div className="flex flex-col items-center p-20 gap-1">
            <p className="text-xl">Balance : {isLoading ? "Loading..." : `${data?.formatted ?? "0"} ${data?.symbol ?? "ETH"}`}</p>
            <button
                onClick={() => { disconnect() }}
                className="bg-gray-800 text-white px-3 rounded-sm">Disconnect</button>
        </div>
    )
}

export default ConnectForm;