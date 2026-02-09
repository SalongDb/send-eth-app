import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../config/wagmi"

const queryClient = new QueryClient();

function Web3provider({ children }) {

    return (
        <QueryClientProvider client={queryClient}>
            <WagmiProvider config={config}>
                {children}
            </WagmiProvider>
        </QueryClientProvider>
    )
}

export default Web3provider;
