import Web3provider from "../providers/Web3provider"
import Navbar from "../components/Navbar";
import SendEthForm from "../components/SendEthForm";
import TransactionStatus from "../components/TransactionStatus";
import ConnectForm from "../components/ConnectForm";

function Home(){

    return <div className="flex flex-col w-screen h-screen">
        <Web3provider>
            <Navbar/>
            <ConnectForm/>
            <SendEthForm/>
        </Web3provider>
        {/* <TransactionStatus/> */}
    </div>
}

export default Home;