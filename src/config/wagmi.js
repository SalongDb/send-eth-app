import { mainnet, sepolia } from "viem/chains"
import { createConfig, http, injected } from "wagmi"

export const config = createConfig({
    chains: [mainnet,sepolia],
    connectors: [
        injected()
    ],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    }
})