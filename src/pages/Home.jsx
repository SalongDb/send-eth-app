import ConnectForm from "../components/ConnectForm";
import Navbar from "../components/Navbar";
import SendEthForm from "../components/SendEthForm";
import TransactionStatus from "../components/TransactionStatus";

function Home(){

    return <div className="flex flex-col w-screen h-screen">
        <Navbar/>
        <ConnectForm/>
        {/* <SendEthForm/> */}
        {/* <TransactionStatus/> */}
    </div>
}

export default Home;