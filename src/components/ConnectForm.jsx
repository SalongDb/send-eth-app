import { useAccount, useBalance, useConnect, useConnectors, useDisconnect } from "wagmi";

function ConnectForm() {
    const { connect } = useConnect();
    const connectors = useConnectors();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const {data, isLoading, error, refetch} = useBalance({
        address,
        enabled: isConnected,
    })

    if (!isConnected) return <div className="flex flex-col items-center p-20 gap-1">
            {connectors.map((connector) => (
                <button className="flex justify-center w-48 bg-gray-300 rounded-sm" key={connector.uid} onClick={() => connect({ connector })}>
                    {connector.name}
                </button>
            ))}
        </div>

    return <div className="flex flex-col items-center p-20 gap-1">
        <p className="text-xl">Balance : {isLoading ? "Loading..." : `${data?.formatted ?? "0"} ${data?.symbol ?? "ETH"}`}</p>
        <button onClick={() => { disconnect()}} className="bg-gray-800 text-white px-3 rounded-sm">Disconnect</button>
    </div>
}

export default ConnectForm;