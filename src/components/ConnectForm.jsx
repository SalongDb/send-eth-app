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

    if (!isConnected) return <div>
            {connectors.map((connector) => (
                <button key={connector.uid} onClick={() => connect({ connector })}>
                    {connector.name}
                </button>
            ))}
        </div>

    return <div>
        <p>address : {address}</p>
        <p>balance : {isLoading ? "Loading..." : `${data?.formatted ?? "0"} ${data?.symbol ?? "ETH"}`}</p>
        <button onClick={() => { disconnect()}}>Disconnect</button>
    </div>
}

export default ConnectForm;