import ConnectForm from "../components/ConnectForm";
import Navbar from "../components/Navbar";

function Home(){

    return <div className="flex flex-col w-screen h-screen">
        <Navbar/>
        <ConnectForm/>
    </div>
}

export default Home;